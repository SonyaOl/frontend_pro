const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: {
            task1: path.resolve(__dirname, 'src/js/task1.js'),
            task2: path.resolve(__dirname, 'src/js/task2.js'),
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].[contenthash].js',
            clean: true,
        },

        devServer: {
            static: path.resolve(__dirname, 'dist'),
            port: 8080,
            open: true,
            hot: true,
        },

        module: {
            rules: [{
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[name][ext]',
                    },
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/task1.html'),
                filename: 'task1.html',
                chunks: ['task1'],
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/task2.html'),
                filename: 'task2.html',
                chunks: ['task2'],
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].css',
            }),
        ],




        optimization: {
            minimize: isProd,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
            },
        },

        devtool: isProd ? false : 'source-map',

        mode: isProd ? 'production' : 'development',
    };
};