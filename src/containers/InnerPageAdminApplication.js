import styled from 'styled-components'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../Components/UI/Button/Button'
import Modal from '../Components/UI/Modal'
import { books } from './books'
import { RejectRequest } from '../Components/admin-applications/RejectRequest'
import AcceptRequest from '../Components/admin-applications/AcceptRequest'
import { TabInnerPage } from './TabInnerPage'
import About from './About'
import BookFragment from './BookFragment'
// import { ReactComponent as Book } from '../assets/images/book.svg'

import Breadcrumbs from '../Components/UI/breadCrumbs/Breadcrumbs'

export const InnerPageAdminApplication = () => {
   const { id } = useParams()
   const selectedItem = books.find((item) => item.id === id)
   console.log(id)

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
      // name: 'hhh',
      [id]: selectedItem.name,
   }

   return (
      <>
         <Breadcrumbs translate={pathTranslate} />
         <StyledMain>
            <StyledBookImageCont>
               <StyledBookImage src={selectedItem.image} />
               <StyledBookImage2>
                  {selectedItem.image2 && (
                     <img src={selectedItem.image2} alt="book" />
                  )}
               </StyledBookImage2>
            </StyledBookImageCont>
            <div>
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
                     width="224px"
                  >
                     {' '}
                     <Modal
                        open={isModal}
                        variant="mini"
                        width="523px"
                        height="247px"
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
                     width="224px"
                  >
                     Принять
                  </Button>
                  <Modal
                     open={toAccept}
                     variant="mini"
                     width="460px"
                     height="155px"
                     onClose={() => acceptHandler()}
                  >
                     <AcceptRequest name={selectedItem.name} />
                  </Modal>
               </StyledBtnCont>
            </div>
            <TabInnerPage about={<About />} bookFragment={<BookFragment />} />
            <FragmentDiv>
               {selectedItem.image3 && (
                  <img src={selectedItem.image3} alt="book" />
               )}
            </FragmentDiv>
         </StyledMain>
      </>
   )
}

const StyledBookImage2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   & img {
      width: 100%;
      margin: 0px 0px 20px 20px;
   }
`
const FragmentDiv = styled('div')`
   margin-top: -49px;
`
const StyledBookName = styled.h3`
   width: 504px;
   height: 36px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 28px;
   line-height: 130%;
`
const StyledInfoText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
`
const StyledInfoTitle = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
`
const StyledBookImage = styled.img`
   width: 357px;
   margin-bottom: 185px;
`
const StyledMain = styled.div`
   display: flex;
   justify-content: space-between;
   width: 1121px;
   flex-wrap: wrap;
   padding-top: 72px;
`
const StyledInfo = styled.div`
   display: flex;
   justify-content: space-between;
   width: 401px;
   margin-bottom: 76px;
`
const StyledBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
   width: 468px;
`

const StyledPrice = styled.p`
   width: 40px;
   height: 19px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
   color: #f34901;
`
const StyledBookImageCont = styled.div`
   display: flex;
   width: 531px;
   /* height: 571px; */
`
