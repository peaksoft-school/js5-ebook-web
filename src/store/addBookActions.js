import appFetch from '../hooks/AppFetch'
import bookAction from './slices/addBookSlice'

export const token =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY2MDk4MjM5NCwiaWF0IjoxNjYwOTc4Nzk0LCJ1c2VybmFtZSI6InNkZiJ9.a0lP2yqGgwa6UR0noNggjSeJoOjLU_-rG-RhBxOlFio'

export const addPaperPage = (values, images, token) => {
   const formData = new FormData()
   formData.append('file', images.mainImg)

   const withFile = {
      ...values,
   }

   return async (dispatch) => {
      if (images.mainImg) {
         const imgFiles = await appFetch({
            url: '/api/file/upload',
            method: 'POST',
            file: formData,
            token,
         })
         withFile.mainImage = imgFiles.link
         console.log(imgFiles)
         dispatch(bookAction.bookFromFetch(imgFiles))
      }
      if (images.secondImg) {
         formData.append('file', images.secondImg)
         const imgFiles = await appFetch({
            url: '/api/file/upload',
            method: 'POST',
            file: formData,
            token,
         })
         withFile.secondImage = imgFiles.link
         console.log(imgFiles)
      }
      if (images.thirdImg) {
         formData.append('file', images.thirdImg)
         const imgFiles = await appFetch({
            url: '/api/file/upload',
            method: 'POST',
            file: formData,
            token,
         })
         withFile.thirdImage = imgFiles.link
         console.log(imgFiles)
      }
      const result = await appFetch({
         url: '/api/book/save/paperBook',
         method: 'POST',
         body: withFile,
         token,
      })
      console.log(result)
      dispatch(bookAction(result))
   }
}

export const getBooks = (im) => {
   console.log(im)
   return async (dispatch) => {
      const getData = await appFetch({
         url: '/api/books?bookType=PAPER_BOOK&search=all&page=1&size=12',
      })
      dispatch(bookAction.addBook(getData))
      console.log(getData)
   }
}
