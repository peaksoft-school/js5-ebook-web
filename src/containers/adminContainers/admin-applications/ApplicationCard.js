import { styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CheckMark } from '../../../assets/icons/MeatBalls/checkmark.svg'
import { ReactComponent as Reject } from '../../../assets/icons/MeatBalls/reject.svg'
import { RejectApplicationModal } from './RejectApplicationModal'
import { acceptApplication } from '../../../store/slices/adminActions/applicationsActions'
import { uiSlicesSlicesActions } from '../../../store/slices/uiSlices'
import PopUpMeatBalls from '../../../Components/UI/MeatBalls/PopupMeatBalls'

const ApplicationCard = ({ id, img, date, name, price, enabled }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const isRejectModalOpen = useSelector((state) => state.uiSlice.rejectModal)

   const menuMeatBall = [
      {
         id: 55,
         text: 'Принять',
         icon: <CheckMark />,
         onClick: acceptModal,
      },
      {
         id: 2,
         text: 'Отклонить',
         icon: <Reject />,
         onClick: rejectModal,
      },
   ]

   function acceptModal() {
      dispatch(acceptApplication(id))
   }

   function rejectModal() {
      dispatch(uiSlicesSlicesActions.showRejectModal())
   }

   function onCloseRejectModal() {
      dispatch(uiSlicesSlicesActions.hideRejectModal())
   }

   const navigateToDetailsPage = () => {
      navigate(`/applications/${id}`)
   }

   return (
      <BookItems primary={enabled} id={id} onClick={navigateToDetailsPage}>
         <MeatBall onClick={(e) => e.stopPropagation()}>
            <PopUpMeatBalls options={menuMeatBall} />
         </MeatBall>

         <RejectApplicationModal
            id={id}
            open={isRejectModalOpen}
            onClose={() => onCloseRejectModal()}
         />

         <Div>
            <Img>
               <Book src={img} alt="photo" />
            </Img>
            <NameBook>{name}</NameBook>

            <PriceDate>
               <Date>{date}</Date>
               <Price>{price}</Price>
            </PriceDate>
         </Div>
      </BookItems>
   )
}

export default ApplicationCard

const BookItems = styled('div')`
   width: 225px;
   height: 380px;
   border: ${(props) => (!props.primary ? '0.5px solid #ff4c00' : '')};
   background: ${(props) =>
      !props.primary ? 'rgba(255, 76, 0, 0.08)' : '#ededed'};
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: space-evenly;
   font-family: 'Open Sans';
   margin-top: 22px;
   padding-top: 20px;
   margin-right: 10px;
`
const MeatBall = styled('div')`
   display: flex;
   justify-content: center;
   width: 60px;
   margin-right: -16px;
   margin-top: 5px;
   cursor: pointer;
`
const Book = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
   cursor: pointer;
`
const Img = styled('div')`
   margin-top: 5px;
   width: 172px;
   height: 260px;
   cursor: pointer;
`
const NameBook = styled('p')`
   font-size: 14px;
   font-weight: 600;
   width: 194px;
`
const PriceDate = styled('div')`
   width: 169px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: -15px;
   padding-bottom: 20px;
`
const Date = styled('p')`
   font-size: 14px;
   font-weight: 400;
   color: #8a8a8a;
`
const Price = styled('p')`
   font-size: 16px;
   font-weight: 600;
   color: #ff4c00;
`
const Div = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 197px;
`
