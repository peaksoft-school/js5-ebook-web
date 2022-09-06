import { styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CheckMark } from '../../../assets/icons/MeatBalls/checkmark.svg'
import { ReactComponent as Reject } from '../../../assets/icons/MeatBalls/reject.svg'
import { ReactComponent as IconAccept } from '../../../assets/icons/IconAccept.svg'
import { RejectApplicationModal } from './RejectApplicationModal'
import MeatBalls from '../../../Components/UI/MeatBalls/MeatBalls'
import { acceptApplication } from '../../../store/slices/adminActions/applicationsActions'
import { applicationSlicesActions } from '../../../store/slices/adminSlices/applicationsSlices'
import { uiSlicesSlicesActions } from '../../../store/slices/uiSlices'
import Snackbar from '../../../Components/UI/snackbar/Snackbar'

const ApplicationCard = ({ id, img, date, name, price, enabled }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { acceptMessage } = useSelector((state) => state.applications)
   const isSnackbarOpen = useSelector((state) => state.uiSlice.snackbar)
   const isSnackbarClose = useSelector((state) => state.uiSlice.snackbar)
   const { rejectMessage } = useSelector((state) => state.applications)

   const [showRejectModal, setShowRejectModal] = useState(false)
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

   function acceptModal() {
      dispatch(acceptApplication(id))
   }

   useEffect(() => {
      let timerId = null
      if (acceptMessage) {
         dispatch(uiSlicesSlicesActions.showSnackbar())
         timerId = setTimeout(() => {
            onCloseSnackbar()
            dispatch(applicationSlicesActions.cleanAccept())
         }, 10000)
      }
      return () => {
         clearTimeout(timerId)
      }
   }, [acceptMessage])

   useEffect(() => {
      let time = setTimeout(() => {}, [1])
      if (rejectMessage) {
         dispatch(uiSlicesSlicesActions.showSnackbar())
         time = setTimeout(() => {
            onCloseSnackbar()
            dispatch(applicationSlicesActions.cleanReject())
         }, 3000)
      }
      return () => {
         clearTimeout(time)
      }
   }, [rejectMessage])

   function rejectModal() {
      setShowRejectModal(true)
   }

   function onCloseRejectModal() {
      setShowRejectModal(false)
   }

   function onCloseSnackbar() {
      dispatch(uiSlicesSlicesActions.hideSnackbar())
   }

   const navigateToDetailsPage = () => {
      navigate(`/applications/${id}`)
   }

   return (
      <BookItems primary={enabled} id={id} onClick={navigateToDetailsPage}>
         <MeatBall onClick={(e) => e.stopPropagation()}>
            <MeatBalls options={menuMeatBall} />
         </MeatBall>
         {acceptMessage && (
            <Snackbar
               width="460px"
               height="155px"
               open={isSnackbarOpen}
               handleClose={() => onCloseSnackbar()}
               severity=""
               message={acceptMessage.message}
               icon={<IconAccept />}
            />
         )}

         <RejectApplicationModal
            id={id}
            open={showRejectModal}
            onClose={() => onCloseRejectModal()}
         />

         <Div>
            <Book src={img} alt="photo" />
            <NameBook>{name}</NameBook>

            <PriceDate>
               <Date>{date}</Date>
               <Price>{price}</Price>
            </PriceDate>
         </Div>
         {rejectMessage && (
            <Snackbar
               width="460px"
               height="155px"
               open={isSnackbarClose}
               handleClose={() => onCloseSnackbar()}
               severity=""
               message={rejectMessage.message}
               icon={<IconAccept />}
            />
         )}
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
