const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/icon.png",
      favicons: {
        icons: {
          android: [
            "android-chrome-192x192.png",
            "android-chrome-144x144.png",
            "android-chrome-512x512.png",
          ],
          appleIcon: ["apple-touch-icon-180x180.png"],
          appleStartup: false,
          coast: false,
          favicons: ["favicon-16x16.png", "favicon-32x32.png"],
          firefox: false,
          windows: false,
          yandex: false,
        },
      },
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
