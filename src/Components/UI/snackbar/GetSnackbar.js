import React from 'react'
import { ReactComponent as OkSnackBar } from '../../../assets/icons/snackbar/fulfilled.svg'
import Snackbar from './Snackbar'
import { ReactComponent as Error } from '../../../assets/icons/snackbar/error.svg'

const GetSnackbar = ({
   open,
   variant,
   message,
   horizontal,
   handleClose,
   ...props
}) => {
   if (variant) {
      return (
         <Snackbar
            open={open}
            severity=""
            message={message}
            icon={variant === 'success' ? <OkSnackBar /> : <Error />}
            width="400px"
            handleClose={handleClose}
            horizontal={horizontal}
            {...props}
         />
      )
   }
   return (
      <Snackbar
         open={open}
         severity=""
         message={message || 'Заполняйте поля!'}
         width="400px"
         handleClose={handleClose}
         horizontal={horizontal}
         {...props}
      />
   )
}

export default GetSnackbar
