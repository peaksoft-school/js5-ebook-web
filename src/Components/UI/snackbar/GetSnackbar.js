import React, { useEffect } from 'react'
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
   useEffect(() => {
      const time = setTimeout(() => {
         handleClose()
      }, 3000)
      return () => {
         clearTimeout(time)
      }
   }, [])
   if (variant) {
      return (
         <Snackbar
            open={open}
            severity=""
            message={message}
            icon={variant === 'success' ? <OkSnackBar /> : <Error />}
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
         message={message}
         width="400px"
         handleClose={handleClose}
         horizontal={horizontal}
         {...props}
      />
   )
}

export default GetSnackbar
