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
// import { getUserInnerPageBook } from '../../store/createActions/vendorMainPagesActions'
import New from '../../assets/icons/UserInnerPage/New.png'
import { getBook } from '../../store/slices/userInnerPageSlices'
import Spinner from '../../Components/UI/Spinner'

const DataValues = [
   { text: 'Здравствуйте', id: '1' },
   { text: 'Хочу купить!', id: '2' },
   { text: 'Я заинтересован', id: '3' },
   { text: 'Торг возможен?', id: '4' },
]

export const UserInnerPage = () => {
   // const [text, setText] = useState('')
   const { bookId } = useParams()
   const { book, status } = useSelector((store) => store.userBook)
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
         {status === 'pending' ? (
            <Spinner variant="two" />
         ) : (
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
                     <div>
                        <StyledPrice>{book?.price}</StyledPrice>
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
                           <StyledInfoText>{book?.author}</StyledInfoText>
                           <StyledInfoText>{book?.genre}</StyledInfoText>
                           <StyledInfoText>{book?.language}</StyledInfoText>
                           <StyledInfoText>
                              {book?.publishingHouse}
                           </StyledInfoText>
                           <StyledInfoText>{book?.yearOfIssue}</StyledInfoText>
                           <StyledInfoText>{book?.duration}</StyledInfoText>
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
                  <StyleThirdImage>
                     {book?.thirdImage && (
                        <Image src={book?.thirdImage} alt="book" />
                     )}
                  </StyleThirdImage>
               </StyledimageThirdImage>
            </StyledMain>
         )}
      </>
   )
}

const BreadcrumbsBlock = styled('div')`
   /* border: 1px solid red; */
   padding-top: 20px;
`

const ImageBlock = styled('div')`
   /* border: 1px solid red; */
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
   /* border: 1px solid red; */
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
`
const StyledInfoTitle = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
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
   /* border: 1px solid red; */
   display: flex;
   /* width: 531px; */
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
   /* border: 1px solid red; */
   width: 206px;
   height: 206px;
   border-radius: 20px;
   margin-top: 290px;
   margin-left: -48%;
`
