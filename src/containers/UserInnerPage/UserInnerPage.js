import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from '../../Components/UI/Button/Button'
import About from './About'
import BookFragment from './BookFragment'

import Breadcrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'
import { TabInnerPage } from './TabInnerPage'
import Message from '../../Components/UI/Message/Message'
import New from '../../assets/icons/UserInnerPage/New.png'
import { getBook } from '../../store/slices/userInnerPageSlices'
import AudioListener from '../../Components/UI/AudioListener'

const DataValues = [
   { text: 'Здравствуйте', id: '1' },
   { text: 'Хочу купить!', id: '2' },
   { text: 'Я заинтересован', id: '3' },
   { text: 'Торг возможен?', id: '4' },
]

export const UserInnerPage = () => {
   // const [text, setText] = useState('')
   const { bookId } = useParams()
   const { book } = useSelector((store) => store.userBook)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getBook(bookId))
      window.scrollTo(0, 0)
   }, [])
   const sendText = () => {
      // console.log(text)
   }
   const saveValue = () => {
      // setText(e
   }

   const pathTranslate = {
      main: 'Главная',
      catalog: 'Каталог',
      [bookId]: book?.bookName,
   }

   return (
      <>
         <BreadcrumbsBlock>
            {book && <Breadcrumbs translate={pathTranslate} />}
         </BreadcrumbsBlock>
         <StyledMain>
            <StyledContainer>
               <StyledBookImageCont>
                  <ImageBlock>
                     <Image src={book?.mainImage} />
                  </ImageBlock>
                  <StyledBookImage2>
                     {book?.secondImage && (
                        <Image src={book?.secondImage} alt="book" />
                     )}
                  </StyledBookImage2>
               </StyledBookImageCont>
               {book?.new ? <ImageStyled src={New} alt="icons" /> : ''}
               <div>
                  <StyledBookName>{book?.bookName}</StyledBookName>
                  <StyledInfo>
                     <div>
                        <StyledInfoTitle primary>
                           <StyledPrice>{book?.price}</StyledPrice>
                        </StyledInfoTitle>
                        <StyledInfoTitle>Автор</StyledInfoTitle>
                        <StyledInfoTitle>Жанр</StyledInfoTitle>
                        <StyledInfoTitle>Язык</StyledInfoTitle>
                        {book?.bookType !== 'AUDIO_BOOK' && (
                           <StyledInfoTitle>Издательство</StyledInfoTitle>
                        )}
                        <StyledInfoTitle>Год выпуска</StyledInfoTitle>
                        {book?.bookType === 'AUDIO_BOOK' && (
                           <StyledInfoTitle>Длительность</StyledInfoTitle>
                        )}
                        {book?.bookType !== 'AUDIO_BOOK' && (
                           <StyledInfoTitle>Обьем</StyledInfoTitle>
                        )}
                     </div>
                     <DivBlockStyled>
                        <StyledInfoText primary>
                           <DivBlock>
                              {book?.bookType === 'AUDIO_BOOK' &&
                                 book.audioBook && (
                                    <AudioListener url={book.audioBook} />
                                 )}
                           </DivBlock>
                        </StyledInfoText>
                        <StyledInfoText>{book?.author}</StyledInfoText>
                        <StyledInfoText>{book?.genre}</StyledInfoText>
                        <StyledInfoText>{book?.language}</StyledInfoText>
                        {book?.bookType !== 'AUDIO_BOOK' && (
                           <StyledInfoText>
                              {book?.publishingHouse}
                           </StyledInfoText>
                        )}
                        <StyledInfoText>{book?.yearOfIssue}</StyledInfoText>
                        {book?.bookType === 'AUDIO_BOOK' ? (
                           <StyledInfoText>
                              {book?.duration[0]} ч. {book?.duration[1]} мин.{' '}
                              {book?.duration[2]} сек.
                           </StyledInfoText>
                        ) : (
                           <StyledInfoText>{book?.pageSize}</StyledInfoText>
                        )}
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
               <StyleThirdImage>
                  {book?.thirdImage && (
                     <Image src={book?.thirdImage} alt="book" />
                  )}
               </StyleThirdImage>
            </StyledimageThirdImage>
         </StyledMain>
      </>
   )
}

const BreadcrumbsBlock = styled('div')`
   padding-top: 20px;
`

const ImageBlock = styled('div')`
   width: 357px;
   height: 571px;
   margin-right: 20px;
   overflow: hidden;
`
const Image = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

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
   overflow: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 201px;
   height: 321px;
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
   padding: ${(props) => (props.primary ? '10px 0' : '0')};
`
const StyledInfoTitle = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
   padding: ${(props) => (props.primary ? '0 0 10px 0' : '0')};
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
`
const DivStyledMessage = styled.div`
   margin-top: 30px;
`
const StyleThirdImage = styled.div`
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
