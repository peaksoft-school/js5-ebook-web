import React from 'react'
import Modal from '../../Components/UI/Modal'

const DeleteBooks = ({ id, open, onClose }) => {
   return (
      <Modal
         open={open}
         onClose={onClose}
         variant="mini"
         width="460px"
         height="161px"
         overflow="none"
      >
         <DivButton>
            <Button
               variant="default"
               width="137px"
               height="42px"
               onClick={() => sendReason()}
            >
               Отправить
            </Button>
         </DivButton>
      </Modal>
   )
}

export default DeleteBooks
const DivButton = styled('div')`
   display: flex;
   justify-content: end;
   margin-top: 18px;
   margin-bottom: 20px;
`
