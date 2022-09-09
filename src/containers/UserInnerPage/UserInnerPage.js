import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from '../../Components/UI/Button/Button'
import About from './About'
import BookFragment from './BookFragment'

import Breadcrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'
import { TabInnerPage } from './TabInnerPage'
import Message from '../../Components/UI/Message/Message'
// import { getUserInnerPageBook } from '../../store/createActions/vendorMainPagesActions'
import New from '../../assets/icons/UserInnerPage/New.png'
import { getMainBooksWithId } from '../../store/createActions/vendorMainPagesActions'

const DataValues = [
   { text: 'Здравствуйте', id: '1' },
   { text: 'Хочу купить!', id: '2' },
   { text: 'Я заинтересован', id: '3' },
   { text: 'Торг возможен?', id: '4' },
]

export const UserInnerPage = () => {
   const [text, setText] = useState('')
   const { bookId } = useParams()
   const book = useSelector((state) => state.addbook.getUserInnerBook)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getMainBooksWithId(bookId))
   }, [])
   const sendText = () => {
      console.log(text)
   }
   const saveValue = (e) => {
      setText(e)
   }

   const pathTranslate = {
      allbooks: 'Главная',
      [bookId]: book.bookName,
   }

   return (
      <>
         <Breadcrumbs translate={pathTranslate} />
         <StyledMain>
            <StyledContainer>
               <StyledBookImageCont>
                  <StyledBookImage src={book.mainImage} />
                  <StyledBookImage2>
                     {book.secondImage && (
                        <img src={book.secondImage} alt="book" />
                     )}
                  </StyledBookImage2>
               </StyledBookImageCont>
               {book.new ? <ImageStyled src={New} alt="icons" /> : ''}
               <div>
                  <StyledBookName>{book.bookName}</StyledBookName>
                  <div>
                     <StyledPrice>{book.price}</StyledPrice>
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
                  <DivStyledMessage>
                     <Message
                        saveText={saveValue}
                        onClick={sendText}
                        spanValues={DataValues}
                     />
                  </DivStyledMessage>
               </div>
            </StyledContainer>

            <StyledimageThirdImage>
               <TabInnerPage
                  about={<About book={book} />}
                  bookFragment={<BookFragment book={book} />}
               />
               <div>
                  {book.thirdImage && (
                     <StyleThirdImage src={book.thirdImage} alt="book" />
                  )}
               </div>
            </StyledimageThirdImage>
         </StyledMain>
      </>
   )
}

const StyledContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`

const StyledimageThirdImage = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 100px;
`

const StyledBookImage2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   & img {
      width: 100%;
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
   margin: 0;
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
   /* margin-bottom: 185px; */
`
const StyledMain = styled.div`
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
`
const DivStyledMessage = styled.div`
   margin-top: 30px;
`
const StyleThirdImage = styled.img`
   width: 443px;
   height: 574px;
   margin-bottom: 109px;
`
const ImageStyled = styled.img`
   width: 206px;
   height: 206px;
   border-radius: 20px;
   margin-top: 250px;
   margin-left: -42%;
`
