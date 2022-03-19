const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // compress: true,
    port: 9000,
  }
};
