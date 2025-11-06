const { getDefaultConfig } = require("expo/metro-config")
const { withNativewind } = require("nativewind/metro")

let config = getDefaultConfig(__dirname)

config = withNativewind(config)

module.exports = config
