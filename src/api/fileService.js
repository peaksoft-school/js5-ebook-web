import { URL } from '../utils/constants/constants'

export const appFileFetchService = async (file, token) => {
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
