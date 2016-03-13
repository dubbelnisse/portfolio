import request from 'superagent'
import queryString from 'query-string'

export function get (route, token) {
  const query = queryString.stringify({ token })
  return fetch(`${route}?${query}`)
    .then(response => response.json())
    .catch(err => console.log(err))
}

export function post (path, data) {
  return new Promise((resolve, reject) => {
    request
      .post(path)
      .send(data)
      .end((err, res) => {
        if (err) {
          if (err.status === 404) {
            resolve(null)
          } else {
            reject(err)
          }
        } else {
          resolve(res.body)
        }
      })
  })
}

export default {
  get,
  post
}
