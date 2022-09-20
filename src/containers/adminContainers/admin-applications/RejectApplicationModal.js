import { styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../../Components/UI/Button/Button'
import { rejectAplication } from '../../../store/slices/adminActions/applicationsActions'
import Modal from '../../../Components/UI/Modal'

export const RejectApplicationModal = ({ id, open, onClose }) => {
   const dispatch = useDispatch()

   const [reasonReject, setReasonReject] = useState('')

   const reasonChangeHandler = (e) => {
      setReasonReject(e.target.value)
   }

   function sendReason() {
      dispatch(rejectAplication({ id, reasonReject, onClose, setReasonReject }))
   }
   return (
      <Modal
         open={open}
         onClose={onClose}
         variant="mini"
         width="523px"
         height="247px"
         overflow="none"
      >
         <RejectModal onClick={(e) => e.stopPropagation()}>
            <ReasonForRejection>Причина вашего отклонения</ReasonForRejection>
            <Input
               placeholder="Напишите причину отклонения..."
               onChange={reasonChangeHandler}
               value={reasonReject}
            />

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
         </RejectModal>
      </Modal>
   )
}

const RejectModal = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`
const ReasonForRejection = styled('h5')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   margin-top: 20px;
   margin-bottom: 18px;
`
const Input = styled('textarea')`
   width: 483px;
   height: 108px;
   border: 1px solid #c4c4c4;
   padding: 8px 13px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   resize: none;
   overflow: auto;
   outline: none;
`
const DivButton = styled('div')`
   display: flex;
   justify-content: end;
   margin-top: 18px;
   margin-bottom: 20px;
`
