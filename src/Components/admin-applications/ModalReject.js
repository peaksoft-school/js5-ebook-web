import { styled } from '@mui/material'
import { useState } from 'react'
import Button from '../UI/Button/Button'
export const ModalReject = () => {
   const [reasonReject, setReasonReject] = useState('')

   const reasonChangeHandler = (e) => {
      setReasonReject(e.target.value)
   }
 

   async function sendReason() {
      if (reasonReject.trim().length !== 0) {
         const response = await fetch(
            'https://aauth-89a27-default-rtdb.firebaseio.com/reason.json',
            {
               method: 'POST',
               body: JSON.stringify(reasonReject),
               headers: {
                  'Content-Type': 'applications/json',
               },
            }
         )
         const data = await response.json()
         console.log(data)
      }
   }
   return (
      <RejectModal>
         <ReasonForRejection>Причина вашего отклонения</ReasonForRejection>
         <Input
            placeholder="Напишите причину отклонения..."
            onChange={reasonChangeHandler}
            value={reasonReject}
         />
         <DivButton>
            <Button variant="default" onClick={sendReason}>
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
   padding-top: 8px;
   padding-left: 13px;
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
