import styled from 'styled-components'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../../Components/UI/Button/Button'
import Modal from '../../../Components/UI/Modal'
import { books } from '../../../utils/constants/books'
import { RejectRequest } from '../../../Components/admin-applications/RejectRequest'
import AcceptRequest from '../../../Components/admin-applications/AcceptRequest'
import { TabInnerPage } from '../../TabInnerPage'
import About from '../../../Components/admin-applications/About'
import BookFragment from '../../../Components/admin-applications/BookFragment'

import Breadcrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'

export const InnerPageAdminApplication = () => {
   const { id } = useParams()
   const selectedItem = books.find((item) => item.id === id)

   const [rejectAplication, setRejectAplication] = useState(false)
   const [isModal, setIsModal] = useState(false)
   const [toAccept, setToAccept] = useState(false)

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
   }
   const pathTranslate = {
      request: 'Заявки',
      [id]: selectedItem.name,
   }

   return (
      <>
         <Breadcrumbs translate={pathTranslate} />
         <StyledMain>
            <ImageDiv>
               <StyledBookImageCont>
                  <StyledBookImage src={selectedItem.image} />
                  <StyledBookImage2>
                     {selectedItem.image2 && (
                        <img src={selectedItem.image2} alt="book" />
                     )}
                  </StyledBookImage2>
               </StyledBookImageCont>
               <InfoContainer>
                  <StyledBookName>{selectedItem.name}</StyledBookName>
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
                        <StyledInfoText>{selectedItem.year}</StyledInfoText>
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
                           <RejectRequest />
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
                        <AcceptRequest name={selectedItem.name} />
                     </Modal>
                  </StyledBtnCont>
               </InfoContainer>
            </ImageDiv>
            <FragmentRequest>
               <TabInnerPage
                  about={<About />}
                  bookFragment={<BookFragment />}
               />
               <FragmentDiv>
                  {selectedItem.image3 && (
                     <img src={selectedItem.image3} alt="book" />
                  )}
               </FragmentDiv>
            </FragmentRequest>
         </StyledMain>
      </>
   )
}

const InfoContainer = styled('div')`
   padding-top: 50px;
   /* height: 430px; */
`
const FragmentRequest = styled('div')`
   display: flex;
   justify-content: space-between;
   /* padding-right: 84px; */
`
const ImageDiv = styled('div')`
   display: flex;
   justify-content: flex-start;
   /* border: 1px solid black; */
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
   /* width: 504px; */
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
   /* border: 1px solid red; */
   /* height: 571px; */
`

// const StyledBookImage2 = styled.div`
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    & img {
//       width: 100%;
//       margin: 0px 0px 20px 20px;
//    }
// `
// const StyledBookName = styled.h3`
//    width: 504px;
//    height: 36px;
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 28px;
//    line-height: 130%;
// `
// const StyledInfoText = styled.p`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 14px;
//    line-height: 130%;
//    color: #222222;
// `
// const StyledInfoTitle = styled.p`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 14px;
//    line-height: 130%;
//    color: #222222;
// `
// const StyledBookImage = styled.img`
//    width: 357px;
//    margin-bottom: 185px;
// `
// const StyledMain = styled.div`
//    display: flex;
//    justify-content: space-between;
//    padding-top: 20px;
// `
// const StyledInfo = styled.div`
//    display: flex;
//    justify-content: space-between;
//    width: 401px;
//    margin-bottom: 76px;
// `
// const StyledBtnCont = styled.div`
//    display: flex;
//    justify-content: space-between;
//    width: 468px;
// `

// const StyledPrice = styled.p`
//    width: 40px;
//    height: 19px;
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 16px;
//    line-height: 120%;
//    color: #f34901;
// `
// const StyledBookImageCont = styled.div`
//    display: flex;
//    width: 531px;
// `
