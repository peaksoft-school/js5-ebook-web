import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styled from '@emotion/styled'

export default function BasicModal({ children, ...props }) {
   return (
      <Modal
         open={props.open}
         onClose={props.onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <StyledBox {...props}>{children}</StyledBox>
      </Modal>
   )
}

const StyledBox = styled(Box)((props) => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   width: props.width,
   height: props.height,
   padding: '20px',
   transform: 'translate(-50%, -50%)',
   backgroundColor: ' #ffff',
   color: '#000',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
}))
