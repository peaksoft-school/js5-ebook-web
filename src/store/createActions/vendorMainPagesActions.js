import { appFileFetchService } from '../../api/fileService'
import appFetch from '../../hooks/AppFetch'
import snackbarAction from '../slices/snackbarSlice'
import vendorMainPageAction from '../slices/vendorMainPageSlice'

export const getMainBooks = (slectedText, next, vendorId) => {
   return async (dispatch) => {
      try {
         const getData = await appFetch({
            url: `/api/vendors/${vendorId}/books?aboutBooks=${
               slectedText || 'ALL'
            }&page=1&size=${next}`,
         })
         dispatch(vendorMainPageAction.saveBook(getData))
         dispatch(vendorMainPageAction.success())
      } catch (error) {
         dispatch(vendorMainPageAction.errorResult(error))
      }
   }
}

// GET with id for UPDATE
export const getMainBooksWithId = (id) => {
   return async (dispatch) => {
      try {
         const getData = await appFetch({
            url: `/api/books/${id}`,
         })
         dispatch(vendorMainPageAction.findBookWithId(getData))
         dispatch(vendorMainPageAction.bookType(getData))
         dispatch(vendorMainPageAction.success())
      } catch (error) {
         dispatch(vendorMainPageAction.errorResult(error))
      }
   }
}

// DELETE
export const getMainBooksDelete = (id) => {
   return async (dispatch) => {
      try {
         const getData = await appFetch({
            url: `/api/book/delete/${id}`,
            method: 'DELETE',
         })
         dispatch(vendorMainPageAction.errorResult(getData))
      } catch (error) {
         dispatch(snackbarAction.snackbarSuccess())
         dispatch(snackbarAction.snackbarFalse())
      }
   }
}

// EDITE

export const putVendorBook = (
   inputValues,
   images,
   bookType,
   bookId,
   pdfValue
) => {
   const mydata = {
      mainImage: images.mainImage,
      secondImage: images.secondImage,
      thirdImage: images.thirdImage,
      name: inputValues.name,
      genreId: 7,
      price: inputValues.price,
      author: inputValues.author,
      description: inputValues.description,
      language: 'RUSSIAN',
      yearOfIssue: inputValues.yearOfIssue,
      discount: inputValues.discount,
      fragment: inputValues.fragment,
      bestseller: true,
      electronicBook: 'string',
      pageSize: inputValues.pageSize,
      publishingHouse: inputValues.publishingHouse,
      quantityOfBook: inputValues.quantityOfBook,
   }
   return async (dispatch) => {
      try {
         let urlBookType = `/api/book/update/paperBook/${bookId}`
         if (bookType === 'ELECTRONIC_BOOK') {
            urlBookType = `/api/book/update/electronicBook/${bookId}`
         }
         if (bookType === 'AUDIO_BOOK') {
            urlBookType = `/api/book/update/audioBook/${bookId}`
         }
         if (typeof images.mainImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         } else {
            mydata.mainImage = images.mainImage
         }
         if (typeof images.secondImage === 'object') {
            const imgFiles = await appFileFetchService(images.secondImage)
            mydata.secondImage = imgFiles.link
         }
         if (typeof images.thirdImage === 'object') {
            const imgFiles = await appFileFetchService(images.thirdImage)
            mydata.thirdImage = imgFiles.link
         }
         if (typeof pdfValue === 'object') {
            const pdf = await appFileFetchService(pdfValue)
            mydata.electronicBook = pdf.link
         }
         const putData = await appFetch({
            method: 'PUT',
            url: urlBookType,
            body: mydata,
         })
         if (putData.ok) {
            dispatch(snackbarAction.snackbarSuccess())
         }
      } catch (error) {
         if (error === 'Что то пошло не так!') {
            dispatch(snackbarAction.snackbarFalse(error))
         } else {
            dispatch(snackbarAction.snackbarSuccess())
         }
      }
   }
}

export const editeElectronicBook = (inputValues, images, bookId, pdfValue) => {
   const mydata = {
      mainImage: images.mainImage,
      secondImage: images.secondImage,
      thirdImage: images.thirdImage,
      name: inputValues.name,
      genreId: 9,
      price: inputValues.price,
      author: inputValues.author,
      description: inputValues.description,
      language: 'RUSSIAN',
      yearOfIssue: inputValues.yearOfIssue,
      discount: inputValues.discount,
      fragment: inputValues.fragment,
      bestseller: true,
      electronicBook: 'string',
      pageSize: inputValues.pageSize,
      publishingHouse: inputValues.publishingHouse,
      quantityOfBook: inputValues.quantityOfBook,
   }
   return async (dispatch) => {
      try {
         if (typeof images.mainImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         } else {
            mydata.mainImage = images.mainImage
         }
         if (typeof images.secondImage === 'object') {
            const imgFiles = await appFileFetchService(images.secondImage)
            mydata.secondImage = imgFiles.link
         }
         if (typeof images.thirdImage === 'object') {
            const imgFiles = await appFileFetchService(images.thirdImage)
            mydata.thirdImage = imgFiles.link
         }
         if (typeof pdfValue === 'object') {
            const pdf = await appFileFetchService(pdfValue)
            mydata.electronicBook = pdf.link
         }
         const putData = await appFetch({
            method: 'PUT',
            url: `/api/book/update/electronicBook/${bookId}`,
            body: mydata,
         })
         if (putData.ok) {
            dispatch(snackbarAction.snackbarSuccess())
         }
      } catch (error) {
         if (error === 'Что то пошло не так!') {
            dispatch(snackbarAction.snackbarFalse(error))
         } else {
            dispatch(snackbarAction.snackbarSuccess())
         }
      }
   }
}

export const editeAudioBook = (inputValues, images, bookId) => {
   const mydata = {
      mainImage: images.mainImage,
      secondImage: images.secondImage,
      thirdImage: images.thirdImage,
      name: inputValues.name,
      genreId: 13,
      price: inputValues.price,
      author: inputValues.author,
      description: inputValues.description,
      language: 'KYRGYZ',
      yearOfIssue: inputValues.yearOfIssue,
      discount: inputValues.discount,
      bestseller: true,
      fragment: 'string',
      duration: '02:30:45',
      audioBook: 'string',
   }
   return async (dispatch) => {
      try {
         if (typeof images.mainImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         } else {
            mydata.mainImage = images.mainImage
         }
         if (typeof images.secondImage === 'object') {
            const imgFiles = await appFileFetchService(images.secondImage)
            mydata.secondImage = imgFiles.link
         }
         if (typeof images.thirdImage === 'object') {
            const imgFiles = await appFileFetchService(images.thirdImage)
            mydata.thirdImage = imgFiles.link
         }
         // if (typeof audioValues === 'object') {
         //    const pdf = await appFileFetchService(audioValues)
         //    mydata.audioBook = pdf.link
         //    console.log(pdf)
         // }
         const putData = await appFetch({
            method: 'PUT',
            url: `/api/book/update/audioBook/${bookId}`,
            body: mydata,
         })
         if (putData.ok) {
            dispatch(snackbarAction.snackbarSuccess())
         }
      } catch (error) {
         if (error === 'Что то пошло не так!') {
            dispatch(snackbarAction.snackbarFalse(error))
         } else {
            dispatch(snackbarAction.snackbarSuccess())
         }
      }
   }
}
