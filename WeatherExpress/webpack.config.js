const path = require('path');
module.exports = {
  entry: path.resolve('./src/entry.js'),
  output: {
    path: path.resolve('./public/javascripts'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".less"],
  },
};
