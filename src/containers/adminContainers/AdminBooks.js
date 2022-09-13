import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { ru } from 'date-fns/locale'
import { format } from 'date-fns'
import { BookType } from '../../utils/constants/constants'
import SelectBooks from './SelectBooks'
import { setBooks, setGenres } from '../../store/slices/globalSlices'
import Book from './Book'
import Button from '../../Components/UI/Button/Button'

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
   const {
      genres: booktypes,
      books,
      totalElements,
   } = useSelector((store) => store.globalValues)

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
   const moreProducts = 8
   const [more, setMore] = useState(moreProducts)
   const handleMoreBooks = () => {
      setMore(more + moreProducts)
   }
   useEffect(() => {
      dispatch(setBooks(requestObj, more))
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
         <TotalElements>Всего:{totalElements}</TotalElements>
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
         {more < totalElements && (
            <SeeMore onClick={handleMoreBooks}>Смотреть больше</SeeMore>
         )}
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
   justify-content: flex-start;
   flex-wrap: wrap;
   margin-right: -40px;
`
const TotalElements = styled('p')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   color: #b5b5b5;
   line-height: 130%;
`
const SeeMore = styled(Button)`
   border: 1px solid #c4c4c4;
   background: #f8f8f8;
   width: 100%;
   text-align: center;
   padding: 10px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   margin-top: 50px;
   color: gray;
`
