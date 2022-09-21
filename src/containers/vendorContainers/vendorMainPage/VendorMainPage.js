import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import myHearticon from '../../../assets/icons/mainEdite/myHearticon.svg'
import UpdateBooks from './UpdateBooks'
import Button from '../../../Components/UI/Button/Button'
import HeaderMainPage from './HeaderMainPage'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
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
import Spinner from '../../../Components/UI/Spinner'
import snackbarAction from '../../../store/slices/snackbarSlice'
import NotFound from './NotFound'

const VendorMainPage = () => {
   const { vendorBooks } = useSelector((state) => state.vendorMainPage)
   const { totalElements } = useSelector((state) => state.vendorMainPage)
   const dispatch = useDispatch()
   const { snackbarMessage, snackbarStatus } = useSelector(
      (store) => store.snackbar
   )
   const vendorId = useSelector((store) => store.auth.user.id)

   const bookType = [
      { name: 'Все', id: 1, text: 'ALL' },
      { name: 'В избранном', id: 2, text: 'FAVORITES' },
      { name: 'В корзине', id: 3, text: 'IN_THE_BASKET' },
      { name: 'Проданы', id: 4, text: 'SOLD_OUT' },
      { name: 'Со скидками', id: 5, text: 'WITH_DISCOUNTS' },
      { name: 'В обработке', id: 6, text: 'IN_PROCESSING' },
      { name: 'Отклоненные', id: 7, text: 'REJECTED' },
   ]

   const moreProducts = 12
   const [next, setNext] = useState(moreProducts)
   const handleMoreImage = () => {
      setNext(next + moreProducts)
   }
   const [selectId, setSelectId] = useState()
   const clickSelectBook = (data, _, typeData) => {
      setSelectId(typeData)
   }
   const backHome = () => {
      setNext(next - moreProducts)
   }

   // console.log(getById)

   useEffect(() => {
      dispatch(getMainBooks(selectId, next, vendorId))
   }, [selectId, next, snackbarMessage])

   const deleteSnackbar = () => {
      dispatch(snackbarAction.notSnackbar())
   }

   return (
      <WrapperDiv>
         <GetSnackbar
            open={snackbarMessage}
            message={snackbarMessage}
            variant={
               (snackbarStatus === 'error' && 'error') ||
               (snackbarStatus === 'success' && 'success')
            }
            width="400px"
            handleClose={deleteSnackbar}
         />
         {snackbarStatus === 'pending' && <Spinner />}
         <HeaderMainPage />
         <HeaderText>
            <Span>Всего {totalElements} книг</Span>
            <SelectBooksDiv>
               <SelectInput
                  strelLog="strel"
                  genres={bookType}
                  onClick={clickSelectBook}
               />
            </SelectBooksDiv>
         </HeaderText>
         <hr />
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
   margin: auto;
`
