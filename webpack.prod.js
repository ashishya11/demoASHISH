const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    // module: {
    //     rules: [{
    //         test: /\.scss$/,
    //         use: [
    //             MiniCssExtractPlugin.loader,
    //             "css-loader",
    //             "sass-loader"
    //         ]
    //     }]
    // },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            },]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/css', 'dist/js']),
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].css"
        // }),
        new HtmlWebpackPlugin({
            title: 'demoASHISH',
            favicon: `src/assets/logo/favicon.ico`,
            inject: false,
            template: require('html-webpack-template'),
            bodyHtmlSnippet: '<div id="app"></div>'
        })
    ]
});