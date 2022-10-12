const { getRoutes } = require('../../routes')

exports.getDocsJson = async (req = {}) => {
  const paths = getPaths()
  const env = getEnv(req)
  const version = getVersion()
  const data = {
    swagger: '2.0',
    info: {
      title: 'Bible API',
      version,
      description: `env: ${env}`
    },
    paths
  }
  return { data }
}

const getPaths = () => {
  const routes = getRoutes()
  let paths = []
  for (const { method, path, group, name, description, hidden } of routes) {
    !hidden && paths.push({ method, path, group, name })
  }
  return paths
}

const getEnv = req => {
  const { hostname } = req
  const { NODE_ENV } = process.env
  const env = NODE_ENV
    ? NODE_ENV
    : hostname === 'localhost'
    ? 'development'
    : 'production'
  return env
}

const getVersion = () => {
  const version = require('../../../package.json').version
  return version
}
