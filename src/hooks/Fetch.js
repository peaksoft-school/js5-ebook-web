function Fetch(url, type, body) {
   let promise = new Promise((resolve, reject) => {
      if (type && !body) {
         fetch(url, {
            method: type,
         })
            .then((response) => {
               if (response.status >= 200 && response.status <= 300) {
                  return response.json()
               }
               throw new Error('Hello error')
            })
            .then((data) => {
               resolve(data)
            })
            .catch((error) => {
               reject(error)
            })
      } else if (!type && !body) {
         fetch(url)
            .then((response) => {
               if (response.status >= 200 && response.status <= 300) {
                  return response.json()
               }
               throw new Error('Hello error')
            })
            .then((data) => {
               resolve(data)
            })
            .catch((error) => {
               reject(error)
            })
      } else {
         fetch(url, {
            method: type,
            headers: {
               'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(body),
         })
            .then((response) => {
               if (response.status === 500) {
                  throw new Error(response.message)
               }
               if (response.status >= 200 && response.status <= 300) {
                  return response.json()
               }
               throw new Error('Hello error')
            })
            .then((data) => {
               resolve(data)
            })
            .catch((error) => {
               reject(error)
            })
      }
   })
   return promise
}

export default Fetch
