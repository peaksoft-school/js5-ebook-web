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
   justifyContent,
}) {
   return (
      <MuiModal
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <StyledBox
            variant={variant}
            width={width}
            height={height}
            justifyContent={justifyContent}
         >
            {children}
         </StyledBox>
      </MuiModal>
   )
}

const StyledBox = styled(Box)`
   position: absolute;
   top: 50%;
   left: 50%;
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   padding: ${(props) => (props.variant === 'mini' ? '20px' : '40px 30px')};
   transform: translate(-50%, -50%);
   background-color: #fff;
   color: #000;
   display: flex;
   justify-content: ${(props) => props.justifyContent || 'center'};
   flex-direction: column;
   align-items: center;
   overflow: auto;
   ::-webkit-scrollbar {
      width: 5px;
   }
   /* Track */
   ::-webkit-scrollbar-track {
      background: #f1f1f1;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
   }
   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
`
