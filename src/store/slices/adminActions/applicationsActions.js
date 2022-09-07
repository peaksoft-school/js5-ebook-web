import appFetch from '../../../hooks/appFetch'
import { applicationSlicesActions } from '../adminSlices/applicationsSlices'
import { sortRequestApplic } from '../../../utils/helpers/helpers'

export const startApplicationsActions = (request) => {
   // eslint-disable-next-line consistent-return
   return async (dispatch) => {
      try {
         const result = await appFetch({
            url: `/api/admin/applications${sortRequestApplic(request)}`,
         })
         dispatch(
            applicationSlicesActions.getStartApplications(
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
      } catch (error) {
         return error
      }
   }
}

export const applicationsActions = (request) => {
   // eslint-disable-next-line consistent-return
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
         console.log(result)
         dispatch(applicationSlicesActions.postAcceptApplication(result))
         return result
      } catch (error) {
         return error
      }
   }
}

export const rejectAplication = ({ id, reasonReject }) => {
   return async (dispatch) => {
      try {
         const result = await appFetch({
            method: 'POST',
            url: `/api/admin/applications/books/${id}/rejected?description=${reasonReject}`,
         })
         // console.log(result)
         dispatch(applicationSlicesActions.postRejectApplication(result))
         return result
      } catch (error) {
         return error
      }
   }
}
