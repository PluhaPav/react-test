const ENV = require('./node_envs.js');
/* eslint global-require: 0 */
switch (process.env.NODE_ENV) {
    case ENV.PROD:
        module.exports = require('./config/webpack.prod');
        break;
    case ENV.DEV:
    default:
        module.exports = require('./config/webpack.dev');
}
