const path = require('path');
//https://webpack.js.org/configuration/ see default configuration

module.exports = env => {
    return {
        output: {
            filename: `[name].js`,
            path: path.join(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: 'eval-source-map',
        module: {
            rules: [
                { 
                    test: /\.(js|.jsx)$/, 
                    exclude: /node_modules/, 
                    use: {loader: 'babel-loader'}
                }
            ]
        }
    }
}