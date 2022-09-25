/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../../../Components/UI/Modal'
import Button from '../../../Components/UI/Button/Button'
import likeIcon from '../../../assets/icons/like.png'
import newIcon from '../../../assets/icons/new.svg'
import AudioListener from '../../../Components/UI/AudioListener'
import AboutBook from './AboutBook'
import BookFragment from './BookFragment'
import { TabInnerPage } from './TabInnerPage'
import { deleteModal } from '../../../store/vendorBookInnerPageActions'
import {
   getMainBooksDelete,
   getMainBooksWithId,
} from '../../../store/createActions/vendorMainPagesActions'

const BookInfo = ({ book }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { deleteBook } = useSelector((state) => state.vendorBookInnerPage)

   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   const handleOpenDeleteModal = () => {
      setIsOpenDeleteModal(true)
   }
   useEffect(() => {
      navigate('')
      dispatch(deleteModal())
   }, [!deleteBook])

   const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)
   const newBookIcon =
      book.new === true ? <StyledNewIcon src={newIcon} alt="icon" /> : ''

   const editBook = () => {
      dispatch(getMainBooksWithId(book.bookId, navigate))
   }

   const onDelete = (id) => {
      setIsOpenDeleteModal(false)
      dispatch(getMainBooksDelete(id, navigate))
   }
   return (
      <>
         <StyledMain>
            <StyledBookImageCont>
               <MainImgwrap>
                  <StyledBookImage src={book.mainImage} />
               </MainImgwrap>
               {newBookIcon}
               <StyledBookImage2>
                  {book.secondImage && (
                     <img src={book.secondImage} alt="book" />
                  )}
               </StyledBookImage2>
            </StyledBookImageCont>
            <div>
               <StyledAmountBlock>В корзине({book.basket})</StyledAmountBlock>
               <StyledAmountBlock>
                  <img src={likeIcon} alt="icon" /> ({book.likes})
               </StyledAmountBlock>
               <StyledBookName>{book.bookName}</StyledBookName>
               <PriceAudio>
                  <StyledPrice>{book.price} с</StyledPrice>
                  <DivBlock>
                     {book?.bookType === 'AUDIO_BOOK' && book.audioBook && (
                        <AudioListener url={book.audioBook} />
                     )}
                  </DivBlock>
               </PriceAudio>
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
                     colorhover="white"
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
                        <Button
                           variant="default"
                           onClick={() => onDelete(book.bookId)}
                        >
                           Удалить
                        </Button>
                     </StyledModalBtnCont>
                  </Modal>
                  <Button width="224px" onClick={editBook}>
                     Редактировать
                  </Button>
               </StyledBtnCont>
            </div>
         </StyledMain>

         <StyledTabBlock>
            <TabInnerPage
               about={<AboutBook aboutBook={book.description} />}
               bookFragment={<BookFragment fragment={book.fragment} />}
            />
            <ThirdImgwrap>
               {book.thirdImage && <img src={book.thirdImage} alt="book" />}
            </ThirdImgwrap>
         </StyledTabBlock>
      </>
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
   height: 321px;
   width: 201px;
   margin-left: 20px;

   & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
const StyledTabBlock = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   padding-bottom: 20px;
   margin-top: 19vh;
   & img {
      width: 385px;
   }
`

const DivBlock = styled('div')``
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
   /* width: 357px; */
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
const StyledNewIcon = styled.img`
   position: absolute;
   top: 75%;
   left: 26%;
`
const MainImgwrap = styled('div')`
   width: 357px;
   /* height: 571px; */
   & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`
const ThirdImgwrap = styled('div')`
   width: 385px;
   height: 614px;
   /* margin-top: 19vh; */
   & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`
const PriceAudio = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 560px;
   align-items: center;
`
