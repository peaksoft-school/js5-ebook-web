import appFetch from '../hooks/AppFetch'
import bookAction from './slices/addBookSlice'

export const getMainBooks = () => {
   return async (dispatch) => {
      const getData = await appFetch({
         url: '/api/books?search=all&sortBy=NEW&page=1&size=12',
      })
      dispatch(bookAction.saveBook(getData))
   }
}

export const getUserInnerPageBook = (id) => {
   return async (dispatch) => {
      const getUserInnerBook = await appFetch({
         url: `/api/books/${id}`,
      })
      dispatch(bookAction.getUserBook(getUserInnerBook))
   }
}
