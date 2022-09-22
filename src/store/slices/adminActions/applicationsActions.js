import toast from 'react-hot-toast'
import appFetch from '../../../hooks/appFetch'
import { applicationSlicesActions } from '../adminSlices/applicationsSlices'
import { sortRequestApplic } from '../../../utils/helpers/helpers'

export const applicationsActions = (request) => {
   return async (dispatch) => {
      try {
         dispatch(applicationSlicesActions.pending())
         const result = await appFetch({
            url: `/api/admin/applications${sortRequestApplic(request)}`,
         })
         dispatch(
            applicationSlicesActions.getApplications(
               result.getApplications.content
            )
         )
         dispatch(
            applicationSlicesActions.getTotalElements(
               result.getApplications.totalElements
            )
         )
         dispatch(applicationSlicesActions.getUnwatched(result.unwatched))
         dispatch(
            applicationSlicesActions.getTotalPages(
               result.getApplications.totalPages
            )
         )
         dispatch(applicationSlicesActions.success())
      } catch (error) {
         dispatch(applicationSlicesActions.rejected())
      }
   }
}

export const seeMoreGetApplicationsActions = (request) => {
   return async (dispatch) => {
      try {
         dispatch(applicationSlicesActions.pending())
         const result = await appFetch({
            url: `/api/admin/applications${sortRequestApplic(request)}`,
         })

         dispatch(
            applicationSlicesActions.seeMoreGetApplications(
               result.getApplications.content
            )
         )
         dispatch(
            applicationSlicesActions.getTotalElements(
               result.getApplications.totalElements
            )
         )
         dispatch(applicationSlicesActions.getUnwatched(result.unwatched))
         dispatch(
            applicationSlicesActions.getTotalPages(
               result.getApplications.totalPages
            )
         )
         return result
      } catch (error) {
         return error
      }
   }
}

export const acceptApplication = (id) => {
   return async (dispatch) => {
      try {
         dispatch(applicationSlicesActions.pending())
         const result = await appFetch({
            method: 'POST',
            url: `/api/admin/applications/books/${id}/accepted`,
            body: id,
         })
         dispatch(applicationSlicesActions.postAcceptApplication(result))
         dispatch(applicationsActions())
         toast.success(result.message)
      } catch (error) {
         toast.error('Не удалось принять!')
      }
   }
}

export const rejectAplication = ({
   id,
   reasonReject,
   onClose,
   setReasonReject,
}) => {
   return async (dispatch) => {
      dispatch(applicationSlicesActions.pending())
      const result = await appFetch({
         method: 'POST',
         url: `/api/admin/applications/books/${id}/rejected?description=${reasonReject}`,
      })
      dispatch(applicationSlicesActions.postRejectApplication(result))
      dispatch(applicationsActions())
      toast.success(result.message)
      setReasonReject('')
      onClose()
   }
}
