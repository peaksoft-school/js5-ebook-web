import { appFileFetchService } from '../../api/fileService'
import appFetch from '../../hooks/AppFetch'
import vendorMainPageAction from '../slices/vendorMainPageSlice'

export const getMainBooks = (slectedText) => {
   return async (dispatch) => {
      try {
         const getData = await appFetch({
            url: `/api/vendors/2/books?aboutBooks=${slectedText || 'ALL'}`,
         })
         dispatch(vendorMainPageAction.saveBook(getData))
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
         console.log(getData)
         dispatch(vendorMainPageAction.success())
      } catch (error) {
         dispatch(vendorMainPageAction.errorResult(error))
      }
   }
}

// PUT

export const putVendorBook = (inputValues, images, type) => {
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
      yearOfIssue: 0,
      discount: 0,
      fragment: 'string',
      pageSize: 0,
      publishingHouse: 'string',
      quantityOfBook: 0,
   }
   return async (dispatch) => {
      try {
         let urlBookType = `/api/book/update/paperBook/${9}`
         if (type === 'electr') {
            urlBookType = `/api/book/update/electronicBook/${3}`
         }
         if (type === 'electr') {
            urlBookType = `/api/book/update/audioBook/${6}`
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
         dispatch(vendorMainPageAction.success(putData))
      } catch (error) {
         dispatch(vendorMainPageAction.errorResult(error))
      }
   }
}
