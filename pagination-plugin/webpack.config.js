const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    bundle: __dirname + "/app/index.js",
    'wj': __dirname + "/app/wj_funny.js"
  },
  output: {
    path: __dirname+ "/dist",
    filename: "[name].js"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./",
    publicPath: "/dist/",
    inline: true,
    port: 3002,
    historyApiFallback: true,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env", "react"]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { 
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 65000,
              name: "../images/[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('[name].css').replace('bundle', 'styles');
      },
      ignoreOrder: true
    })
  ]
}