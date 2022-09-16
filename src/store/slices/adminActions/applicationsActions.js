import appFetch from '../../../hooks/appFetch'
import { sortRequestApplic } from '../../../utils/helpers/helpers'
import { applicationSlicesActions } from '../adminSlices/applicationsSlices'

export const applicationsActions = (request) => {
   return async (dispatch) => {
      try {
         const result = await appFetch({
            url: `/api/admin/applications${sortRequestApplic(request)}`,
         })
         dispatch(
            applicationSlicesActions.getApplications(
               result.getApplications.content
            )
         )

         dispatch(
            applicationSlicesActions.setTotalElements(
               result.getApplications.totalElements
            )
         )

         dispatch(applicationSlicesActions.setUnwatched(result.unwatched))

         dispatch(
            applicationSlicesActions.setTotalPages(
               result.getApplications.totalPages
            )
         )
         return result
      } catch (error) {
         return error
      }
   }
}

export const seeMoreGetApplicationsActions = (request) => {
   return async (dispatch) => {
      try {
         const result = await appFetch({
            url: `/api/admin/applications${sortRequestApplic(request)}`,
         })

         dispatch(
            applicationSlicesActions.getApplications(
               result.getApplications.content
            )
         )

         dispatch(
            applicationSlicesActions.setTotalElements(
               result.getApplications.totalElements
            )
         )

         dispatch(applicationSlicesActions.setUnwatched(result.unwatched))

         dispatch(
            applicationSlicesActions.setTotalPages(
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
         const result = await appFetch({
            method: 'POST',
            url: `/api/admin/applications/books/${id}/accepted`,
            body: id,
         })
         dispatch(applicationSlicesActions.postAcceptApplication(result))
         dispatch(applicationsActions())
         toast.success(result.message)
         return result
      } catch (error) {
         toast.error('Не удалось принять!')
         return error
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
      try {
         const result = await appFetch({
            method: 'POST',
            url: `/api/admin/applications/books/${id}/rejected?description=${reasonReject}`,
         })
         dispatch(applicationSlicesActions.postRejectApplication(result))
         dispatch(applicationsActions())
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
