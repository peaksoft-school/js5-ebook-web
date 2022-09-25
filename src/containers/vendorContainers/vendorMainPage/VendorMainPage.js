import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import myHearticon from '../../../assets/icons/mainEdite/myHearticon.svg'
import UpdateBooks from './UpdateBooks'
import Button from '../../../Components/UI/Button/Button'
import HeaderMainPage from './HeaderMainPage'
import { getMainBooks } from '../../../store/createActions/vendorMainPagesActions'
import {
   BooksContainer,
   BookSHeader,
   BooksWrapper,
   ContainerDiv,
   CopyLink,
   DateSpan,
   FooterDiv,
   HeaderText,
   ImageBlock,
   Img,
   ImgFavorite,
   MeatBallsDiv,
   NameBook,
   Price,
   SelectBooksDiv,
   Span,
   WrapperDiv,
} from './VendorMainPageStyle'
import SelectInput from '../vendorBookMainPage/SelectInput'
import NotFound from './NotFound'
import { setGenres } from '../../../store/slices/globalSlices'

const VendorMainPage = () => {
   const { vendorBooks } = useSelector((state) => state.vendorMainPage)
   const { totalElements } = useSelector((state) => state.vendorMainPage)
   const dispatch = useDispatch()
   const vendorId = useSelector((store) => store.auth.user.id)
   const { snackbarStatus, snackbarMessage } = useSelector(
      (store) => store.snackbar
   )

   const bookType = [
      { name: 'Все', id: 'ALL' },
      { name: 'В избранном', id: 'FAVORITES' },
      { name: 'В корзине', id: 'IN_THE_BASKET' },
      { name: 'Проданы', id: 'SOLD_OUT' },
      { name: 'Со скидками', id: 'WITH_DISCOUNTS' },
      { name: 'В обработке', id: 'IN_PROCESSING' },
      { name: 'Отклоненные', id: 'REJECTED' },
   ]

   const moreProducts = 12
   const [next, setNext] = useState(moreProducts)
   const handleMoreImage = () => {
      setNext(next + moreProducts)
   }

   const [selectId, setSelectId] = useState('ALL')
   const clickSelectBook = (name, id) => {
      setSelectId(id)
   }
   const backHome = () => {
      setNext(next - moreProducts)
   }

   useEffect(() => {
      dispatch(setGenres())
   }, [])

   useEffect(() => {
      dispatch(getMainBooks(selectId, next, vendorId))
   }, [selectId, next, snackbarMessage])

   return (
      <WrapperDiv>
         <HeaderMainPage />
         <HeaderText>
            <Span>Всего {totalElements} книг</Span>
            <SelectBooksDiv>
               <SelectInput
                  genres={bookType}
                  onClick={clickSelectBook}
                  from={bookType[0]}
               />
            </SelectBooksDiv>
         </HeaderText>
         <hr />
         {vendorBooks.length === 0 && (
            <DontBooks>You dont have books !</DontBooks>
         )}
         {vendorBooks.length === 0 && snackbarStatus && (
            <NotFoundPage>
               <NotFound />
            </NotFoundPage>
         )}
         <ContainerDiv>
            {vendorBooks
               ? vendorBooks.map((book) => (
                    <Books
                       key={book.id}
                       reject={book.bookStatus === 'REJECTED'}
                       primary={book.bookStatus === 'IN_PROCESSING'}
                       accepted={book.bookStatus === 'ACCEPTED'}
                    >
                       <BooksContainer>
                          <BooksWrapper>
                             <BookSHeader>
                                <ImgFavorite>
                                   <img src={myHearticon} alt="" /> (
                                   {book.favorite})
                                </ImgFavorite>
                                <span>В корзине ({book.basket})</span>
                             </BookSHeader>
                             <CopyLink to={`/main/${book.id}`}>
                                <ImageBlock>
                                   <Img src={book.mainImage} />
                                </ImageBlock>
                                <div>
                                   <NameBook>{book.name}</NameBook>
                                   <FooterDiv>
                                      <DateSpan>
                                         {book.dateOfRegistration}
                                      </DateSpan>
                                      <Price>{book.price}сом</Price>
                                   </FooterDiv>
                                </div>
                             </CopyLink>
                          </BooksWrapper>
                          <MeatBallsDiv>
                             <UpdateBooks id={book.id} />
                          </MeatBallsDiv>
                       </BooksContainer>
                    </Books>
                 ))
               : ''}
         </ContainerDiv>
         {next < totalElements && (
            <Button
               colorhover="white"
               fullWidth
               variant="universal"
               border="1px solid grey"
               color="grey"
               onClick={handleMoreImage}
            >
               Смотреть больше
            </Button>
         )}
         {next > 12 && (
            <Button
               colorhover="white"
               fullWidth
               variant="universal"
               border="1px solid grey"
               color="white"
               margintop="16px"
               background="black"
               onClick={backHome}
            >
               Свернуть
            </Button>
         )}
      </WrapperDiv>
   )
}
export default VendorMainPage

const Books = styled('div')`
   border: ${(props) => (props.primary ? '1px solid #F34901' : '')};
   background-color: ${(props) =>
      props.primary ? 'rgba(243, 73, 1, 0.08)' : ''};

   background-color: ${(props) =>
      props.reject ? 'rgba(220, 220, 220, 0.61)' : ''};
   opacity: ${(props) => (props.reject ? '0.5' : '')};

   background-color: ${(props) => (props.accepted ? '#EDEDED' : '')};
   border: ${(props) => (props.accepted ? 'none' : '')};
`
const NotFoundPage = styled('div')`
   width: 800px;
   /* height: 600px; */
   margin: auto;
`
const DontBooks = styled('h2')`
   color: red;
   text-align: center;
`
