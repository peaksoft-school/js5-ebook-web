import appFetch from '../hooks/AppFetch'
import bookAction from './slices/addBookSlice'

export const addPaperPage = (values, images, token) => {
   const formData = new FormData()
   formData.append('file', images.mainImg)

   const withFile = {
      ...values,
   }

   return async (dispatch) => {
      try {
         if (images.mainImg) {
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.mainImage = imgFiles.link
         }

         if (images.secondImg) {
            formData.append('file', images.secondImg)
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.secondImage = imgFiles.link
         }
         if (images.thirdImg) {
            formData.append('file', images.thirdImg)
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.thirdImage = imgFiles.link
         }
         const result = await appFetch({
            url: '/api/book/save/paperBook',
            method: 'POST',
            body: withFile,
            token,
         })
         console.log(result)
      } catch (error) {
         dispatch(bookAction.bookFromFetch(error))
      }
   }
}

export const addElectronicBoook = (electronicValue, images, token) => {
   const formData = new FormData()
   formData.append('file', images.mainImg)

   const withFile = {
      ...electronicValue,
   }

   return async () => {
      try {
         if (images.mainImg) {
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.mainImage = imgFiles.link
         }

         if (images.secondImg) {
            formData.append('file', images.secondImg)
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.secondImage = imgFiles.link
         }
         if (images.thirdImg) {
            formData.append('file', images.thirdImg)
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.thirdImage = imgFiles.link
         }

         // formData(PDF bolot)

         const result = await appFetch({
            url: '/api/book/save/eBook',
            method: 'POST',
            body: withFile,
            token,
         })
         console.log(result)
      } catch (error) {
         console.log(console.log(error))
      }
   }
}

export const addAudioPage = (audioValue, images, token) => {
   const formData = new FormData()
   formData.append('file', images.mainImg)

   const withFile = {
      ...audioValue,
   }

   return async () => {
      try {
         if (images.mainImg) {
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.mainImage = imgFiles.link
         }

         if (images.secondImg) {
            formData.append('file', images.secondImg)
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.secondImage = imgFiles.link
         }
         if (images.thirdImg) {
            formData.append('file', images.thirdImg)
            const imgFiles = await appFetch({
               url: '/api/file/upload',
               method: 'POST',
               file: formData,
               token,
            })
            withFile.thirdImage = imgFiles.link
         }

         // formData(audio bolot razmer-1mb)

         const result = await appFetch({
            url: '/api/book/save/audioBook',
            method: 'POST',
            body: withFile,
            token,
         })
         console.log(result)
      } catch (error) {
         console.log(error)
      }
   }
}
