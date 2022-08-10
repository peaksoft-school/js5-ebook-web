import styled from '@emotion/styled'
// import { useState } from 'react'
// import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from '../../Components/UI/Button/Button'
// import Modal from '../Modal'
import About from './About'
import BookFragment from './BookFragment'
// import likeIcon from '../../assets/icons/like.png'
// import warningIcon from '../../assets/icons/warning.svg'
// import plusIcon from '../../assets/icons/plus.svg'
import { books } from './books'
import Breadcrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'
// import Breadcrumbs from '../../Components/UI/Breadcrumbs/Breadcrumbs'
import { TabInnerPage } from './TabInnerPage'
// import InputText from '../Inputs/InputText'

export const UserInnerPage = () => {
   // const [books, setBooks] = useState(null)
   // const isvalid = useSelector((state) => state.addbook.bookContainer)
   // console.log(isvalid)
   const { bookId } = useParams()
   const selectedItem = books.find((item) => item.id === bookId)

   // const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   // const handleOpenDeleteModal = () => setIsOpenDeleteModal(true)
   // // const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)

   // const [isOpenPromoModal, setIsOpenPromoModal] = useState(false)
   // const handleOpenPromoModal = () => setIsOpenPromoModal(true)
   // const handleClosePromoModal = () => setIsOpenPromoModal(false)

   const pathTranslate = {
      books: 'Главная',
      [bookId]: selectedItem.name,
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
               <StyledAmountBlock>
                  В корзине({selectedItem.id})
               </StyledAmountBlock>
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
                     variant="universal"
                     color="#f34901"
                     border="1px solid"
                     background="none"
                     width="224px"
                  >
                     В избранное
                  </Button>
                  <Button width="224px">Добавить в корзину</Button>
               </StyledBtnCont>
            </div>
            <TabInnerPage about={<About />} bookFragment={<BookFragment />} />
            <div>
               {selectedItem.image3 && (
                  <img src={selectedItem.image3} alt="book" />
               )}
            </div>
         </StyledMain>
      </>
   )
}

const StyledAmountBlock = styled.p`
   display: flex;
   align-items: center;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
   & :nth-child(1) {
      margin-right: 9px;
   }
`
const StyledBookImage2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   & img {
      width: 100%;
      margin: 0px 0px 20px 20px;
   }
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
   justify-content: space-around;
   /* width: 1121px; */
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
   border: 1px solid red;
`
