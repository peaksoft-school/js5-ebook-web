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

export const acceptApplicationInnerPage = (id, navigate) => {
   return async (dispatch) => {
      try {
         dispatch(applicationsInnerPageSlicesAction.pending())
         const result = await appFetch({
            method: 'POST',
            url: `/api/admin/applications/books/${id}/accepted`,
            body: id,
         })

         dispatch(
            applicationsInnerPageSlicesAction.postAcceptApplication(result)
         )
         toast.success(result.message)
         navigate(-1)
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
   navigate,
}) => {
   return async (dispatch) => {
      try {
         dispatch(applicationsInnerPageSlicesAction.pending())
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
         navigate(-1)
         return result
      } catch (error) {
         toast.error('Не удалось отклонить!')
         return error
      }
   }
}

export function blockBookAction(id, navigate) {
   return async (dispatch) => {
      try {
         dispatch(applicationsInnerPageSlicesAction.pending())
         const books = await appFetch({
            url: '',
         })
         dispatch(applicationsInnerPageSlicesAction.getBlockMessage(books))
         dispatch(applicationsInnerPageSlicesAction.success())
         toast.success(books.message)
         dispatch(applicationsInnerPageSlicesAction.fulfilled())
         navigate(-1)
         return books
      } catch (error) {
         toast.error('Не удалось блокировать!')
         dispatch(applicationsInnerPageSlicesAction.error())
         return error
      }
   }
}
