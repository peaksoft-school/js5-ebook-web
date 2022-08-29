import styled from '@emotion/styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../UI/Modal'
import Button from '../UI/Button/Button'
import likeIcon from '../../assets/icons/like.png'
import AudioListener from '../UI/AudioListener'

const BookInfo = ({ book, onDelete }) => {
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   const handleOpenDeleteModal = () => setIsOpenDeleteModal(true)
   const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)

   let bookTypeContent = ''

   if (book.bookType === 'AUDIO_BOOK') {
      bookTypeContent = <AudioListener />
   }
   return (
      <StyledMain>
         <StyledBookImageCont>
            <StyledBookImage src={book.mainImage} />
            <StyledBookImage2>
               {book.secondImage && <img src={book.secondImage} alt="book" />}
            </StyledBookImage2>
         </StyledBookImageCont>
         <div>
            <StyledAmountBlock>В корзине({book.basket})</StyledAmountBlock>
            <StyledAmountBlock>
               <img src={likeIcon} alt="icon" />({book.likes}){bookTypeContent}
            </StyledAmountBlock>
            <StyledBookName>{book.bookName}</StyledBookName>
            <div>
               <StyledPrice>{book.price} с</StyledPrice>
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
                  <StyledInfoText>{book.author}</StyledInfoText>
                  <StyledInfoText>{book.genre}</StyledInfoText>
                  <StyledInfoText>{book.language}</StyledInfoText>
                  <StyledInfoText>{book.publishingHouse}</StyledInfoText>
                  <StyledInfoText>{book.yearOfIssue}</StyledInfoText>
                  <StyledInfoText>{book.duration}</StyledInfoText>
               </div>
            </StyledInfo>
            <StyledBtnCont>
               <Button
                  onClick={handleOpenDeleteModal}
                  variant="universal"
                  color="#f34901"
                  border="1px solid"
                  background="none"
                  width="224px"
               >
                  Удалить
               </Button>
               <Modal
                  open={isOpenDeleteModal}
                  onClose={handleCloseDeleteModal}
                  variant="mini"
                  width="460px"
                  height="172px"
                  justifyContent="space-around"
               >
                  <div>
                     <StyledInfoText>
                        Вы уверены, что хотите удалить
                     </StyledInfoText>
                     <StyledInfoTitle>“{book.bookName}” ?</StyledInfoTitle>
                  </div>
                  <StyledModalBtnCont>
                     <Button
                        variant="default"
                        background="white"
                        color="#A3A3A3"
                        onClick={handleCloseDeleteModal}
                     >
                        Отменить
                     </Button>
                     <Button variant="default" onClick={onDelete}>
                        Удалить
                     </Button>
                  </StyledModalBtnCont>
               </Modal>
               <Button width="224px">
                  <StyledLink to="/addBook">Редактировать</StyledLink>
               </Button>
            </StyledBtnCont>
         </div>
      </StyledMain>
   )
}

export default BookInfo

const StyledAmountBlock = styled.p`
   display: flex;
   align-items: center;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
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
   justify-content: space-between;
   padding-top: 20px;
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
const StyledModalBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
   width: 278px;
   height: 42px;
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
`
export const StyledLink = styled(Link)`
   color: white;
   text-decoration: none;
`
