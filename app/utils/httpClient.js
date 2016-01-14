import request from 'superagent'

const handleResponse = (resolve, reject) => (err, res) => {
  if (err) {
    if (err.status === 404) {
      resolve(null)
    } else {
      reject(err)
    }
  } else {
    resolve(res.body)
  }
}

const http = {

  get: path => new Promise((resolve, reject) => {
    request
      .get(path)
      .accept('application/json')
      .end(handleResponse(resolve, reject))
  }),

  post: (path, data) => new Promise((resolve, reject) => {
    request
      .post(path)
      .send(data)
      .accept('application/json')
      .end(handleResponse(resolve, reject))
  }),

  del: (path, data) => new Promise((resolve, reject) => {
    request
      .del(path)
      .send(data)
      .accept('application/json')
      .end(handleResponse(resolve, reject))
  }),

  put: (path, data) => new Promise((resolve, reject) => {
    request
      .put(path)
      .send(data)
      .accept('application/json')
      .end(handleResponse(resolve, reject))
  })

}

export default http
