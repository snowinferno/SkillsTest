const path = require('path');
module.exports = {
	entry: 'src/app.js',
	output: {
		path: path.resolve('public/javascripts'),
		filename: 'app.bundle.js',
	},
	loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015'],
			},
		},
		{
			test: /\.json$/,
			include: path.resolve('data'),
			loader: 'json',
		},
	]
}
