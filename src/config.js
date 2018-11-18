const configFile = __dirname + "/../config/local"
const config = require(configFile)

module.exports = {
    get(val) {
        return config[val]
    },
    ...config,
    configFile
}
