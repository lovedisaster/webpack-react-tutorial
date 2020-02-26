const path = require('path');
//https://webpack.js.org/configuration/ see default configuration

module.exports = env => {
    return {
        output: {
            filename: `[name].js`,
            path: path.join(__dirname, 'build')
        }
    }
}