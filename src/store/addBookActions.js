import appFetch from '../hooks/appFetch'
import bookAction from './slices/addBookSlice'
import { appFileFetchService } from '../api/fileService'

export const addPaperBook = (inputValues, images) => {
   const valuesWithFile = {
      ...inputValues,
      ...images,
      bestseller: true,
   }
   console.log(valuesWithFile)
   return async (dispatch) => {
      try {
         if (images.mainImage) {
            const imgFiles = await appFileFetchService(images.mainImage)
            valuesWithFile.mainImage = imgFiles.link
         }

         if (images.secondImage) {
            const imgFiles = await appFileFetchService(images.secondImage)
            valuesWithFile.secondImage = imgFiles.link
         }
         if (images.thirdImage) {
            const imgFiles = await appFileFetchService(images.thirdImage)
            valuesWithFile.thirdImage = imgFiles.link
         }
         const result = await appFetch({
            url: '/api/book/save/paperBook',
            method: 'POST',
            body: valuesWithFile,
         })
         dispatch(bookAction.statusSuccess(result))
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}

export const addAudioBook = (inputValues, images, audioValues) => {
   const valuesWithFile = {
      ...inputValues,
      ...images,
      bestseller: true,
   }

   return async (dispatch) => {
      try {
         if (images.mainImage) {
            const imgFiles = await appFileFetchService(images.mainImage)
            valuesWithFile.mainImage = imgFiles.link
         }

         if (images.secondImage) {
            const imgFiles = await appFileFetchService(images.secondImage)
            valuesWithFile.secondImage = imgFiles.link
         }
         if (images.thirdImage) {
            const imgFiles = await appFileFetchService(images.thirdImage)
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
         })
         dispatch(bookAction.statusSuccess(result))
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}

export const addElectronicBoook = (inputValues, images, pdf) => {
   const valuesWithFile = {
      ...inputValues,
      ...images,
      bestseller: true,
   }

   return async (dispatch) => {
      try {
         if (images.mainImage) {
            const imgFiles = await appFileFetchService(images.mainImage)
            valuesWithFile.mainImage = imgFiles.link
         }

         if (images.secondImage) {
            const imgFiles = await appFileFetchService(images.secondImage)
            valuesWithFile.secondImage = imgFiles.link
         }
         if (images.thirdImage) {
            const imgFiles = await appFileFetchService(images.thirdImage)
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
         })
         dispatch(bookAction.statusSuccess(result))
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}
