import appFetch from '../hooks/AppFetch'
import bookAction from './slices/addBookSlice'
import { appFileFetchService } from '../api/fileService'

export const addPaperBook = (values, images, token) => {
   const valuesWithFile = {
      ...values,
   }
   return async (dispatch) => {
      try {
         if (images.mainImg) {
            const imgFiles = await appFileFetchService(images.mainImg, token)
            valuesWithFile.mainImage = imgFiles.link
         }

         if (images.secondImg) {
            const imgFiles = await appFileFetchService(images.secondImg)
            valuesWithFile.secondImage = imgFiles.link
         }
         if (images.thirdImg) {
            const imgFiles = await appFileFetchService(images.thirdImg)
            valuesWithFile.thirdImage = imgFiles.link
         }
         const result = await appFetch({
            url: '/api/book/save/paperBook',
            method: 'POST',
            body: valuesWithFile,
            token,
         })
         dispatch(bookAction.bookFromFetch(result))
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}

export const addAudioBook = (audioValue, images, token, audioValues) => {
   const valuesWithFile = {
      ...audioValue,
   }

   return async (dispatch) => {
      try {
         if (images.mainImg) {
            const imgFiles = await appFileFetchService(images.mainImg, token)
            valuesWithFile.mainImage = imgFiles.link
         }

         if (images.secondImg) {
            const imgFiles = await appFileFetchService(images.secondImg)
            valuesWithFile.secondImage = imgFiles.link
         }
         if (images.thirdImg) {
            const imgFiles = await appFileFetchService(images.thirdImg)
            valuesWithFile.thirdImage = imgFiles.link
         }

         if (audioValues.fragment) {
            const imgFiles = await appFileFetchService(audioValues.fragment)
            valuesWithFile.fragment = imgFiles.link
         }
         if (audioValues.audioBook) {
            const imgFiles = await appFileFetchService(audioValues.audioBook)
            valuesWithFile.audioBook = imgFiles.link
         }

         const result = await appFetch({
            url: '/api/book/save/audioBook',
            method: 'POST',
            body: valuesWithFile,
            token,
         })
         dispatch(bookAction.bookFromFetch(result))
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}

export const addElectronicBoook = (electronicValue, images, token, pdf) => {
   const formData = new FormData()
   formData.append('file', images.mainImg)

   const valuesWithFile = {
      ...electronicValue,
   }

   return async (dispatch) => {
      try {
         if (images.mainImg) {
            const imgFiles = await appFileFetchService(images.mainImg, token)
            valuesWithFile.mainImage = imgFiles.link
         }

         if (images.secondImg) {
            const imgFiles = await appFileFetchService(images.secondImg)
            valuesWithFile.secondImage = imgFiles.link
         }
         if (images.thirdImg) {
            const imgFiles = await appFileFetchService(images.thirdImg)
            valuesWithFile.thirdImage = imgFiles.link
         }
         if (pdf) {
            const imgFiles = await appFileFetchService(pdf)
            valuesWithFile.thirdImage = imgFiles.link
         }

         const result = await appFetch({
            url: '/api/book/save/eBook',
            method: 'POST',
            body: valuesWithFile,
            token,
         })
         dispatch(bookAction.bookFromFetch(result))
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}
