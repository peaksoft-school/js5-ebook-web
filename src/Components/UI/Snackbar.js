import { forwardRef } from 'react'
import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import MuiSnackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function Snackbar({
   width,
   height,
   open,
   handleClose,
   severity,
   message,
   children,
   icon,
}) {
   return (
      <Stack>
         <StyledSnackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}
            width={width}
            height={height}
         >
            <StyledAlert
               severity={severity}
               onClose={handleClose}
               sx={{ width: '100%' }}
            >
               {/* <img src={icon} alt="icon" /> */}
               <Icon>{icon}</Icon>
               <StyledMessage>{message}</StyledMessage>
               {children}
            </StyledAlert>
         </StyledSnackbar>
      </Stack>
   )
}

export default Snackbar

const Icon = styled('div')`
   /* border: 1px solid red; */
   display: flex;
   justify-content: center;
   align-items: center;
`

const StyledAlert = styled(Alert)`
   display: flex;
   justify-content: center;
`
const StyledMessage = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   color: #000000;
`
const StyledSnackbar = styled(MuiSnackbar)`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   background: #ffffff;
   color: black;
   border-radius: 0px;
   padding: 0px;
   display: flex;
   justify-content: center;
   align-items: center;
   .css-ki1hdl-MuiAlert-action {
      position: absolute;
      right: 20px;
   }
`
