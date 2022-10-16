exports.getStatus = async (req = {}) => {
  const { client } = utils
  const now = new Date()
  const ip = client.getIp(req)
  const data = { now, ip }
  return { data }
}
