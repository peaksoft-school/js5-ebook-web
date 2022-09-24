import { appFileFetchService } from '../../api/fileService'
import appFetch from '../../hooks/appFetch'
import bookAction from '../slices/addBookSlice'
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
export const getMainBooksWithId = (id, navigate) => {
   return async (dispatch) => {
      try {
         const getData = await appFetch({
            url: `/api/books/${id}`,
         })
         dispatch(vendorMainPageAction.bookType(getData))
         navigate('/main/addbook')
      } catch (error) {
         dispatch(vendorMainPageAction.errorResult(error))
      }
   }
}

// DELETE
export const getMainBooksDelete = (id, navigate) => {
   return async (dispatch) => {
      dispatch(snackbarAction.snackbarPending())
      try {
         const result = await appFetch({
            url: `/api/book/delete/${id}`,
            method: 'DELETE',
         })
         if (navigate) {
            navigate('/')
         }
         dispatch(snackbarAction.snackbarSuccess(result.message))
         dispatch(getMainBooksWithId())
      } catch (error) {
         dispatch(snackbarAction.snackbarFalse('Что то пошло не так!'))
      }
   }
}

// EDITE

export const putVendorBook = (
   { inputValues, images, bookId, isChecked },
   navigate
) => {
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
      bestseller: isChecked,
      pageSize: inputValues.pageSize,
      publishingHouse: inputValues.publishingHouse,
      quantityOfBook: inputValues.quantityOfBook,
   }

   return async (dispatch) => {
      dispatch(bookAction.statusPending())
      try {
         if (typeof images.mainImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         } else if (typeof images.mainImage === 'string') {
            mydata.mainImage = images.mainImage
         }

         if (typeof images.secondImage === 'object') {
            const imgFiles = await appFileFetchService(images.secondImage)
            mydata.secondImage = imgFiles.link
         } else if (typeof images.secondImage === 'string') {
            mydata.secondImage = images.secondImage
         }

         if (typeof images.thirdImage === 'object') {
            const imgFiles = await appFileFetchService(images.thirdImage)
            mydata.thirdImage = imgFiles.link
         } else if (typeof images.thirdImage === 'string') {
            mydata.thirdImage = images.thirdImage
         }
         const result = await appFetch({
            url: `/api/book/update/paperBook/${bookId}`,
            method: 'PUT',
            body: mydata,
         })
         dispatch(snackbarAction.snackbarSuccess(result.message))
         dispatch(bookAction.statusSuccess())
         navigate('/')
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}

export const editeElectronicBook = ({
   withIdValues,
   images,
   bookId,
   pdfValue,
   navigate,
   isChecked,
}) => {
   const mydata = {
      mainImage: withIdValues.mainImage,
      secondImage: withIdValues.secondImage,
      thirdImage: withIdValues.thirdImage,
      name: withIdValues.name,
      genreId: withIdValues.genreId,
      price: withIdValues.price,
      author: withIdValues.author,
      description: withIdValues.description,
      language: withIdValues.language,
      yearOfIssue: withIdValues.yearOfIssue,
      discount: withIdValues.discount,
      fragment: withIdValues.fragment,
      bestseller: isChecked,
      electronicBook: pdfValue,
      pageSize: withIdValues.pageSize,
      publishingHouse: withIdValues.publishingHouse,
   }

   return async (dispatch) => {
      dispatch(bookAction.statusPending())
      try {
         if (typeof images.mainImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         } else if (typeof images.mainImage === 'string') {
            mydata.mainImage = images.mainImage
         }

         if (typeof images.secondImage === 'object') {
            const imgFiles = await appFileFetchService(images.secondImage)
            mydata.secondImage = imgFiles.link
         } else if (typeof images.secondImage === 'string') {
            mydata.secondImage = images.secondImage
         }

         if (typeof images.thirdImage === 'object') {
            const imgFiles = await appFileFetchService(images.thirdImage)
            mydata.thirdImage = imgFiles.link
         } else if (typeof images.thirdImage === 'string') {
            mydata.thirdImage = images.thirdImage
         }

         if (typeof pdfValue === 'object') {
            const pdf = await appFileFetchService(pdfValue)
            mydata.electronicBook = pdf.link
         }
         const result = await appFetch({
            url: `/api/book/update/electronicBook/${bookId}`,
            method: 'PUT',
            body: mydata,
         })
         dispatch(snackbarAction.snackbarSuccess(result.message))
         dispatch(bookAction.statusSuccess())
         navigate('/')
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}

export const editeAudioBook = ({
   inputValues,
   images,
   bookId,
   audioValues,
   navigate,
   durationTimer,
   isChecked,
}) => {
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
      bestseller: isChecked,
      fragment: String(audioValues.fragment),
      duration: durationTimer,
      audioBook: audioValues.audioBook,
   }
   return async (dispatch) => {
      dispatch(bookAction.statusPending())
      try {
         if (typeof images.mainImage === 'object') {
            const imgFiles = await appFileFetchService(images.mainImage)
            mydata.mainImage = imgFiles.link
         }
         if (typeof images.secondImage === 'object') {
            const imgFiles = await appFileFetchService(images.secondImage)
            mydata.secondImage = imgFiles.link
         }
         if (typeof images.thirdImage === 'object') {
            const imgFiles = await appFileFetchService(images.thirdImage)
            mydata.thirdImage = imgFiles.link
         }
         if (typeof audioValues.fragment === 'object') {
            const imgFiles = await appFileFetchService(audioValues.fragment)
            mydata.fragment = imgFiles.link
         }
         if (typeof audioValues.audioBook === 'object') {
            const imgFiles = await appFileFetchService(audioValues.audioBook)
            mydata.audioBook = imgFiles.link
         }
         const result = await appFetch({
            url: `/api/book/update/audioBook/${bookId}`,
            method: 'PUT',
            body: mydata,
         })
         dispatch(snackbarAction.snackbarSuccess(result.message))
         dispatch(bookAction.statusSuccess())
         navigate('/')
      } catch (error) {
         dispatch(bookAction.statusError(error))
      }
   }
}
