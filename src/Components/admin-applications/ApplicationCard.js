import { styled } from '@mui/material'
import React, { useState } from 'react'

import { ReactComponent as CheckMark } from '../../assets/icons/MeatBalls/checkmark.svg'
import { ReactComponent as Reject } from '../../assets/icons/MeatBalls/reject.svg'
import Modal from '../UI/Modal'
import { RejectRequest } from './RejectRequest'
import AcceptRequest from './AcceptRequest'
import MeatBalls from '../UI/MeatBalls/MeatBalls'

const ApplicationCard = ({ id, img, date, name, price, onClick }) => {
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
         onClick: rejectModal,
      },
   ]

   const [rejectAplication, setRejectAplication] = useState(false)
   const [isModal, setIsModal] = useState(false)
   const [toAccept, setToAccept] = useState(false)

   function acceptHandler(closeMeatBall) {
      setToAccept(!toAccept)
      closeMeatBall()

      // POST
   }

   function closeAcceptHandler() {
      setToAccept(!toAccept)
   }

   function rejectModal(closeMeatBall) {
      setRejectAplication(!rejectAplication)
      setIsModal(!isModal)
      closeMeatBall()
   }

   function onCloseRejectModal() {
      setIsModal(!isModal)
   }

   return (
      <BookItems primary={!rejectAplication} id={id}>
         <MeatBall>
            <MeatBalls options={menuMeatBall} />
         </MeatBall>
         <Modal
            open={isModal}
            variant="mini"
            width="523px"
            height="247px"
            onClose={() => onCloseRejectModal()}
         >
            <RejectRequest />
         </Modal>
         <Modal
            open={toAccept}
            variant="mini"
            width="460px"
            height="155px"
            onClose={() => closeAcceptHandler()}
         >
            <AcceptRequest name={name} />
         </Modal>
         <Div>
            <Book src={img} alt="photo" onClick={onClick} />
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
