module.exports = {
	// mode: 'production',
	mode: 'development',
	output: {
	  filename: 'app.js',
	},
	// devtool: 'eval-source-map',
	module: {
	  rules: [
		{
		  test: /\.(js)$/,
		  exclude: /(node_modules)/,
		  loader: 'babel-loader',
		  query: {
			presets: ['@babel/preset-env']
		  }
		}
	  ]
  },
};
