module.exports.getCheckIcon = () => {
	const checkIcon = `
		<svg width="20" height="20" class="svg flex-shrink-0 mr-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M18.3333 9.2333V9.99997C18.3323 11.797 17.7504 13.5455 16.6744 14.9848C15.5985 16.4241 14.0861 17.477 12.3628 17.9866C10.6395 18.4961 8.79771 18.4349 7.11205 17.8121C5.42639 17.1894 3.9872 16.0384 3.00912 14.5309C2.03105 13.0233 1.56648 11.24 1.68472 9.4469C1.80296 7.65377 2.49766 5.94691 3.66522 4.58086C4.83278 3.21482 6.41064 2.26279 8.16348 1.86676C9.91632 1.47073 11.7502 1.65192 13.3917 2.3833" stroke="#1AB45D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M18.3333 3.33325L10 11.6749L7.5 9.17492" stroke="#1AB45D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	`;
	return checkIcon;
}

module.exports.getWarningIcon = () => {
	const warningIcon = `
		<svg width="20" height="20" class="svg flex-shrink-0 mr-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.57499 3.21659L1.51665 14.9999C1.37113 15.2519 1.29413 15.5377 1.29331 15.8287C1.2925 16.1197 1.3679 16.4059 1.51201 16.6587C1.65612 16.9115 1.86392 17.1222 2.11474 17.2698C2.36556 17.4174 2.65065 17.4967 2.94165 17.4999H17.0583C17.3493 17.4967 17.6344 17.4174 17.8852 17.2698C18.136 17.1222 18.3439 16.9115 18.488 16.6587C18.6321 16.4059 18.7075 16.1197 18.7067 15.8287C18.7058 15.5377 18.6288 15.2519 18.4833 14.9999L11.425 3.21659C11.2764 2.97168 11.0673 2.76919 10.8176 2.62866C10.568 2.48813 10.2864 2.41431 9.99999 2.41431C9.71354 2.41431 9.43193 2.48813 9.18232 2.62866C8.93272 2.76919 8.72355 2.97168 8.57499 3.21659V3.21659Z" stroke="#F5BC14" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M10 7.5V10.8333" stroke="#F5BC14" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M10 14.1667H10.0083" stroke="#F5BC14" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	`;
	return warningIcon;
}

module.exports.getDangerIcon = () => {
	const dangerIcon = `
		<svg width="20" height="20" class="svg flex-shrink-0 mr-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6025 5.39763 18.3334 10 18.3334Z" stroke="#F33666" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M12.5 7.5L7.5 12.5" stroke="#F33666" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M7.5 7.5L12.5 12.5" stroke="#F33666" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	`;
	return dangerIcon;
}

module.exports.getLinkIcon = () => {
	const linkIcon = `
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#287BF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M10 2H14V6" stroke="#287BF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M6.66666 9.33333L14 2" stroke="#287BF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	`;
	return linkIcon;
}
