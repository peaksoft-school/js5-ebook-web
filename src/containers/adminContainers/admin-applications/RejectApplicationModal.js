import { styled } from '@mui/material'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import Button from '../../../Components/UI/Button/Button'
import { rejectAplication } from '../../../store/slices/adminActions/applicationsActions'

export const RejectApplicationModal = ({ id, onClose }) => {
   const dispatch = useDispatch()
   const [reasonReject, setReasonReject] = useState('')

   const reasonChangeHandler = (e) => {
      setReasonReject(e.target.value)
   }

   function sendReason(e) {
      e.stopPropagation()
      dispatch(rejectAplication({ id, reasonReject, onClose, setReasonReject }))
      if (reasonReject.trim().length !== 0) {
         dispatch(
            rejectAplication({ id, reasonReject, onClose, setReasonReject })
         )
         return
      }
      toast.error('Заполняйте поля!')
   }
   return (
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
               onClick={(e) => sendReason(e)}
            >
               Отправить
            </Button>
         </DivButton>
      </RejectModal>
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
