import appFetch from '../../../hooks/AppFetch'
import { applicationSlicesActions } from '../adminSlices/applicationsSlices'
import { sortRequestApplic } from '../../../utils/helpers/helpers'

export const applicationsActions = (request) => {
   return async (dispatch) => {
      const result = await appFetch({
         url: `/api/admin/application/applications${sortRequestApplic(
            request
         )}`,
         // method: 'GET',
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
   }
}

export const acceptApplication = (id) => {
   return async () => {
      try {
         const result = await appFetch({
            method: 'POST',
            url: `/api/admin/application/books/${id}/accepted`,
            body: id,
         })
         console.log(result.message)

         return result
      } catch (error) {
         return error
      }
   }
}
