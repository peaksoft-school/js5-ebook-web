import snackbarAction from '../slices/snackbarSlice'
import vendorMainPageAction from '../slices/vendorMainPageSlice'

export const snackbarActions = (bron) => {
   return (dispatch) => {
      if (bron) {
         dispatch(snackbarAction.success())
      }
      const timer = setTimeout(() => {
         dispatch(snackbarAction.notSnackbar())
         dispatch(snackbarAction.error())
      }, 3000)
      return () => clearTimeout(timer)
   }
}

export const emptyActions = () => {
   return (dispatch) => {
      dispatch(vendorMainPageAction.clearSaveBook())

      const timer = setTimeout(() => {
         dispatch(vendorMainPageAction.unClearBook())
      }, 1000)
      return () => clearTimeout(timer)
   }
}
