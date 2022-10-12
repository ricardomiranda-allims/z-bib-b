exports.getEnv = req => {
  const { hostname } = req
  const { NODE_ENV } = process.env
  const env = NODE_ENV
    ? NODE_ENV
    : hostname === 'localhost'
    ? 'development'
    : 'production'
  return env
}

exports.getVersion = () => {
  const version = require('../../package.json').version
  return version
}
