/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const helpers = require("./helpers");
const ENV = require("../node_envs.js");

function getScriptLoader() {
    return {
        test: /\.jsx?$/,
        use: {
            loader: "babel-loader",
            options: { cacheDirectory: true }
        },
        include: [helpers.root("src")]
    };
}

function getStyleLoader(isProd = false) {
    if (isProd) {
        return {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "./"
                    }
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                },
                {
                    loader: "sass-loader"
                }
                // {
                //     loader: 'postcss-loader',
                //     options: {
                //         config: {
                //             path: helpers.root('config')
                //         }
                //     }
                // }
            ]
        };
    }

    return {
        test: /\.scss$/,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    importLoaders: 1
                }
            },
            {
                loader: "sass-loader"
            }
            // {
            //     loader: "postcss-loader",
            //     options: {
            //         config: {
            //             path: helpers.root("config")
            //         }
            //     }
            // }
        ]
    };
}

function getImageLoader(isProd = false, folder = "") {
    if (isProd) {
        return {
            test: /\.(jpe?g|png|gif)$/,
            use: [
                {
                    loader: "file-loader",
                    options: { name: `${folder}[name].[ext]` }
                },
                {
                    loader: "image-webpack-loader",
                    options: {
                        mozjpeg: {
                            progressive: true
                        },
                        gifsicle: {
                            interlaced: false
                        },
                        optipng: {
                            optimizationLevel: 7
                        },
                        pngquant: {
                            quality: "65-90",
                            speed: 4
                        }
                    }
                }
            ],
            include: [helpers.root("src")]
        };
    }

    return {
        test: /\.(jpe?g|png|gif)$/,
        use: {
            loader: "file-loader",
            options: {
                name: `${folder}[name].[ext]`
            }
        },
        include: [helpers.root("src")]
    };
}

function getSVGLoader(isProd = false, folder) {
    if (isProd) {
        return {
            test: /\.(svg)$/,
            use: [
                {
                    loader: "svg-sprite-loader",
                    options: { name: `${folder}[name].[ext]` }
                },
                {
                    loader: "image-webpack-loader",
                    options: {
                        svgo: {
                            plugins: [{ removeViewBox: false }, { removeEmptyAttrs: false }]
                        }
                    }
                }
            ],
            include: [helpers.root("src")]
        };
    }

    return {
        test: /\.(svg)$/,
        use: {
            loader: "svg-sprite-loader",
            options: {
                name: `${folder}[name].[ext]`
            }
        },
        include: [helpers.root("src")]
    };
}

function getFontEotLoader(folder) {
    return {
        test: /.(eot)$/,
        use: {
            loader: "file-loader",
            options: {
                mimetype: "application/vnd.ms-fontobject",
                name: `${folder}[name].[ext]`
            }
        }
    };
}

function getFontWoffLoader(folder) {
    return {
        test: /.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
            loader: "file-loader",
            options: {
                mimetype: "application/font-woff",
                name: `${folder}[name].[ext]`
            }
        }
    };
}

function getFontTtfLoader(folder) {
    return {
        test: /.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
            loader: "file-loader",
            options: {
                mimetype: "application/octet-stream",
                name: `${folder}[name].[ext]`
            }
        }
    };
}

function getHTMLLoader() {
    return {
        test: /\.html$/,
        loader: "html-loader?minimize=false"
    };
}

function getMDLoader() {
    return {
        test: /\.md$/,
        loader: "raw-loader"
    };
}

function getVideoLoader(folder) {
    return {
        test: /\.(avi|mp4)$/,
        use: {
            loader: "file-loader",
            options: {
                name: `${folder}[name].[ext]`
            }
        },
        include: [helpers.root("src")]
    };
}

/**
 * Get list of loaders for proper build
 * @param {'development'|'production'} type - type of build
 * @param {string} folder - folder path
 * @return {Array} list of loaders
 */
function getLoaders(type = ENV.DEV, folder = "") {
    const isProd = type === ENV.PROD;

    return [getScriptLoader(), getStyleLoader(isProd), getImageLoader(isProd, folder), getSVGLoader(isProd, folder), getFontEotLoader(folder), getFontWoffLoader(folder), getFontTtfLoader(folder), getHTMLLoader(), getMDLoader(), getVideoLoader(folder)];
}

module.exports = {
    getLoaders
};
