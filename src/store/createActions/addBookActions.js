import appFetch from '../../hooks/appFetch'
import bookAction from '../slices/addBookSlice'
import { appFileFetchService } from '../../api/fileService'
import { emptyActions } from './snackbarActions'

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

   return async (dispatch) => {
      dispatch(bookAction.statusPending())
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
         console.log(result)
         dispatch(bookAction.statusSuccess('Ваш запрос был успешно отправлен!'))
         dispatch(emptyActions())
      } catch (error) {
         console.log(error)
         dispatch(bookAction.statusError('Что то пошло не так!'))
      }
   }
}

export const addAudioBook = ({
   inputValues,
   images,
   audioValues,
   durationTimer,
   isChecked,
}) => {
   const valuesWithFile = {
      ...inputValues,
      duration: durationTimer,
      fragment: audioValues.fragment,
      audioBook: audioValues.audioBook,
      bestseller: isChecked,
   }
   return async (dispatch) => {
      dispatch(bookAction.statusPending())
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
         console.log(result)
         dispatch(bookAction.statusSuccess('Ваш запрос был успешно отправлен!'))
         dispatch(emptyActions())
      } catch (error) {
         console.log(error)
         dispatch(bookAction.statusError('Что то пошло не так!'))
      }
   }
}

export const addElectronicBoook = ({ withIdValues, images, pdfValue }) => {
   const valuesWithFile = {
      name: withIdValues.name,
      genreId: withIdValues.genreId,
      price: withIdValues.price,
      author: withIdValues.author,
      description: withIdValues.description,
      yearOfIssue: withIdValues.yearOfIssue,
      discount: withIdValues.discount,
      bestseller: true,
      language: withIdValues.language,
      fragment: withIdValues.fragment,
      pageSize: withIdValues.pageSize,
      publishingHouse: withIdValues.publishingHouse,
   }

   // console.log();
   // console.log();
   // console.log();

   return async (dispatch) => {
      dispatch(bookAction.statusPending())
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

         if (pdfValue) {
            const pdfFile = await appFileFetchService(pdfValue)
            valuesWithFile.electronicBook = pdfFile.link
         }

         const result = await appFetch({
            url: '/api/book/save/eBook',
            method: 'POST',
            body: valuesWithFile,
         })
         dispatch(bookAction.statusSuccess('Ваш запрос был успешно отправлен!'))
         console.log(result.message)
         dispatch(emptyActions())
      } catch (error) {
         dispatch(bookAction.statusError('Что то пошло не так!'))
      }
   }
}
