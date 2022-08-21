import { URL } from '../utils/constants/constants'

export const appFileFetchServi = async (file, tok) => {
   console.log(tok)
   const formData = new FormData()
   formData.append('file', file)
   const response = await fetch(
      `${URL}/api/file/upload`,

      {
         method: 'POST',
         headers: {
            Authorization: `Bearer${tok}`,
         },
         body: formData,
      }
   )
   if (!response.ok) {
      throw new Error('error')
   }
   return response.json()
}
