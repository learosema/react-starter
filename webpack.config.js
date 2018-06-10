var path = require("path")

module.exports = {
  module: {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
      publicPath: "/public"
    },
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
        
      }
    ]
  }
}