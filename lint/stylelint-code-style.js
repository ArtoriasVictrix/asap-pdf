// ===============================================
// ЛОКАЛЬНЫЙ ПЛАГИН STYLELINT: КОДСТАЙЛ-ПРАВИЛА
// ===============================================
//
// Возвращает правила форматирования, удалённые из ядра stylelint 16+
// (string-quotes, color-hex-case, number-leading-zero, number-no-trailing-zeros).
// Поддерживают автофикс (--fix), подключаются в .stylelintrc локальным путём:
//
//   "plugins": ["./lint/stylelint-code-style.js"]
//
// Механизм фикса в stylelint 18: правило всегда сообщает о нарушении вместе
// с функцией исправления (fix.apply) и meta.fixable — движок применяет её сам.

const stylelint = require('stylelint');

// Разбивает текст на сегменты "вне строк" / "внутри строк"
const splitByStrings = (text) => {
	const segments = [];
	const pattern = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g;
	let last = 0;
	let match;

	while ((match = pattern.exec(text)) !== null) {
		if (match.index > last) segments.push({ isString: false, text: text.slice(last, match.index) });
		segments.push({ isString: true, text: match[0] });
		last = pattern.lastIndex;
	}

	if (last < text.length) segments.push({ isString: false, text: text.slice(last) });
	return segments;
};

// Применяет fix ко всем сегментам кода (вне строковых литералов)
const mapCodeSegments = (text, fix) => {
	let changed = false;
	const result = splitByStrings(text).map(segment => {
		if (segment.isString) return segment.text;
		const patched = fix(segment.text);
		if (patched !== segment.text) changed = true;
		return patched;
	});

	return changed ? result.join('') : text;
};

// Применяет fix ко всем строковым литералам (обрамление кавычек),
// предварительно исключив содержимое url(...)
const mapStringSegments = (text, fixString) => {
	const urls = [];
	// Маскируем url(...), чтобы не менять кавычки внутри ссылок
	const masked = text.replace(/url\([^)]*\)/g, (m) => {
		urls.push(m);
		return `\u0000${urls.length - 1}\u0000`;
	});

	let changed = false;
	const result = splitByStrings(masked).map(segment => {
		if (!segment.isString) return segment.text;
		const patched = fixString(segment.text);
		if (patched !== segment.text) changed = true;
		return patched;
	});

	const restored = (changed ? result.join('') : masked)
		.replace(/\u0000(\d+)\u0000/g, (_, i) => urls[Number(i)]);

	return restored !== text ? restored : text;
};

// -------- Функции исправлений --------

// "Roboto" → 'Roboto' (строки с апострофами внутри не трогаются)
const fixQuotesInString = (string) => {
	if (string.startsWith('"') && string.endsWith('"') && !string.slice(1, -1).includes("'")) {
		return `'${string.slice(1, -1)}'`;
	}
	return string;
};

// #00f2c3 → #00F2C3
const fixHexCase = (code) => code.replace(/#[0-9a-f]*[a-f][0-9a-f]*(?![0-9a-fA-F])/g, hex => hex.toUpperCase());

// 0.5 → .5
const fixLeadingZero = (code) => code.replace(/(^|[\s(:,/=\-])0\.([0-9]+)/g, '$1.$2');

// 1.50 → 1.5, 2.0 → 2
const fixTrailingZeros = (code) => code
	.replace(/([0-9]+)\.([0-9]*[1-9])0+(?![0-9])/g, '$1.$2')
	.replace(/([0-9]+)\.0+(?![0-9])/g, '$1');


// -------- Универсальная фабрика правил --------

const makeRule = (ruleName, message, transform) => {
	const rule = () => (root, result) => {
		const checkNode = (node) => {
			const fixed = transform(node.value);
			if (fixed === node.value) return;

			stylelint.utils.report({
				ruleName,
				result,
				node,
				message: `${message} (${ruleName})`,
				fix: {
					node,
					apply: () => { node.value = fixed; },
				},
			});
		};

		root.walkDecls(checkNode);
	};

	// stylelint читает метаданные правила из свойства rule.meta
	rule.meta = { fixable: true };

	return { ruleName, rule };
};


module.exports = [
	// Ожидает одинарные кавычки ('Roboto', а не "Roboto"); url(...) не проверяется
	makeRule(
		'code-style/string-quotes',
		'Expected single quotes',
		(value) => mapStringSegments(value, fixQuotesInString),
	),

	// Ожидает hex-цвета в верхнем регистре (#00F2C3, а не #00f2c3)
	makeRule(
		'code-style/color-hex-case',
		'Expected uppercase hex color',
		(value) => mapCodeSegments(value, fixHexCase),
	),

	// Ожидает числа без ведущего нуля (.5, а не 0.5)
	makeRule(
		'code-style/number-leading-zero',
		'Expected number without leading zero (".5" instead of "0.5")',
		(value) => mapCodeSegments(value, fixLeadingZero),
	),

	// Ожидает числа без хвостовых нулей (1.5, а не 1.50; 2, а не 2.0)
	makeRule(
		'code-style/number-no-trailing-zeros',
		'Expected number without trailing zeros ("1.5" instead of "1.50")',
		(value) => mapCodeSegments(value, fixTrailingZeros),
	),
];
