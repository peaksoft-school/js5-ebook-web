import appFetch from '../../../hooks/AppFetch'

export const applicationsActions = () => {
   return async (dispatch) => {
      const result = await appFetch({
         url: '/api/admin/application/applications?page=1&size=8',
         method: 'GET',
      })
      console.log(result)
   }
}
