import { URL } from '../utils/constants/constants'

function appFetch({ url, method, body, token }) {
   const requestOptions = {
      method: method || 'GET',
      headers: {
         'Content-Type': 'application/json; charset=utf-8',
      },
   }
   if (token) {
      requestOptions.headers.Authorization = `Bearer${token}`
   }
   if (method && body) {
      requestOptions.body = JSON.stringify(body)
   }
   const promise = new Promise((resolve, reject) => {
      fetch(URL + url, requestOptions)
         .then((response) => {
            if (!response.ok) {
               throw new Error(response.message)
            }
            return response.json()
         })
         .then((data) => {
            resolve(data)
         })
         .catch((error) => {
            reject(error)
         })
   })
   return promise
}

export default appFetch
