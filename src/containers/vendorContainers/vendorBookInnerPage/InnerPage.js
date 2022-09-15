import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import Button from '../../../Components/UI/Button/Button'
import plusIcon from '../../../assets/icons/plus.svg'
import Breadcrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'
import BookInfo from './BookInfo'
import Promocode from './Promocode'
import {
   deleteModal,
   deleteVendorBook,
   getVendorBookInnerPage,
} from '../../../store/vendorBookInnerPageActions'

export const InnerPage = () => {
   const { book, deleteBook } = useSelector(
      (state) => state.vendorBookInnerPage
   )
   console.log(deleteBook)
   const { bookId } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      dispatch(getVendorBookInnerPage(bookId))
   }, [])

   useEffect(() => {
      if (deleteBook) {
         booksCardNavHandler()
         navigate('/')
         dispatch(deleteModal())
      }
   }, [deleteBook])

   const deleteBookHandler = () => {
      dispatch(deleteVendorBook(bookId))
   }

   const pathTranslate = {
      books: 'Главная',
      [bookId]: book.bookName,
   }

   const addBookNavHandler = () => {
      navigate('/addBook')
   }

   const booksCardNavHandler = () => {
      navigate('/')
   }

   return (
      <>
         <StyledBtnBlock>
            <Promocode />
            <Button
               width="210px"
               height="42px"
               padding="10px 24px"
               onClick={addBookNavHandler}
            >
               <img src={plusIcon} alt="icon" />
               Добавить книгу
            </Button>
         </StyledBtnBlock>
         <Breadcrumbs translate={pathTranslate} />
         {book && (
            <BookInfo
               book={book}
               onDelete={deleteBookHandler}
               bookId={bookId}
            />
         )}
      </>
   )
}

export const StyledNavLink = styled(NavLink)`
   color: #c4c4c4;
   width: 72px;
   height: 23px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 130%;
   text-decoration: none;
   &.${(props) => props.activeClassName} {
      color: #f34901;
   }
`
export const StyledLink = styled(Link)`
   color: white;
   text-decoration: none;
`
const StyledBtnBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 43px;
`
