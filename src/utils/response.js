const defaultResponse = {
  success: true
  //data: null,
}

const setResponse = async (req, cb) => {
  const newResponse = { ...defaultResponse }
  let httpStatus = 200
  try {
    const response = (await cb(req)) || {}
    const { success, error, status, details } = response
    for (const key of Object.keys(response)) {
      if (!['details', 'status'].includes(key)) newResponse[key] = response[key]
    }
    if (details && NODE_ENV === 'development') newResponse.details = details
    if (status) httpStatus = status
    if (error) throw error
    if (success === false) throw 'Unknown error'
    newResponse.success = true
  } catch (e) {
    if (!httpStatus || httpStatus < 400) httpStatus = 500
    newResponse.success = false
    if (e.message) {
      newResponse.error = 'Unknown error'
    } else {
      newResponse.error = e
    }
  }
  if (
    !newResponse.success &&
    newResponse.data &&
    newResponse.data.hasOwnProperty('status_enum')
  )
    delete newResponse.data.status_enum
  return {
    status: httpStatus,
    data: newResponse
  }
}

exports.setResponseToJson = async (req, res, cb) => {
  const resp = await setResponse(req, cb)
  const { status = 200, data = {} } = resp
  const internalData = data.data
  if (data.data) delete data.data
  const content = { ...data, data: internalData }
  return res.status(status).type('json').send(content)
}

exports.setResponseError = (res, httpStatus = 500, error = 'Error') => {
  const response = {
    ...defaultResponse,
    success: false,
    error
  }
  return res.status(httpStatus).json(response)
}
