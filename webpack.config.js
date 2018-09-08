const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 3333
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [ 'style-loader', 'css-loader' ]
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ] 
  }
}
