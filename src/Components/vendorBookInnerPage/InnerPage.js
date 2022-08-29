import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import Button from '../UI/Button/Button'
import AboutBook from './AboutBook'
import BookFragment from './BookFragment'
import plusIcon from '../../assets/icons/plus.svg'
import Breadcrumbs from '../UI/breadCrumbs/Breadcrumbs'
import { TabInnerPage } from './TabInnerPage'
import appFetch from '../../hooks/appFetch'
import BookInfo from './BookInfo'
import Promocode from './Promocode'

export const InnerPage = () => {
   const [book, setBook] = useState(null)
   const { bookId } = useParams()
   const navigate = useNavigate()

   useEffect(() => {
      appFetch({
         url: `/api/books/${bookId}`,
      }).then((response) => {
         setBook(response)
      })
   }, [])

   const deleteBookHandler = () => {
      appFetch({
         url: `/api/book/delete/${bookId}`,
         method: 'DELETE',
      })
      booksCardNavHandler()
   }

   const pathTranslate = {
      books: 'Главная',
      [bookId]: book.bookName,
   }

   const addBookNavHandler = () => {
      navigate('/addBook')
   }
   const booksCardNavHandler = () => {
      navigate('/mainPage')
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
            <>
               <BookInfo
                  book={book}
                  onDelete={deleteBookHandler}
                  bookId={bookId}
               />

               <StyledTabBlock>
                  <TabInnerPage
                     about={<AboutBook aboutBook={book.description} />}
                     bookFragment={<BookFragment fragment={book.description} />}
                  />
                  {book.thirdImage && <img src={book.thirdImage} alt="book" />}
               </StyledTabBlock>
            </>
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
const StyledTabBlock = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   padding-bottom: 20px;
`
const StyledBtnBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 43px;
`
