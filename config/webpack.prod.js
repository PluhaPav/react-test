/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { getLoaders } = require('./loaders');
const { getPlugins } = require('./plugins');
const helpers = require('./helpers');
const ENV = require('../node_envs.js');

const ASSETS_PATH = './assets/';

const config =
    {
        mode: ENV.PROD,
        entry: {
            app: ['@babel/polyfill', helpers.root('src', 'index.jsx')]
        },
        output: {
            path: helpers.root('build'),
            publicPath: '',
            filename: `${ASSETS_PATH}[chunkhash].[name].js`
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            modules: [
                helpers.root('src'),
                helpers.root('node_modules')
            ]
        },
        module: {
            rules: getLoaders(ENV.PROD, ASSETS_PATH)
        },
        plugins: getPlugins(ENV.PROD),
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    parallel: true,
                    uglifyOptions: {
                        output: {
                            beautify: false
                        }
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    };

module.exports = config;
