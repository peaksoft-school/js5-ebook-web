import { URL } from '../utils/constants/constants'

// const { token } = JSON.parse(localStorage.getItem('EBOOK_AUTH_INFO'))
// console.log(token)
const token =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY2MTE2NTIxMiwiaWF0IjoxNjYxMTYxNjEyLCJ1c2VybmFtZSI6InZlbmRvckBnbWFpbC5jb20ifQ.U1MNn3y4XldbVWqasxblyuds95Teaw7ZdryWr1RIXOk'

function appFetch({ url, method, body }) {
   const requestOptions = {
      method: method || 'GET',
      headers: {
         'Content-Type': 'application/json; charset=utf-8',
      },
   }

   if (body) {
      requestOptions.headers.Authorization = `Bearer ${token}`
   }
   if (method && body) {
      requestOptions.body = JSON.stringify(body)
   }

   const promise = new Promise((resolve, reject) => {
      fetch(URL + url, requestOptions)
         .then((response) => {
            if (!response.ok) {
               throw new Error('Что то пошло не так!')
            }
            return response.json()
         })
         .then((data) => {
            resolve(data)
         })
         .catch((error) => {
            reject(error.message)
         })
   })
   return promise
}

export default appFetch
