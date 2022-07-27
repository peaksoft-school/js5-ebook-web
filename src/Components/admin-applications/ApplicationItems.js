import { styled } from '@mui/material'
import React, { useState } from 'react'
import MeatBalls from '../UI/MeatBalls/MeatBalls'
import { ReactComponent as CheckMark } from '../../assets/icons/MeatBalls/checkmark.svg'
import { ReactComponent as Reject } from '../../assets/icons/MeatBalls/reject.svg'
import Modal from '../UI/Modal'
import { ModalReject } from './ModalReject'
import AcceptRequest from './AcceptRequest'

const arr = [
   {
      id: 1,
      title: 'Принять',
      icon: <CheckMark />,
      clickItem: (func) => {
         func()
      },
   },
   {
      id: 2,
      title: 'Отклонить',
      icon: <Reject />,
      clickItem: (func) => {
         // post
         func()
      },
   },
]
const ApplicationItems = ({ id, img, date, name, price }) => {
   const [state, setState] = useState(false)



   const func = () => {
      setState(!state)
   }
  
   return (
      <BookItems primary={!state}>
         <MeatBall>
            <MeatBalls options={arr} func={func}  />
         </MeatBall>
         <Modal
            open={state}
            variant="mini"
            width="523px"
            height="247px"
            onClose={func}
         >
            <ModalReject />
         </Modal>
         <Modal
            open={state}
            variant="mini"
            width= "460px"
            height= "155px"
            onClose={func}
         >
            <AcceptRequest name={name}/>
         </Modal>
         <Div>
            <Book>{img}</Book>
            <NameBook>{name}</NameBook>
            <PriceDate>
               <Date>{date}</Date>
               <Price>{price}</Price>
            </PriceDate>
         </Div>
      </BookItems>
   )
}

export default ApplicationItems
const BookItems = styled('div')`
   width: 268px;
   height: 408px;
   border: ${(props) => (props.primary ? '0.5px solid #ff4c00' : '')};
   background: ${(props) =>
      props.primary ? 'rgba(255, 76, 0, 0.08)' : '#ededed'};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   font-family: 'Open Sans';
   padding-top: 20px;
   margin-top: 20px;
`
const MeatBall = styled('div')`
   display: flex;
   justify-content: flex-end;
   width: 238px;
   cursor: pointer;
`
const Book = styled('div')`
   width: 197px;
   height: 297px;
`
const NameBook = styled('p')`
   font-size: 14px;
   font-weight: 600;
`
const PriceDate = styled('p')`
   width: 197px;
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
`
