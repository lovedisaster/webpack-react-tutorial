const path = require('path');
//https://webpack.js.org/configuration/ see default configuration

module.exports = env => {
    return {
        entry: {
            "main-server": ["./src/Server.js"]
        },
        output: {
            filename: `[name].js`,
            path: path.join(__dirname, 'dist'),
            libraryTarget: "commonjs2"
        },
        resolve: {
            extensions: ['.js']
        },
        module: {
            rules: [
                { 
                    test: /js$/, 
                    exclude: /node_modules/, 
                    use: {loader: 'babel-loader'}
                }
            ]
        }
    }
}