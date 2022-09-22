import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
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
import AudioListener from '../../Components/UI/AudioListener'

const DataValues = [
   { text: 'Здравствуйте', id: '1' },
   { text: 'Хочу купить!', id: '2' },
   { text: 'Я заинтересован', id: '3' },
   { text: 'Торг возможен?', id: '4' },
]

const book = {
   bookType: 'AUDIO_BOOK',
   bookId: 21,
   bookName: 'qwert',
   genre: 'Общество',
   price: 5768,
   author: 'rethy',
   publishingHouse: null,
   description: 'efregthyjuy',
   language: null,
   yearOfIssue: 2022,
   discount: 0,
   bestseller: false,
   mainImage:
      'https://ebookjava5.s3.eu-central-1.amazonaws.com/1663767900767С заливкой.png',
   secondImage: null,
   thirdImage: null,
   audioBookFragment: null,
   audioBook:
      'https://ebookjava5.s3.eu-central-1.amazonaws.com/1663767902406gs-cd-track2.mp3',
   duration: [2, 2, 2],
}

export const UserInnerPage = () => {
   const [text, setText] = useState('')
   const { bookId } = useParams()
   // const book = useSelector((state) => state.addbook.getUserInnerBook)
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
                  {/* <AudioListenerStyled>
                     
                  </AudioListenerStyled> */}
                  <StyledInfo>
                     <div>
                        <StyledPrice>{book.price}</StyledPrice>
                        <StyledInfoTitle>Автор</StyledInfoTitle>
                        <StyledInfoTitle>Жанр</StyledInfoTitle>
                        <StyledInfoTitle>Язык</StyledInfoTitle>
                        <StyledInfoTitle>Издательство</StyledInfoTitle>
                        <StyledInfoTitle>Год выпуска</StyledInfoTitle>
                        <StyledInfoTitle>Обьем</StyledInfoTitle>
                     </div>
                     <DivBlockStyled>
                        <StyledInfoText>
                           <DivBlock>
                              {book.bookType !== 'PAPER_BOOK' && (
                                 <AudioListener url={book.audioBook} />
                              )}
                              {console.log(book.audioBook)}
                           </DivBlock>
                        </StyledInfoText>
                        <StyledInfoText>{book.author}</StyledInfoText>
                        <StyledInfoText>{book.genre}</StyledInfoText>
                        <StyledInfoText>{book.language}</StyledInfoText>
                        <StyledInfoText>{book.publishingHouse}</StyledInfoText>
                        <StyledInfoText>{book.yearOfIssue}</StyledInfoText>
                        <StyledInfoText>{book.duration}</StyledInfoText>
                        {console.log(book.duration)}
                     </DivBlockStyled>
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
   width: 545px;
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
const DivBlockStyled = styled('div')`
   width: 300px;
`
const DivBlock = styled.div`
   height: 25px;
`
