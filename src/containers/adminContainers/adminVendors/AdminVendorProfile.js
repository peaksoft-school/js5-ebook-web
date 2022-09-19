import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import Button from '../../../Components/UI/Button/Button'
import {
   getAdminVendorWithId,
   deleteAdminVendor,
} from '../../../store/slices/getAdminVendorsSlice'
import Modal from '../../../Components/UI/Modal'
import Spinner from '../../../Components/UI/Spinner'

const AdminVendorProfile = () => {
   const { vendor, deleteVendor, status } = useSelector(
      (state) => state.adminVendors
   )
   const { vendorId } = useParams()
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
      dispatch(getAdminVendorWithId(vendorId))
   }, [])

   const handleDeleteVendor = () => {
      dispatch(deleteAdminVendor(vendorId))
   }

   const handleVendorsNav = () => {
      navigate('/vendors')
   }

   useEffect(() => {
      if (deleteVendor) {
         handleVendorsNav()
      }
   }, [deleteVendor])

   const showComponent = isShowSpinner ? (
      <Spinner variant="two" />
   ) : (
      <StyledCont>
         <div>
            <StyledBlock>
               <StyledInfoTitle>Имя</StyledInfoTitle>
               <StyledInfo>{vendor.firstName}</StyledInfo>
            </StyledBlock>
            <StyledBlock>
               <StyledInfoTitle>Фамилия</StyledInfoTitle>
               <StyledInfo>{vendor.lastName}</StyledInfo>
            </StyledBlock>
         </div>
         <div>
            <StyledBlock>
               <StyledInfoTitle>Номер телефона</StyledInfoTitle>
               <StyledInfo>{vendor.phoneNumber}</StyledInfo>
            </StyledBlock>
            <StyledBlock>
               <StyledInfoTitle>Email</StyledInfoTitle>
               <StyledInfo>{vendor.email}</StyledInfo>
            </StyledBlock>
         </div>
         <div>
            <StyledBlock>
               <StyledInfoTitle>Дата регистрации</StyledInfoTitle>
               <StyledInfo>{vendor.dateOfRegistration}</StyledInfo>
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
               <Button variant="default" onClick={handleDeleteVendor}>
                  Удалить
               </Button>
            </StyledModalBtnCont>
         </Modal>
      </StyledCont>
   )
   return <div>{showComponent}</div>
}

export default AdminVendorProfile

const StyledCont = styled.div`
   /* border: 1px solid red; */
   display: flex;
   justify-content: space-between;
   /* width: 1147px; */
   height: 367px;
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
