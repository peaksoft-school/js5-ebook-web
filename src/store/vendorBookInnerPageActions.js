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

export const deleteVendorBook = (bookId, navigate) => {
   return async (dispatch) => {
      try {
         const deleteData = await appFetch({
            url: `/api/book/delete/${bookId}`,
            method: 'DELETE',
         })
         toast.success()
         navigate('/')
         dispatch(bookInnerPageAction.deleteBook(deleteData))
      } catch (error) {
         dispatch(bookInnerPageAction.deleteBook(error))
         toast.error('Не удалось удалить книгу!')
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
