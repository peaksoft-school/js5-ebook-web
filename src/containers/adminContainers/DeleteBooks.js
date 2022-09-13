import { styled } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../Components/UI/Button/Button'
import Modal from '../../Components/UI/Modal'
import { deleteBookAction } from '../../store/slices/globalSlices'

const DeleteBooks = ({ id, open, onClose }) => {
   const dispatch = useDispatch()

   function deleteBook() {
      const fetch = async () => {
         try {
            const response = await dispatch(
               deleteBookAction(id, onClose)
            ).unwrap()
            onClose()
            return response
         } catch (error) {
            return error
         }
      }

      fetch()
   }
   return (
      <Modal
         open={open}
         onClose={onClose}
         variant="mini"
         width="460px"
         height="161px"
         overflow="none"
      >
         <Message>Вы уверены, что хотите удалить книгу?</Message>
         <DivButton>
            <Button
               variant="default"
               width="137px"
               height="42px"
               background="none"
               color="gray"
               onClick={() => onClose()}
            >
               Отменить
            </Button>

            <Button
               variant="default"
               width="137px"
               height="42px"
               onClick={() => deleteBook()}
            >
               Блокировать
            </Button>
         </DivButton>
      </Modal>
   )
}

export default DeleteBooks

const DivButton = styled('div')`
   display: flex;
   justify-content: space-evenly;
   margin-top: 23px;
   margin-bottom: 20px;
   width: 100%;
`
const Message = styled('p')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   text-align: center;
   color: #000000;
   padding-top: 20px;
`
