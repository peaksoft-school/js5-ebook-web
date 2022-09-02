import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { ReactComponent as CheckMark } from '../../../assets/icons/MeatBalls/checkmark.svg'
import { ReactComponent as Reject } from '../../../assets/icons/MeatBalls/reject.svg'
import Modal from '../../../Components/UI/Modal'
import { RejectRequest } from './RejectRequest'
import AcceptRequest from './AcceptRequest'
import MeatBalls from '../../../Components/UI/MeatBalls/MeatBalls'
import { acceptApplication } from '../../../store/slices/adminActions/applicationsActions'

const ApplicationCard = ({ id, img, date, name, price, onClick }) => {
   console.log(id)
   const dispatch = useDispatch()
   const menuMeatBall = [
      {
         id: 55,
         title: 'Принять',
         icon: <CheckMark />,
         onClick: acceptModal,
      },
      {
         id: 2,
         title: 'Отклонить',
         icon: <Reject />,
         onClick: rejectModal,
      },
   ]

   const [rejectAplication, setRejectAplication] = useState(false)
   const [isModal, setIsModal] = useState(false)
   const [toAccept, setToAccept] = useState(false)

   // useEffect(() => {
   //    dispatch(acceptApplication(id))
   // }, [toAccept])
   function acceptModal() {
      // setToAccept((prev) => !prev)
      dispatch(acceptApplication(id))
   }

   function closeAcceptModal(e) {
      e.stopPropagation()
      setToAccept(!toAccept)
   }

   function rejectModal() {
      setRejectAplication(!rejectAplication)
      setIsModal(!isModal)
   }

   function onCloseRejectModal(e) {
      e.stopPropagation(e)
      setIsModal(!isModal)
   }

   return (
      <BookItems primary={!rejectAplication} id={id} onClick={onClick}>
         <MeatBall onClick={(e) => e.stopPropagation()}>
            <MeatBalls options={menuMeatBall} />
         </MeatBall>
         <Modal
            open={isModal}
            variant="mini"
            width="523px"
            height="247px"
            overflow="none"
            onClose={(e) => onCloseRejectModal(e)}
         >
            <RejectRequest />
         </Modal>
         <Modal
            open={toAccept}
            variant="mini"
            width="460px"
            height="155px"
            overflow="none"
            onClose={(e) => closeAcceptModal(e)}
         >
            <AcceptRequest />
         </Modal>
         <Div>
            <Book src={img} alt="photo" />
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
   border: ${(props) => (props.primary ? '0.5px solid #ff4c00' : '')};
   background: ${(props) =>
      props.primary ? 'rgba(255, 76, 0, 0.08)' : '#ededed'};
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: space-evenly;
   font-family: 'Open Sans';
   margin-top: 20px;
   padding-top: 20px;
`
const MeatBall = styled('div')`
   display: flex;
   justify-content: center;
   width: 60px;
   cursor: pointer;
`
const Book = styled('img')`
   width: 170px;
   height: 260px;
   cursor: pointer;
`
const NameBook = styled('p')`
   font-size: 14px;
   font-weight: 600;
   width: 194px;
`
const PriceDate = styled('p')`
   width: 169px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: -20px;
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
