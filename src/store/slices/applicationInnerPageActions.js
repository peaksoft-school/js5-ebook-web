import appFetch from '../../hooks/AppFetch'
import { applicationsInnerPageSlicesAction } from './applicationInnerPagesSlices'

export const applicationInnerPageAction = (id) => {
   return async (dispatch) => {
      const result = await appFetch({
         url: `/api/books/${id}`,
      })
      console.log(result)
      dispatch(applicationsInnerPageSlicesAction.getInnerPage(result))
   }
}
export const acceptApplication = (id) => {
   return async (dispatch) => {
      const result = await appFetch({
         url: `/api/admin/application/books/${id}/accepted`,
         method: 'POST',
         body: id,
      })
      dispatch(applicationsInnerPageSlicesAction.acceptApplication(result))
   }
}
