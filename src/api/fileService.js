import { URL } from '../utils/constants/constants'

const token =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY2MTE2NTIxMiwiaWF0IjoxNjYxMTYxNjEyLCJ1c2VybmFtZSI6InZlbmRvckBnbWFpbC5jb20ifQ.U1MNn3y4XldbVWqasxblyuds95Teaw7ZdryWr1RIXOk'

export const appFileFetchService = async (file) => {
   const formData = new FormData()
   formData.append('file', file)
   const response = await fetch(
      `${URL}/api/file/upload`,

      {
         method: 'POST',
         headers: {
            Authorization: `Bearer${token}`,
         },
         body: formData,
      }
   )
   if (!response.ok) {
      throw new Error('error')
   }
   return response.json()
}
