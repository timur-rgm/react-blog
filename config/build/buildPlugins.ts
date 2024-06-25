import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { BuildPaths } from './types/config'

export function buildPlugins(paths: BuildPaths, isDev: boolean): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        })
    ]

    plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    )

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins
}
