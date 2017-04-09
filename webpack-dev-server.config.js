require("babel-register");
var webpack = require("webpack");
var path = require("path");
//var autoprefixer = require('autoprefixer');
var buildPath = path.resolve(__dirname, "./dist");
var nodeModulesPath = path.resolve(__dirname, "node_modules");
var TransferWebpackPlugin = require("transfer-webpack-plugin");

//var ExtractTextPlugin = require('extract-text-webpack-plugin');
process.traceDeprecation = true;

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.ProvidePlugin({
    React: "react",
    ReactDOM: "react-dom"
  }),

  new TransferWebpackPlugin(
    [{ from: "www" }],
    path.resolve(__dirname, "examples")
  ),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true,
    "process.env.NODE_ENV": JSON.stringify("development")
  })
];

var config = {
  entry: "./examples/index.js",
  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
    contentBase: "./examples/www",
    hot: true,
    inline: true,
    port: 3333
  },
  output: {
    path: buildPath,
    filename: "examples/index.js"
  },
  plugins: plugins,
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: [nodeModulesPath],
        loader: "eslint-loader"
      },

      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            cacheDirectory: false,
            presets: [
              ["env", { modules: false }],
              "react",
              "stage-1",
              "stage-2"
            ],
            plugins: ["transform-object-rest-spread"]
          }
        },
        exclude: [nodeModulesPath]
      }
    ]
  }
};

module.exports = config;
