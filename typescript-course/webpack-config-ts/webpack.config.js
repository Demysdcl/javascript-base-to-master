const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/A0016-webpack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules|src\/basic.types/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
  watchOptions: {
    ignored: /src\/basic.types/,
  },
  devtool: 'source-map',
}
