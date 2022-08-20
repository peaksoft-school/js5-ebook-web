import { URL } from '../utils/constants/constants'

function appFetch({ url, method, body, token, file }) {
   const requestOptions = {
      method: method || 'GET',
      headers: {
         'Content-Type': 'application/json; charset=utf-8',
      },
   }
   if (token && file) {
      requestOptions.headers = {
         Authorization: `Bearer ${token}`,
      }
   }
   if (token) {
      requestOptions.headers.Authorization = `Bearer ${token}`
   }
   if (method && body) {
      requestOptions.body = JSON.stringify(body)
   }
   if (method && file) {
      requestOptions.body = file
   }
   console.log(requestOptions)
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
   console.log(promise)
   return promise
}

export default appFetch
