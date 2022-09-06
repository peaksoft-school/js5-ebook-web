import { appFileFetchService } from '../../api/fileService'
import appFetch from '../../hooks/AppFetch'
import bookAction from '../slices/addBookSlice'
import snackbarAction from '../slices/snackbarSlice'
import vendorMainPageAction from '../slices/vendorMainPageSlice'

export const getMainBooks = (slectedText) => {
   return async (dispatch) => {
      try {
         const getData = await appFetch({
            url: `/api/vendors/2/books?aboutBooks=${slectedText || 'ALL'}`,
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
         dispatch(snackbarAction.snackbarSuccess(getData))
      } catch (error) {
         dispatch(vendorMainPageAction.errorResult(error))
         dispatch(snackbarAction.snackbarFalse())
      }
   }
}

// EDITE

export const putVendorBook = (inputValues, images, bookType, bookId) => {
   const mydata = {
      mainImage: images.mainImage,
      secondImage: images.secondImage,
      thirdImage: images.thirdImage,
      name: inputValues.name,
      genreId: inputValues.genreId,
      price: inputValues.price,
      author: inputValues.author,
      description: inputValues.description,
      language: inputValues.language,
      yearOfIssue: inputValues.yearOfIssue,
      discount: inputValues.discount,
      fragment: inputValues.fragment,
      pageSize: inputValues.pageSize,
      publishingHouse: inputValues.publishingHouse,
      quantityOfBook: inputValues.quantityOfBook,
   }
   return async (dispatch) => {
      try {
         let urlBookType = `/api/book/update/paperBook4/${bookId}`
         if (bookType === 'ELECTRONIC_BOOK') {
            urlBookType = `/api/book/update/electronicBook/${bookId}`
         }
         if (bookType === 'AUDIO_BOOK') {
            urlBookType = `/api/book/update/audioBook/${bookId}`
         }
         if (typeof images.mainImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         }
         if (typeof images.secondImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         }
         if (typeof images.thirdImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         }
         const putData = await appFetch({
            method: 'PUT',
            url: urlBookType,
            body: mydata,
         })
         dispatch(snackbarAction.snackbarFalse())
         dispatch(bookAction.statusSuccess(putData))
      } catch (error) {
         dispatch(snackbarAction.snackbarSuccess(error))
         dispatch(bookAction.statusError(error))
      }
   }
}
