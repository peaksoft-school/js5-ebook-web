import toast from 'react-hot-toast'
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
         toast.success()
         dispatch(bookInnerPageAction.rejected())
         console.log(deleteData)
      } catch (error) {
         dispatch(bookInnerPageAction.deleteBook(error))
         toast.error('Не удалось !')
      }
   }
}

export const deleteModal = () => {
   return async (dispatch) => {
      const book = setTimeout(() => {
         dispatch(bookInnerPageAction.falseDelete())
      }, 1000)
      return () => clearTimeout(book)
   }
}
