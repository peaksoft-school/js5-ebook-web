import { styled } from '@mui/material'
import { useState } from 'react'
import Button from '../UI/Button/Button'
export const ModalReject = () => {
   const [reasonReject, setReasonReject] = useState('')

   const reasonChangeHandler = (e) => {
      setReasonReject(e.target.value)
   }
   console.log(reasonReject)

   async function SendReason() {
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
      <div>
         <ReasonForRejection>Причина вашего отклонения...</ReasonForRejection>
         <Input
            placeholder="Напишите причину отклонения"
            onChange={reasonChangeHandler}
            value={reasonReject}
         />
         <DivButton>
            <Button variant="default" onClick={SendReason}>
               Отправить
            </Button>
         </DivButton>
      </div>
   )
}

const ReasonForRejection = styled('h5')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
`
const Input = styled('input')`
   width: 483px;
   height: 108px;
   border: 1px solid #c4c4c4;
   margin-top: -5px;
   text-overflow: ellipsis;
`
const DivButton = styled('div')`
   display: flex;
   justify-content: end;
`
