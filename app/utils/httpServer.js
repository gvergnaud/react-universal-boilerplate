import fetch from 'isomorphic-fetch'

const http = {

  get: url => fetch(url).then(res => res.json()),

  post: (url, data) => new Promise((resolve, reject) => reject('method POST not implemented on server')),

  del: (url, data) => new Promise((resolve, reject) => reject('method DELETE not implemented on server')),

  put: (url, data) => new Promise((resolve, reject) => reject('method PUT not implemented on server'))

}

export default http
