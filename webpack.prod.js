const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const remotes = {
    hangmanGame: "nagp-hangman@https://mittalankit.github.io/nagp-hangman/remoteEntry.js",
    tictactoeGame: "nagp-tictactoe@https://mittalankit.github.io/nagp-tictactoe/remoteEntry.js",
}

module.exports = merge(common, {
    mode: 'production',

    output: {
        publicPath: "https://mittalankit.github.io/nagp-games-parent/",
    },

    plugins: [
        new ModuleFederationPlugin({
          name: "caw_container",
          filename: "remoteEntry.js",
          remotes: remotes,
          exposes: {},
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
        new HtmlWebPackPlugin({
          template: "./src/index.html",
        }),
      ],
});
