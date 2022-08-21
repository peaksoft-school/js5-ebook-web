import appFetch from '../hooks/AppFetch'
// import bookAction from './slices/addBookSlice'
import { appFileFetchServi } from '../api/fileService'

const token =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY2MTEwNTI0MCwiaWF0IjoxNjYxMTAxNjQwLCJ1c2VybmFtZSI6InNkZXJ2In0.iLJz6xvjXlmcj1v0o5T5Wm9b4s3ym776Si8ijniLcAI'

export const appFileFetchService = (images, tok) => {
   console.log(token)
   console.log(tok)
   return async (dispatch) => {
      try {
         const imgFiles = await appFileFetchServi(images.mainImg, token)
         console.log(imgFiles)
         dispatch()
      } catch (error) {
         console.log(error)
      }
   }
}

export const addPaperBook = (values, images, token) => {
   // console.log(imgFiles)
   const formData = new FormData()
   formData.append('file', images.mainImg)

   const withFile = {
      ...values,
   }

   return async () => {
      try {
         if (images.mainImg) {
            const imgFiles = await appFileFetchServi(images.mainImg)
            console.log(imgFiles)
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
         // dispatch(bookAction.bookFromFetch(error))
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

export const addAudioBook = (audioValue, images, token) => {
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
