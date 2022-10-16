exports.getIp = (req = {}) => {
  const { headers = {}, socket = {} } = req
  const { 'x-forwarded-for': xForwardedFor = '' } = headers
  const { remoteAddress = '' } = socket
  const ip = xForwardedFor.split(',').shift() || remoteAddress
  return ip
}
