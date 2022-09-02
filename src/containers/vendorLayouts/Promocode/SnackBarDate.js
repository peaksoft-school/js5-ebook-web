import React from 'react'
import Snackbar from '../../../Components/UI/Snackbar'
import { ReactComponent as OkSnackBar } from '../../../assets/icons/snackbar/fulfilled.svg'
import { ReactComponent as Error } from '../../../assets/icons/snackbar/error.svg'

const SnackBarDate = ({ snack, variant, message }) => {
   return (
      <Snackbar
         open={snack}
         severity=""
         message={message || 'Заполняйте поля!'}
         icon={variant === 'success' ? <OkSnackBar /> : <Error />}
         width="400px"
      />
   )
}

export default SnackBarDate
