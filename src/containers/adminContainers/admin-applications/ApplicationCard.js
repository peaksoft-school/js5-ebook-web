import { styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CheckMark } from '../../../assets/icons/MeatBalls/checkmark.svg'
import { ReactComponent as Reject } from '../../../assets/icons/MeatBalls/reject.svg'
import { ReactComponent as IconAccept } from '../../../assets/icons/IconAccept.svg'
import Modal from '../../../Components/UI/Modal'
import { RejectRequest } from './RejectRequest'
import MeatBalls from '../../../Components/UI/MeatBalls/MeatBalls'
import { acceptApplication } from '../../../store/slices/adminActions/applicationsActions'
import { applicationSlicesActions } from '../../../store/slices/adminSlices/applicationsSlices'
import { uiSlicesSlicesActions } from '../../../store/slices/uiSlices'
import Snackbar from '../../../Components/UI/Snackbar'

const ApplicationCard = ({ id, img, date, name, price, enabled }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { acceptMessage } = useSelector((state) => state.applications)

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

   const [isModal, setIsModal] = useState(false)

   function acceptModal() {
      dispatch(acceptApplication(id))
   }

   useEffect(() => {
      let time = setTimeout(() => {}, [1])
      if (acceptMessage) {
         dispatch(uiSlicesSlicesActions.uiApplications())
         time = setTimeout(() => {
            onCloseSnackbar()
            dispatch(applicationSlicesActions.cleanAccept())
         }, 3000)
      }
      return () => {
         clearTimeout(time)
      }
   }, [acceptMessage])

   function rejectModal() {
      setIsModal(!isModal)
   }

   function onCloseRejectModal(e) {
      e.stopPropagation(e)
      setIsModal(!isModal)
   }

   function onCloseSnackbar() {
      dispatch(uiSlicesSlicesActions.uiApplications())
   }

   const deatailRequest = () => {
      navigate(`/request/${id}`)
   }
   return (
      <BookItems primary={enabled} id={id} onClick={deatailRequest}>
         <MeatBall onClick={(e) => e.stopPropagation()}>
            <MeatBalls options={menuMeatBall} />
         </MeatBall>
         {acceptMessage && (
            <Snackbar
               width="460px"
               height="155px"
               open={dispatch(uiSlicesSlicesActions.uiApplications())}
               severity=""
               handleClose={() => onCloseSnackbar()}
               message={acceptMessage.message}
               icon={<IconAccept />}
            />
         )}
         <Modal
            open={isModal}
            variant="mini"
            width="523px"
            height="247px"
            overflow="none"
            onClose={(e) => onCloseRejectModal(e)}
         >
            <RejectRequest id={id} onClose={(e) => onCloseRejectModal(e)} />
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
   border: ${(props) => (!props.primary ? '0.5px solid #ff4c00' : '')};
   background: ${(props) =>
      !props.primary ? 'rgba(255, 76, 0, 0.08)' : '#ededed'};
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
