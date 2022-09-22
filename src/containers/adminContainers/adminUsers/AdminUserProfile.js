import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import Button from '../../../Components/UI/Button/Button'
import {
   deleteAdminUser,
   getAdminUserWithId,
} from '../../../store/slices/getAdminUsersSlices'
import Modal from '../../../Components/UI/Modal'
import Spinner from '../../../Components/UI/Spinner'

const AdminUserProfile = () => {
   const { user, status, deleteUser } = useSelector((state) => state.adminUsers)
   const { userId } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [isShowSpinner, setIsShowSpinner] = useState()
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   const handleOpenDeleteModal = () => setIsOpenDeleteModal(true)
   const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)

   useEffect(() => {
      if (status === 'pending') {
         setIsShowSpinner(true)
      } else {
         setIsShowSpinner(false)
      }
   }, [status])

   useEffect(() => {
      dispatch(getAdminUserWithId(userId))
   }, [])

   const handleDeleteUser = () => {
      dispatch(deleteAdminUser(userId))
   }

   const handleusersNav = () => {
      navigate('/users')
   }

   useEffect(() => {
      if (deleteUser) {
         handleusersNav()
      }
   }, [deleteUser])

   return (
      <StyledCont>
         {isShowSpinner && <Spinner />}
         <div>
            <StyledBlock>
               <StyledInfoTitle>Имя</StyledInfoTitle>
               <StyledInfo>{user.name}</StyledInfo>
            </StyledBlock>
            <StyledBlock>
               <StyledInfoTitle>Email</StyledInfoTitle>
               <StyledInfo>{user.email}</StyledInfo>
            </StyledBlock>
         </div>
         <div>
            <StyledBlock>
               <StyledInfoTitle>Дата регистрации</StyledInfoTitle>
               <StyledInfo>{user.dateOfRegister}</StyledInfo>
            </StyledBlock>
         </div>
         <StyledButton
            variant="universal"
            width="210px"
            height="42px"
            color="#f10000"
            onClick={handleOpenDeleteModal}
         >
            Удалить профиль
         </StyledButton>
         <Modal
            open={isOpenDeleteModal}
            onClose={handleCloseDeleteModal}
            variant="mini"
            width="460px"
            height="161px"
            justifyContent="space-around"
         >
            <div>
               <StyledInfoText>
                  Вы уверены, что хотите удалить профиль?
               </StyledInfoText>
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
               <Button variant="default" onClick={handleDeleteUser}>
                  Удалить
               </Button>
            </StyledModalBtnCont>
         </Modal>
      </StyledCont>
   )
}

export default AdminUserProfile

const StyledCont = styled.div`
   display: flex;
   justify-content: space-between;
   /* width: 1147px; */
   height: 367px;
   margin-top: -120px;
`
const StyledBlock = styled.div`
   margin-bottom: 32px;
`
const StyledInfoTitle = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #898989;
`
const StyledInfo = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #282828;
`
const StyledInfoText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
`
const StyledModalBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
   width: 278px;
   height: 42px;
`
const StyledButton = styled(Button)`
   align-self: flex-end;
   justify-self: flex-end;
`
