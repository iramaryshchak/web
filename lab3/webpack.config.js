const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 9000, // Налаштувала порт, сервер запускається на 9000 порті
  },
};
