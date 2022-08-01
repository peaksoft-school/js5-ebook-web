import { styled } from '@mui/material'
import React, { useState } from 'react'
import MeatBalls from '../UI/MeatBalls/MeatBalls'
import { ReactComponent as CheckMark } from '../../assets/icons/MeatBalls/checkmark.svg'
import { ReactComponent as Reject } from '../../assets/icons/MeatBalls/reject.svg'
import Modal from '../UI/Modal'
import { ModalReject } from './ModalReject'
import AcceptRequest from './AcceptRequest'

const ApplicationCard = ({ id, img, date, name, price, minusView }) => {
   const menuMeatBall = [
      {
         id: 1,
         title: 'Принять',
         icon: <CheckMark />,
         onClick: acceptHandler,
      },
      {
         id: 2,
         title: 'Отклонить',
         icon: <Reject />,
         onClick: reject,
      },
   ]

   const [rejectAplication, setRejectAplication] = useState(false)
   const [isModal, setIsModal] = useState(false)
   const [toAccept, setToAccept] = useState(false)
   function acceptHandler(closeMeatBall) {
      setToAccept(!toAccept)
      closeMeatBall()
      minusView(id)
   }

   function closeAcceptHandler() {
      setToAccept(!toAccept)
   }

   function reject(closeMeatBall) {
      setRejectAplication(!rejectAplication)
      setIsModal(!isModal)
      closeMeatBall()
      minusView(id)
   }

   function onCloseModal() {
      setIsModal(!isModal)
   }

   return (
      <BookItems primary={!rejectAplication}>
         <MeatBall>
            <MeatBalls options={menuMeatBall} />
         </MeatBall>
         <Modal
            open={isModal}
            variant="mini"
            width="523px"
            height="247px"
            onClose={onCloseModal}
         >
            <ModalReject />
         </Modal>
         <Modal
            open={toAccept}
            variant="mini"
            width="460px"
            height="155px"
            onClose={closeAcceptHandler}
         >
            <AcceptRequest name={name} />
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

`
const NameBook = styled('p')`
   font-size: 14px;
   font-weight: 600;
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
