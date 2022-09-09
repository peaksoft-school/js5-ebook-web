import toast from 'react-hot-toast'
import appFetch from '../../hooks/appFetch'
import { applicationsInnerPageSlicesAction } from './applicationInnerPagesSlices'

export const applicationInnerPageAction = (id) => {
   return async (dispatch) => {
      const result = await appFetch({
         url: `/api/books/${id}`,
      })
      dispatch(applicationsInnerPageSlicesAction.getInnerPage(result))
   }
}
export const acceptApplicationInnerPage = (id) => {
   return async (dispatch) => {
      try {
         const result = await appFetch({
            method: 'POST',
            url: `/api/admin/applications/books/${id}/accepted`,
            body: id,
         })

         dispatch(
            applicationsInnerPageSlicesAction.postAcceptApplication(result)
         )
         toast.success(result.message)
         return result
      } catch (error) {
         toast.error('Не удалось принять!')
         return error
      }
   }
}

export const rejectAplicationInnerPage = ({ id, reasonReject }) => {
   return async (dispatch) => {
      try {
         const result = await appFetch({
            method: 'POST',
            url: `/api/admin/applications/books/${id}/rejected?description=${reasonReject}`,
         })

         dispatch(
            applicationsInnerPageSlicesAction.postRejectApplication(result)
         )
         toast.success(result.message)
         return result
      } catch (error) {
         toast.error('Не удалось отклонить!')
         return error
      }
   }
}
