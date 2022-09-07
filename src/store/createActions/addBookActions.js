import appFetch from '../../hooks/AppFetch'
import bookAction from '../slices/addBookSlice'
import { appFileFetchService } from '../../api/fileService'
import { getMainBooks } from './vendorMainPagesActions'
import snackbarAction from '../slices/snackbarSlice'

export const addPaperBook = (inputValues, images, bestseller) => {
   const valuesWithFile = {
      name: inputValues.name,
      genreId: inputValues.genreId,
      price: inputValues.price,
      author: inputValues.author,
      description: inputValues.description,
      yearOfIssue: inputValues.yearOfIssue,
      discount: inputValues.discount,
      language: inputValues.language,
      bestseller,
      fragment: inputValues.fragment,
      pageSize: inputValues.pageSize,
      publishingHouse: inputValues.publishingHouse,
      quantityOfBook: inputValues.quantityOfBook,
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
         dispatch(snackbarAction.snackbarSuccess(result.message))
         dispatch(getMainBooks())
      } catch (error) {
         dispatch(bookAction.statusError(error))
         dispatch(snackbarAction.snackbarFalse(error))
      }
   }
}

export const addAudioBook = (inputValues, images, audioValues, duration) => {
   const valuesWithFile = {
      ...inputValues,
      duration,
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
         dispatch(snackbarAction.snackbarSuccess(result.message))
         dispatch(bookAction.statusSuccess(result))
      } catch (error) {
         dispatch(bookAction.statusError(error))
         dispatch(snackbarAction.snackbarFalse(error))
      }
   }
}

export const addElectronicBoook = (inputValues, images, pdf) => {
   const valuesWithFile = {
      name: inputValues.name,
      genreId: inputValues.genreId,
      price: inputValues.price,
      author: inputValues.author,
      description: inputValues.description,
      yearOfIssue: inputValues.yearOfIssue,
      discount: inputValues.discount,
      bestseller: true,
      fragment: inputValues.fragment,
      pageSize: inputValues.pageSize,
      publishingHouse: inputValues.publishingHouse,
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
            valuesWithFile.electronicBook = imgFiles.link
         }

         const result = await appFetch({
            url: '/api/book/save/eBook',
            method: 'POST',
            body: valuesWithFile,
         })
         dispatch(snackbarAction.snackbarSuccess(result.message))
         dispatch(bookAction.statusSuccess(result))
      } catch (error) {
         dispatch(bookAction.statusError(error))
         dispatch(snackbarAction.snackbarFalse(error))
      }
   }
}
