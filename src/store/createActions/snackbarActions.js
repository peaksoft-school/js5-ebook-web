import snackbarAction from '../slices/snackbarSlice'

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
