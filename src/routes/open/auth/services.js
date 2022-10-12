exports.getAuth = async (req = {}) => {
  const { auth, crypt } = utils
  const { ip = '127.0.0.1' } = req
  const key = crypt.md5(ip)
  const token = await auth.createToken(key)
  const data = { token }
  return { data }
}
