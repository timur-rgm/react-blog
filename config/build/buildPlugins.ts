import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import type { BuildPaths } from "./types/config";

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        })
    ]
}