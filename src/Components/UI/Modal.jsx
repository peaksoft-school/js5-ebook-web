import Box from '@mui/material/Box'
import MuiModal from '@mui/material/Modal'
import styled from '@emotion/styled'

export default function Modal({
   children,
   open,
   onClose,
   variant,
   width,
   height,
}) {
   return (
      <MuiModal
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <StyledBox variant={variant} width={width} height={height}>
            {children}
         </StyledBox>
      </MuiModal>
   )
}

const StyledBox = styled(Box)((props) => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   width: props.width,
   height: props.height,
   padding: `${props.variant === 'normal' ? '40px 30px' : '20px'}`,
   transform: 'translate(-50%, -50%)',
   backgroundColor: ' #ffff',
   color: '#000',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
}))
