const jwt = require('jsonwebtoken')

exports.check = async (req, res, next) => {
  const { crypt, ctrl } = utils
  const { method = '', originalUrl = '', ip = '127.0.0.1' } = req
  const isSafe = originalUrl.toLowerCase().trim().includes('/safe/')
  if (method.toLowerCase().trim() === 'options') {
    next()
  } else if (!isSafe) {
    next()
  } else {
    const token = getToken(req)
    if (!token) return ctrl.setResponseError(res, 403, 'Forbidden access')

    const info = await getInfo(token)
    const { key, expired, error } = info
    const vKey = crypt.md5(ip)

    if (error) return ctrl.setResponseError(res, 403, error)
    if (expired) return ctrl.setResponseError(res, 403, 'Access expirated')
    if (key !== vKey) return ctrl.setResponseError(res, 403, 'Invalid key')

    next()
  }
}

const getToken = (req = {}) => {
  const { headers = {}, query = {} } = req
  const { authorization = '', Authorization = '' } = headers
  const { auth = '' } = query
  let key = Authorization || authorization || auth
  const arr = key.split(' ') || []
  token = arr.pop() || ''
  return token
}

const getInfo = async (token = '') => {
  const secret = await getJwtSecret()
  const info = jwt.decode(token) || {}
  const { key } = info
  const error =
    (await jwt.verify(token, secret, err => err && err.message)) || ''
  const expired = error.toLowerCase().trim() === 'jwt expired'
  return {
    key,
    expired,
    error: expired ? '' : error
  }
}

const getJwtSecret = async () => {
  const { API_SECRET = 'myapisecret', API_SALT = 'myapisalt' } = process.env
  const secret = API_SECRET + API_SALT
  return secret
}

exports.createToken = async (key, expiresIn) => {
  const { API_EXPIRES } = process.env
  const data = { key }
  const secret = await getJwtSecret()
  const options = {
    expiresIn: expiresIn || API_EXPIRES || '1 day'
  }
  const token = await jwt.sign(data, secret, options)
  return token
}
