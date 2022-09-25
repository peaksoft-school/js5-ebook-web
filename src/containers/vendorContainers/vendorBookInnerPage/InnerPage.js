import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'
import BookInfo from './BookInfo'
import {
   deleteModal,
   getVendorBookInnerPage,
} from '../../../store/vendorBookInnerPageActions'
import HeaderMainPage from '../vendorMainPage/HeaderMainPage'
import Spinner from '../../../Components/UI/Spinner'

export const InnerPage = () => {
   const { book, deleteBook } = useSelector(
      (state) => state.vendorBookInnerPage
   )
   const { addBookStatus } = useSelector((store) => store.addbook)
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

   const pathTranslate = {
      main: 'Главная',
      [bookId]: book.bookName,
   }

   const booksCardNavHandler = () => {
      navigate('/')
   }

   return (
      <>
         {addBookStatus === 'pending' && <Spinner />}
         <HeaderMainPage />
         <Breadcrumbs translate={pathTranslate} />
         {book && <BookInfo book={book} bookId={bookId} />}
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
