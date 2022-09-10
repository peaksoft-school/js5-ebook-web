import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { ru } from 'date-fns/locale'
import { format } from 'date-fns'
import { BookType } from '../../utils/constants/constants'
import SelectBooks from './SelectBooks'
import { setBooks, setGenres } from '../../store/slices/globalSlices'
import Book from './Book'

const arr = [
   {
      name: 'Все',
      id: null,
   },
   {
      name: 'Бумажные книги',
      id: BookType.PAPER_BOOK,
   },
   {
      name: 'Аудио книги',
      id: BookType.AUDIO_BOOK,
   },
   {
      name: 'Электронные книги',
      id: BookType.ELECTRONIC_BOOK,
   },
]

export default function AdminBooks() {
   const { genres: booktypes, books } = useSelector(
      (store) => store.globalValues
   )
   const dispatch = useDispatch()
   const [requestObj, setRequestObj] = useState({
      genres: [],
      bookType: 'PAPER_BOOK',
      priceFrom: null,
      priceTo: null,
      languages: null,
      search: 'all',
      sortBy: null,
      page: null,
      size: null,
   })
   useEffect(() => {
      dispatch(setBooks(requestObj))
   }, [requestObj])
   useEffect(() => {
      dispatch(setGenres())
   }, [])
   const onClickSelect = (id, key) => {
      setRequestObj((prev) => {
         if (key === 'genres') {
            return {
               ...prev,
               [key]: [id],
            }
         }
         return {
            ...prev,
            [key]: id,
         }
      })
   }
   const getFormatedDate = (date) => {
      return date
         ? format(new Date(date), 'dd MMMM yyyy', {
              locale: ru,
           })
         : ''
   }
   return (
      <AdminBooksBlock>
         <SelectBlock>
            <SelectBooks
               type="bookType"
               name="Тип"
               genres={arr}
               onClick={onClickSelect}
            />
            <SelectBooks
               type="genres"
               name="Жанры"
               genres={booktypes}
               onClick={onClickSelect}
            />
         </SelectBlock>
         <Books>
            {books &&
               books.map((book) => (
                  <Book
                     key={book.id}
                     id={book.id}
                     img={book.mainImage}
                     date={getFormatedDate(book.publishedDate)}
                     name={book.name}
                     price={book.price}
                     bookType={book.bookType}
                  />
               ))}
         </Books>
      </AdminBooksBlock>
   )
}

const SelectBlock = styled('div')`
   display: flex;
   justify-content: flex-start;
   width: 550px;
`

const AdminBooksBlock = styled('div')`
   width: 100%;
`
const Books = styled('div')`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin-right: -40px;
`
