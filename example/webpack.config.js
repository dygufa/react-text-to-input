var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "eval",
    entry: "./src/index",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        alias: {
            "react-text-to-input": path.join(__dirname, "..", "src")
        },
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        })
    ]
};