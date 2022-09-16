import appFetch from '../hooks/appFetch'
import bookInnerPageAction from './slices/vendorBookInnerPageSlice'

export const getVendorBookInnerPage = (bookId) => {
   return async (dispatch) => {
      try {
         const getData = await appFetch({
            url: `/api/books/${bookId}`,
         })
         dispatch(bookInnerPageAction.getBook(getData))
      } catch (error) {
         dispatch(bookInnerPageAction.rejected(error))
      }
   }
}

export const deleteVendorBook = (bookId) => {
   return async (dispatch) => {
      try {
         const deleteData = await appFetch({
            url: `/api/book/delete/${bookId}`,
            method: 'DELETE',
         })
         // console.log(deleteData)
         dispatch(bookInnerPageAction.deleteBook(deleteData))
      } catch (error) {
         dispatch(bookInnerPageAction.rejected(error))
      }
   }
}
