function isExternal(module) {
  var userRequest = module.userRequest;

  if (typeof userRequest !== "string") {
    return false;
  }

  var index = userRequest.indexOf("node_modules") >= 0;

  return index;
}

var webpack = require("webpack");
var path = require("path");
var TsConfigPathsPlugin = require("awesome-typescript-loader")
  .TsConfigPathsPlugin;
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    ListComponent: "./src/components/ListComponent.tsx"
  },
  // entry: "./src/routes/BasicExample.tsx",
  output: {
    filename: "[name].bundle.min.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  //devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    modules: [__dirname, "@types", "node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: ["/node_modules/"]
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    jquery: "jQuery",
    redux: "Redux",
    "react-redux": "ReactRedux",
    "redux-thunk": "ReduxThunk",
    moment: "moment",
    lodash: "_",
    mobx: "mobx",
    "mobx-react": "mobxReact"
  },

//   splitChunks: {
//     chunks: "async",
//     minSize: 30000,
//     minChunks: 1,
//     maxAsyncRequests: 5,
//     maxInitialRequests: 3,
//     name: true,
//     cacheGroups: {
//       default: {
//         minChunks: 2,
//         priority: -20,
//         reuseExistingChunk: true
//       },
//       vendors: {
//         test: /[\\/]node_modules[\\/]/,
//         priority: -10
//       }
//     }
//   }
};
