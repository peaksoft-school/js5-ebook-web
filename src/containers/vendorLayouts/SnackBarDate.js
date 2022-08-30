import React from 'react'
import Snackbar from '../../Components/UI/Snacbar'
import { ReactComponent as OkSnackBar } from '../../assets/icons/snacbar/fulfilled.svg'
import { ReactComponent as Error } from '../../assets/icons/snacbar/error.svg'

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
