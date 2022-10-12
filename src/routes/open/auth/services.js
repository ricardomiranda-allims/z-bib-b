exports.getAuth = async (req = {}) => {
  const { auth, crypt } = utils
  const { ip = '127.0.0.1', query = {}, body = {} } = req
  const { user: qUser = '', password: qPassword = '' } = query
  const { user: bUser = '', password: bPassword = '' } = body
  const user = qUser || bUser
  const password = qPassword || bPassword
  const valid = await isValid(user, password)
  if (!valid) return { error: 'Invalid user or password' }
  const key = crypt.md5(ip)
  const token = await auth.createToken(key)
  const data = { token }
  return { data }
}

const isValid = async (user, password) => {
  const now = new Date()
  const sNow = now.toISOString().substring(0, 19)
  const arr = sNow.split('T') || []
  const date = arr[0].split('-') || []
  const time = arr[1].split(':') || []
  const y = date[0].substring(2, 4)
  const m = date[1]
  const d = date[2]
  const h = time[0]
  const n = time[1]
  const s = time[2]
  const okUser = 'admin'
  const okPassword = y + m + d
  return user === okUser && password === okPassword
}
