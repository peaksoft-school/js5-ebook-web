import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { styled } from '@mui/material'
import { ReactComponent as Edite } from '../../../assets/icons/mainEdite/Edite.svg'
import { ReactComponent as Delete } from '../../../assets/icons/mainEdite/Delete.svg'
import {
   getMainBooksDelete,
   getMainBooksWithId,
} from '../../../store/createActions/vendorMainPagesActions'
import PopUpMeatBalls from '../../../Components/UI/MeatBalls/PopupMeatBalls'
import Modal from '../../../Components/UI/Modal'
import Button from '../../../Components/UI/Button/Button'

export default function UpdateBooks({ id }) {
   const option = [
      {
         text: 'Редактировать',
         id: 1,
         icon: <Delete />,
         onClick: (id) => editeBook(id),
      },
      {
         text: 'Удалить',
         id: 2,
         icon: <Edite />,
         onClick: (id) => deleteBook(id),
      },
   ]
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const editeBook = () => {
      if (id) {
         dispatch(getMainBooksWithId(id, navigate))
      }
   }
   const deleteBook = () => {
      setIsOpenDeleteModal(true)
   }

   const handleCloseDeleteModal = () => {
      setIsOpenDeleteModal(false)
   }
   const onDelete = () => {
      dispatch(getMainBooksDelete(id))
      handleCloseDeleteModal()
   }

   return (
      <MeatbalsDiv>
         <PopUpMeatBalls options={option} prop="prop" />
         <Modal
            open={isOpenDeleteModal}
            onClose={handleCloseDeleteModal}
            variant="mini"
            width="460px"
            height="172px"
            justifyContent="space-around"
         >
            <div>
               <StyledInfoText>Вы уверены, что хотите удалить?</StyledInfoText>
               <StyledInfoTitle>{}</StyledInfoTitle>
            </div>
            <StyledModalBtnCont>
               <Button
                  variant="default"
                  background="white"
                  color="#A3A3A3"
                  onClick={handleCloseDeleteModal}
               >
                  Отменить
               </Button>
               <Button variant="default" onClick={onDelete}>
                  Удалить
               </Button>
            </StyledModalBtnCont>
         </Modal>
      </MeatbalsDiv>
   )
}
const MeatbalsDiv = styled('div')``

const StyledInfoText = styled('p')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 130%;
   color: #222222;
`
const StyledInfoTitle = styled('p')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
`
const StyledModalBtnCont = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 278px;
   height: 42px;
`
