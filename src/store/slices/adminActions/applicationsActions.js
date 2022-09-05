import appFetch from '../../../hooks/appFetch'
import { applicationSlicesActions } from '../adminSlices/applicationsSlices'
import { sortRequestApplic } from '../../../utils/helpers/helpers'

export const applicationsActions = (request) => {
   // eslint-disable-next-line consistent-return
   return async (dispatch) => {
      try {
         const result = await appFetch({
            url: `/api/admin/application/applications${sortRequestApplic(
               request
            )}`,
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
            url: `/api/admin/application/books/${id}/accepted`,
            body: id,
         })
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
            url: `/api/admin/application/books/${id}/rejected?description=${reasonReject}`,
         })
         dispatch(applicationSlicesActions.postRejectApplication(result))
         console.log(result)
         return result
      } catch (error) {
         return error
      }
   }
}
