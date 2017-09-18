var webpack = require("webpack");
var path = require("path");
var buildPath = path.resolve(__dirname, "./");
var nodeModulesPath = path.resolve(__dirname, "node_modules");

process.traceDeprecation = true;

var reactExternal = {
  root: "React",
  commonjs2: "react",
  commonjs: "react",
  amd: "react"
};

var styledExternal = {
  root: "styled-components",
  commonjs2: "styled-components",
  commonjs: "styled-components",
  amd: "styled-components"
};

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    __PRODUCTION__: true,
    "process.env.NODE_ENV": JSON.stringify("production")
  }),
  new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      minimize: true,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
  })
];

var config = {
  entry: [path.join(__dirname, '/src')],
  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: [".js", ".jsx"]
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Render source-map file for final build
  devtool: "eval-source-map",
  //output config
  output: {
    filename: "index.js", //Name of output file
    chunkFilename: "[id].chunk.js",
    path: buildPath, //Path of output file
    libraryTarget: "umd",
    library: "styled-animated",
    umdNamedDefine: true
  },
  externals: {
    react: reactExternal,
    "styled-components": styledExternal
  },
  plugins: plugins,
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [nodeModulesPath],
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
        }
      }
    ]
  }
};

module.exports = config;
