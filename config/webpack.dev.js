const path = require("path");
/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
const { getLoaders } = require("./loaders");
const { getPlugins } = require("./plugins");
const helpers = require("./helpers");
const ENV = require("../node_envs.js");

const ASSETS_PATH = "";

const config = {
    mode: ENV.DEV,
    entry: {
        app: ["@babel/polyfill", helpers.root("src", "index.jsx")]
    },
    devtool: "cheap-module-source-map",
    output: {
        path: helpers.root("build"),
        publicPath: "/",
        filename: `${ASSETS_PATH}[name].js`,
        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: [helpers.root("src"), helpers.root("node_modules")]
    },
    module: {
        rules: getLoaders(ENV.DEV, ASSETS_PATH)
    },
    plugins: getPlugins(ENV.DEV)
};

module.exports = config;
