import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../Components/UI/Button/Button'
import Snackbar from '../../../Components/UI/Snacbar'
import { rejectAplication } from '../../../store/slices/adminActions/applicationsActions'
import { ReactComponent as IconAccept } from '../../../assets/icons/IconAccept.svg'
import { uiSlicesSlicesActions } from '../../../store/slices/uiSlices'
import { applicationSlicesActions } from '../../../store/slices/adminSlices/applicationsSlices'

export const RejectRequest = ({ id, onClose }) => {
   const { rejectMessage } = useSelector((state) => state.applications)
   const dispatch = useDispatch()

   const [reasonReject, setReasonReject] = useState('')

   const reasonChangeHandler = (e) => {
      setReasonReject(e.target.value)
   }
   function sendReason() {
      dispatch(rejectAplication({ id, reasonReject }))
      onClose()
   }
   useEffect(() => {
      let time = setTimeout(() => {}, [1])
      if (rejectMessage) {
         dispatch(uiSlicesSlicesActions.uiApplications())
         time = setTimeout(() => {
            onCloseSnackbar()
            dispatch(applicationSlicesActions.cleanReject())
         }, 3000)
      }
      return () => {
         clearTimeout(time)
      }
   }, [rejectMessage])

   function onCloseSnackbar() {
      dispatch(uiSlicesSlicesActions.uiApplications())
   }
   return (
      <RejectModal onClick={(e) => e.stopPropagation()}>
         <ReasonForRejection>Причина вашего отклонения</ReasonForRejection>
         <Input
            placeholder="Напишите причину отклонения..."
            onChange={reasonChangeHandler}
            value={reasonReject}
         />
         {rejectMessage && (
            <Snackbar
               width="460px"
               height="155px"
               open={dispatch(uiSlicesSlicesActions.uiApplications())}
               handleClose={() => onCloseSnackbar()}
               severity=""
               message={rejectMessage.message}
               icon={<IconAccept />}
            />
         )}
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
