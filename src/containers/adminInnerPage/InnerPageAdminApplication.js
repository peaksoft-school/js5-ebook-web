import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Components/UI/Button/Button'
import Modal from '../../Components/UI/Modal'
// import { books } from '../../../utils/constants/books'
import { RejectRequest } from './RejectRequest'
import AcceptRequest from './AcceptRequest'
import { TabInnerPage } from '.'
import About from './About'
import BookFragment from './BookFragment'
import Breadcrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'
import applicationInnerPageAction from '../../../store/slices/applicationInnerPagesSlices'
import Snackbar from '../../../Components/UI/Snacbar'

export const InnerPageAdminApplication = () => {
   const selectedItem = useSelector((state) => state.applicationsInnerPage.data)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(applicationInnerPageAction())
   }, [])
   const { id } = useParams()
   // const selectedItem = data.find((item) => item.id === id)

   const [rejectAplication, setRejectAplication] = useState(false)
   const [isModal, setIsModal] = useState(false)
   const [toAccept, setToAccept] = useState(false)
   const [message, setMessage] = useState('')
   const [open, setOpen] = useState(true)

   function acceptHandler() {
      setToAccept(!toAccept)

      // POST
   }

   function rejectModal() {
      setRejectAplication(!rejectAplication)
      setIsModal(!isModal)
   }

   function onCloseRejectModal() {
      setIsModal(!isModal)
      setOpen(open)
      setMessage()
   }
   // function openSnackbar() {
   //    setOpen(open)
   // }
   // function onCloseSnackbar() {
   //    setOpen(!open)
   // }
   const pathTranslate = {
      request: 'Заявки',
      [id]: selectedItem.bookName,
   }

   return (
      <>
         <Breadcrumbs translate={pathTranslate} />
         <StyledMain>
            <ImageDiv>
               <StyledBookImageCont>
                  <StyledBookImage src={selectedItem.mainImage} />
                  <StyledBookImage2>
                     {selectedItem.secondImage && (
                        <img src={selectedItem.secondImage} alt="book" />
                     )}
                  </StyledBookImage2>
               </StyledBookImageCont>
               <InfoContainer>
                  <StyledBookName>{selectedItem.bookName}</StyledBookName>
                  <div>
                     <StyledPrice>{selectedItem.price}</StyledPrice>
                  </div>
                  <StyledInfo>
                     <div>
                        <StyledInfoTitle>Автор</StyledInfoTitle>
                        <StyledInfoTitle>Жанр</StyledInfoTitle>
                        <StyledInfoTitle>Язык</StyledInfoTitle>
                        <StyledInfoTitle>Издательство</StyledInfoTitle>
                        <StyledInfoTitle>Год выпуска</StyledInfoTitle>
                        <StyledInfoTitle>Обьем</StyledInfoTitle>
                     </div>
                     <div>
                        <StyledInfoText>{selectedItem.author}</StyledInfoText>
                        <StyledInfoText>{selectedItem.genre}</StyledInfoText>
                        <StyledInfoText>{selectedItem.language}</StyledInfoText>
                        <StyledInfoText>
                           {selectedItem.publishingHouse}
                        </StyledInfoText>
                        <StyledInfoText>
                           {selectedItem.yearOfIssue}
                        </StyledInfoText>
                        <StyledInfoText>{selectedItem.volume}</StyledInfoText>
                     </div>
                  </StyledInfo>

                  <StyledBtnCont>
                     <Button
                        onClick={() => rejectModal()}
                        variant="universal"
                        color="#f34901"
                        border="1px solid"
                        background="none"
                        width="195px"
                     >
                        {' '}
                        <Modal
                           open={isModal}
                           variant="mini"
                           width="523px"
                           height="247px"
                           overflow="none"
                           onClose={() => onCloseRejectModal()}
                        >
                           <RejectRequest
                              onClose={() => onCloseRejectModal()}
                              setMessage={() => setMessage()}
                           />
                        </Modal>
                        Отклонить
                     </Button>

                     <Button
                        onClick={() => acceptHandler()}
                        variant="universal"
                        border="1px solid"
                        background="#f34901"
                        width="195px"
                     >
                        Принять
                     </Button>
                     <Modal
                        open={toAccept}
                        variant="mini"
                        width="460px"
                        height="155px"
                        overflow="none"
                        onClose={() => acceptHandler()}
                     >
                        <AcceptRequest name={selectedItem.bookName} />
                     </Modal>
                  </StyledBtnCont>
               </InfoContainer>
            </ImageDiv>
            <FragmentRequest>
               <TabInnerPage
                  about={<About about={selectedItem.description} />}
                  bookFragment={
                     <BookFragment
                        audioBookFragment={selectedItem.audioBookFragment}
                     />
                  }
               />
               <FragmentDiv>
                  {selectedItem.thirdImage && (
                     <img src={selectedItem.thirdImage} alt="book" />
                  )}
               </FragmentDiv>
            </FragmentRequest>
            <Snackbar
               severity=""
               open={() => onCloseRejectModal()}
               message={message}
               // onClose={() => onCloseSnackbar()}
            >
               {message}
            </Snackbar>
         </StyledMain>
      </>
   )
}

const InfoContainer = styled('div')`
   padding-top: 50px;
`
const FragmentRequest = styled('div')`
   display: flex;
   justify-content: space-between;
`
const ImageDiv = styled('div')`
   display: flex;
   justify-content: flex-start;
`
const StyledBookImage2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   & img {
      width: 170px;
      margin: 0px 0px 20px 20px;
   }
`
const FragmentDiv = styled('div')`
   & img {
      width: 320px;
      height: 480px;
   }
   margin-top: -49px;
`
const StyledBookName = styled.h3`
   height: 36px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 130%;
`
const StyledInfoText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 130%;
   color: #222222;
`
const StyledInfoTitle = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 12px;
   line-height: 130%;
   color: #222222;
`
const StyledBookImage = styled.img`
   width: 315px;
   margin-bottom: 185px;
   margin-right: -8px;
`
const StyledMain = styled.div`
   padding-top: 72px;
`
const StyledInfo = styled.div`
   display: flex;
   justify-content: space-between;
   width: 340px;
   height: 160px;
   margin-bottom: 50px;
`
const StyledBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 10px;
   width: 400px;
`

const StyledPrice = styled.p`
   width: 40px;
   height: 19px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 120%;
   color: #f34901;
`
const StyledBookImageCont = styled.div`
   display: flex;
   justify-content: space-between;
   width: 531px;
   margin-right: 20px;
`
