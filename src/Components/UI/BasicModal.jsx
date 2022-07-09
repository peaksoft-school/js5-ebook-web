import ReactDOM from 'react-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styled from '@emotion/styled'

export default function BasicModal({ children, ...props }) {
   return ReactDOM.createPortal(
      <Modal
         open={props.open}
         onClose={props.onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <StyledBox {...props}>{children}</StyledBox>
      </Modal>,
      document.getElementById('modal-root')
   )
}

const StyledBox = styled(Box)((props) => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   width: props.width,
   height: props.height,
   transform: 'translate(-50%, -50%)',
   backgroundColor: ' #ffff',
   color: '#000',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
}))
