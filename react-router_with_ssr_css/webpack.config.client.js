const path = require('path');

module.exports = env => {
    return {
        entry: {
            "main": ["./src/Client.js"]
        },
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