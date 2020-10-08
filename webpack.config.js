// webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.svg$/, loader: 'svg-url-loader' }
    ]
  }
};