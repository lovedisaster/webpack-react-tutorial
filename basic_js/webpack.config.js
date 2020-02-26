const path = require('path');

module.exports = env => {
    return {
        output: {
            filename: `[name]-[chunkhash].js`,
            path: path.join(__dirname, 'dist')
        }
    }
}