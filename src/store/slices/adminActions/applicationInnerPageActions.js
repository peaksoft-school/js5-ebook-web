import toast from 'react-hot-toast'
import appFetch from '../../../hooks/appFetch'
import { applicationsInnerPageSlicesAction } from '../adminSlices/applicationInnerPagesSlices'

export const applicationInnerPageAction = (id) => {
   return async (dispatch) => {
      dispatch(applicationsInnerPageSlicesAction.pending())
      const result = await appFetch({
         url: `/api/books/${id}`,
      })
      dispatch(applicationsInnerPageSlicesAction.getInnerPage(result))
      dispatch(applicationsInnerPageSlicesAction.success())
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

export const rejectAplicationInnerPage = ({
   id,
   reasonReject,
   onClose,
   setReasonReject,
}) => {
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
         setReasonReject('')
         onClose()
         return result
      } catch (error) {
         toast.error('Не удалось отклонить!')
         return error
      }
   }
}
