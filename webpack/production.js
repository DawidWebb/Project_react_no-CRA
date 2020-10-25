const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtructPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { module } = require("./development");

module.exports = {
  optimization: {
    mimimizer: [new OptimizeCssAssetsWebpackPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          MiniCssExtructPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(s(a|c)ss|css)$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          MiniCssExtructPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtructPlugin({
      filename: "style.[contenthash:6].css",
      chunkFilename: "style.[contenthash:6].css",
      publicPath: "./",
    }),
  ],
};
