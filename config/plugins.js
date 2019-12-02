/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./helpers');
const ENV = require('../node_envs.js');

function getHtmlWebpackPlugin() {
    return new HtmlWebpackPlugin({
        inject: 'body',
        template: 'src/stub.html'
    });
}

function getCopyWebpack() {
    return new CopyWebpackPlugin([
        {
            from: helpers.root('src', 'assets', 'static'),
            to: helpers.root('build', 'static'),
            flatten: true
        }
    ]);
}

function getMiniCssExtractPlugin() {
    return new MiniCssExtractPlugin({
        filename: '[hash].[name].css'
    });
}

/**
 * Get list of plugins for proper build
 * @param {'development'|'production'} type - type of build
 * @return {Array} list of plugins
 */
function getPlugins(type = ENV.DEV) {
    const isProd = type === ENV.PROD;

    let list = [
        getHtmlWebpackPlugin(),
        getCopyWebpack()
    ];

    if (isProd) {
        list = list.concat([
            getMiniCssExtractPlugin()
        ])
    }

    return list;
}

module.exports = {
    getPlugins
};
