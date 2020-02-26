const clientConfig = require("./webpack.config.client");
const serverConfig = require("./webpack.config.server");


module.exports = env => {
    const cConfig = clientConfig(env);
    const sConfig = serverConfig(env);
 
    return [cConfig, sConfig];
}