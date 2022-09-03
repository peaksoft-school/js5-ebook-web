import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import vendorHeart from '../../../assets/icons/bookCard/heartBook.svg'
import UpdateBooks from './UpdateBooks'
import Button from '../../../Components/UI/Button/Button'
import {
   BooksContainer,
   BooksContainer2,
   BookSHeader,
   BooksWrapper,
   ContainerDiv,
   CopyLink,
   DateSpan,
   FooterDiv,
   HeaderText,
   Img,
   ImgFavorite,
   MeatBallsDiv,
   NameBook,
   Price,
   SelectBooksDiv,
   Span,
   WrapperDiv,
} from './VendorMainPageStyle'
import SelectBooks from '../../Admin/SelectBooks'
import Snackbar from '../../../Components/UI/Snackbar'
import { getMainBooks } from '../../../store/createActions/vendorMainPagesActions'

const VendorMainPage = () => {
   const { vendorBooks } = useSelector((state) => state.vendorMainPage)
   const dispatch = useDispatch()

   const bookType = [
      { name: 'Все', id: 1, text: 'ALL' },
      { name: 'В избранном', id: 2, text: 'FAVORITES' },
      { name: 'В корзине', id: 3, text: 'IN_THE_BASKET' },
      { name: 'Проданы', id: 4, text: 'SOLD_OUT' },
      { name: 'Со скидками', id: 5, text: 'WITH_DISCOUNTS' },
      { name: 'В обработке', id: 6, text: 'IN_THE_PROCESS' },
      { name: 'Отклоненные', id: 7, text: 'REJECTED' },
   ]
   const [selectId, setSelectId] = useState()
   const clickSelectBook = (data, _, typeData) => {
      setSelectId(typeData)
   }

   useEffect(() => {
      dispatch(getMainBooks(selectId))
   }, [selectId])

   const [getBiId, setGetById] = useState()

   return (
      <WrapperDiv>
         <Snackbar
            width="460px"
            message="this page is empty"
            severity="error"
            open={vendorBooks.length === 0}
         />
         <HeaderText>
            <Span>Всего {vendorBooks.length} книг</Span>
            <SelectBooksDiv>
               <SelectBooks genres={bookType} onClick={clickSelectBook} />
            </SelectBooksDiv>
         </HeaderText>
         <hr />
         <ContainerDiv>
            {vendorBooks.map((book) => (
               <BooksContainer2 key={book.id}>
                  <BooksContainer>
                     <BooksWrapper>
                        <BookSHeader>
                           <ImgFavorite>
                              <img src={vendorHeart} alt="" /> ({book.favorite})
                           </ImgFavorite>
                           <span>В корзине ({book.basket})</span>
                        </BookSHeader>
                        <CopyLink key={book.id} to={`/${book.id}`}>
                           <Img src={book.mainImage} />
                           <div>
                              <NameBook>{book.name}</NameBook>
                              <FooterDiv>
                                 <DateSpan>
                                    {book.dateOfRegistration.map((elem) => (
                                       <span key={elem}>{elem}</span>
                                    ))}
                                 </DateSpan>
                                 <Price>{book.price}сом</Price>
                              </FooterDiv>
                           </div>
                        </CopyLink>
                     </BooksWrapper>
                     <MeatBallsDiv onClick={() => setGetById(book.id)}>
                        <UpdateBooks id={getBiId} />
                     </MeatBallsDiv>
                  </BooksContainer>
               </BooksContainer2>
            ))}
         </ContainerDiv>
         <Button
            fullWidth
            variant="universal"
            border="1px solid grey"
            color="grey"
         >
            Смотреть больше
         </Button>
      </WrapperDiv>
   )
}
export default VendorMainPage
