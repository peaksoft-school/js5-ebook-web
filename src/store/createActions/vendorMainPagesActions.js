import { appFileFetchService } from '../../api/fileService'
import appFetch from '../../hooks/appFetch'
import bookAction from '../slices/addBookSlice'
import snackbarAction from '../slices/snackbarSlice'
import vendorMainPageAction from '../slices/vendorMainPageSlice'

const URLEDIT =
   'http://ebook-env.eba-kbrgztwq.eu-central-1.elasticbeanstalk.com'
let store2

export const injectStore2 = (fromStore) => {
   store2 = fromStore
}

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
         dispatch(snackbarAction.snackbarSuccess())
      } catch (error) {
         dispatch(vendorMainPageAction.errorResult(error))
         dispatch(snackbarAction.snackbarFalse())
      }
   }
}

// GET with id for UPDATE
export const getMainBooksWithId = (id, navigate) => {
   return async (dispatch) => {
      // dispatch(bookAction.statusPending())
      try {
         const getData = await appFetch({
            url: `/api/books/${id}`,
         })
         // dispatch(vendorMainPageAction.findBookWithId(getData))
         dispatch(vendorMainPageAction.bookType(getData))
         // dispatch(vendorMainPageAction.success())
         // dispatch(bookAction.statusSuccess())
         navigate('/main/addbook')
      } catch (error) {
         // dispatch(vendorMainPageAction.errorResult(error))
         dispatch(bookAction.statusError(error))
      }
   }
}

// DELETE
export const getMainBooksDelete = (id, navigate) => {
   const { token } = store2.getState().auth.user

   return async (dispatch) => {
      dispatch(snackbarAction.snackbarPending())
      try {
         const getData = await fetch(`${URLEDIT}/api/book/delete/${id}`, {
            method: 'DELETE',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })
         if (!getData.ok) {
            throw new Error('Что то пошло не так!')
         }
         if (getData.ok) {
            dispatch(snackbarAction.snackbarSuccess('Книга удалена'))
            dispatch(bookAction.statusSuccess())
            dispatch(getMainBooks())
            if (navigate) {
               navigate('/')
            }
         }
      } catch (error) {
         dispatch(snackbarAction.snackbarFalse('Что то пошло не так!'))
      }
   }
}

// EDITE

export const putVendorBook = (
   { inputValues, images, bookId, langText, genId },
   navigate
) => {
   // console.log(language)
   console.log(genId)
   const { token } = store2.getState().auth.user

   const mydata = {
      mainImage: images.mainImage,
      secondImage: images.secondImage,
      thirdImage: images.thirdImage,
      name: inputValues.name,
      genreId: genId,
      // genreId: genId,
      price: inputValues.price,
      author: inputValues.author,
      description: inputValues.description,
      language: langText,
      yearOfIssue: inputValues.yearOfIssue,
      discount: inputValues.discount,
      fragment: 'string',
      // fragment: inputValues.fragment,
      bestseller: true,
      pageSize: inputValues.pageSize,
      publishingHouse: 'we',
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

         const putData = await fetch(
            `${URLEDIT}/api/book/update/paperBook/${bookId}`,
            {
               method: 'PUT',
               headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify(mydata),
            }
         )
         if (!putData.ok) {
            throw new Error('Что то пошло не так!')
         }
         if (putData.ok) {
            dispatch(snackbarAction.snackbarSuccess('книга успешно сохранена'))
            dispatch(bookAction.statusSuccess())
            navigate('/')
         }
      } catch (error) {
         dispatch(bookAction.statusError('Что то пошло не так!'))
      }
   }
}

export const editeElectronicBook = ({
   withIdValues,
   images,
   bookId,
   pdfValue,
   language,
   // genreId,
   navigate,
}) => {
   const mydata = {
      mainImage: withIdValues.mainImage,
      secondImage: withIdValues.secondImage,
      thirdImage: withIdValues.thirdImage,
      name: withIdValues.name,
      genreId: withIdValues.genre,
      price: withIdValues.price,
      author: withIdValues.author,
      description: withIdValues.description,
      language,
      yearOfIssue: withIdValues.yearOfIssue,
      discount: withIdValues.discount,
      fragment: withIdValues.fragment,
      bestseller: true,
      electronicBook: 'string',
      pageSize: withIdValues.pageSize,
      publishingHouse: withIdValues.publishingHouse,
      quantityOfBook: withIdValues.quantityOfBook,
   }

   return async (dispatch) => {
      const { token } = store2.getState().auth.user
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
         const putData = await fetch(
            `${URLEDIT}/api/book/update/electronicBook/${bookId}`,
            {
               method: 'PUT',
               headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify(mydata),
            }
         )
         if (!putData.ok) {
            throw new Error('Что то пошло не так!')
         }
         if (putData.ok) {
            dispatch(bookAction.statusSuccess())
            dispatch(snackbarAction.snackbarSuccess('книга успешно сохранена!'))
            navigate('/')
         }
      } catch (error) {
         dispatch(bookAction.statusError(error.message))
      }
   }
}

export const editeAudioBook = ({
   inputValues,
   images,
   bookId,
   // audioValues,
   navigate,
   language,
   // genreBook,
   durationTimer,
}) => {
   const mydata = {
      mainImage: images.mainImage,
      secondImage: images.secondImage,
      thirdImage: images.thirdImage,
      name: inputValues.name,
      genreId: 2,
      price: inputValues.price,
      author: inputValues.author,
      description: inputValues.description,
      language,
      yearOfIssue: inputValues.yearOfIssue,
      discount: inputValues.discount,
      bestseller: true,
      // fragment: audioValues.fragment ? audioValues.fragment : 'string',
      duration: durationTimer,
      // audioBook: audioValues.audioBook,

      // mainImage: 'string',
      // secondImage: 'string',
      // thirdImage: 'string',
      // name: 'string',
      // genreId: 0,
      // price: 0,
      // author: 'string',
      // description: 'string',
      // language: 'KYRGYZ',
      // yearOfIssue: 0,
      // discount: 0,
      // bestseller: true,
      fragment: 'string',
      // duration: 'string',
      audioBook: 'string',
   }
   console.log(language)
   return async (dispatch) => {
      const { token } = store2.getState().auth.user
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
         const putData = await fetch(
            `${URLEDIT}/api/book/update/audioBook/${bookId}`,
            {
               method: 'PUT',
               headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify(mydata),
            }
         )
         if (!putData.ok) {
            throw new Error('Что то пошло не так!')
         }
         if (putData.ok) {
            dispatch(snackbarAction.snackbarSuccess('книга успешно сохранена!'))
            dispatch(bookAction.statusSuccess())
            navigate('/')
         }
      } catch (error) {
         dispatch(bookAction.statusError(error.message))
         dispatch(bookAction.statusError())
      }
   }
}
