import * as React from 'react'
import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import MuiSnackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function Snackbar({
   width,
   height,
   open,
   severity,
   message,
   children,
   onClose,
   handleClose,
   icon,
   horizontal,
}) {
   return (
      <Stack onClick={(e) => e.stopPropagation()}>
         <StyledSnackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{
               vertical: 'top',
               horizontal: horizontal || 'center',
            }}
            onClose={handleClose}
            width={width}
            height={height}
         >
            <StyledAlert
               severity={severity}
               onClose={() => onClose(false)}
               onClick={handleClose}
               sx={{ width: '100%' }}
            >
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
   .MuiAlert-root {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.87);
      -webkit-transition: none;
      transition: none;
      border-radius: 4px;
      box-shadow: none;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.43;
      letter-spacing: 0.01071em;
      background-color: transparent;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding: 6px 16px;
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
   }

   width: ${(props) => props.width};
   height: ${(props) => props.height};
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

   .MuiAlert-root {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.87);
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 4px;
      box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
         0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
   }
`
