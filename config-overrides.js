// const {createProxyMiddleware} = require('http-proxy-middleware')
// 修改配置
module.exports = (config, env) => {
    // config.target = 'electron-renderer'
    console.log(config.resolve)
    return config
}
