import appFetch from '../hooks/appFetch'
import bookAction from './slices/addBookSlice'

export const getMainBooks = () => {
   return async (dispatch) => {
      const getData = await appFetch({
         url: '/api/books?search=all&sortBy=NEW&page=1&size=12',
      })
      dispatch(bookAction.saveBook(getData))
   }
}
