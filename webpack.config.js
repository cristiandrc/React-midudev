const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest")
const path = require("path")

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new WebpackPwaManifestPlugin({
      name: "Petgran - Tu app de fotos de mascotas",
      shortname: "Petgram",
      description: "Con Petgram puedes encontar fotos de animales domesticos",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          size: [96, 128, 192, 256, 384, 512],
          purpose: "any maskable",
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
}
