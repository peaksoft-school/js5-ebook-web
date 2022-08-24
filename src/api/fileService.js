import store from '../store'
import { URL } from '../utils/constants/constants'

export const appFileFetchService = async (file) => {
   const { token } = store.getState().auth.user
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
