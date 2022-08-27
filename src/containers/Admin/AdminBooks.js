import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { BookType, URL } from '../../utils/constants/constants'
import SelectBooks from './SelectBooks'
import { addGenres } from '../../store/slices/genres'
import { sortRequestApplic } from '../../utils/helpers/helpers'
import BookCardAdmin from '../../Components/adminBooks/BookCardAdmin'

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
   const [books, setBooks] = useState(null)
   const { genres: booktypes } = useSelector((store) => store.globalValues)
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
      fetch(`${URL}/api/books${sortRequestApplic(requestObj)}`)
         .then((response) => {
            if (!response.ok) {
               throw new Error('error')
            }
            return response.json()
         })
         .then((data) => {
            setBooks(data)
            // console.log(data)
         })
         .catch((error) => {
            console.log(error.message)
         })
   }, [requestObj])
   useEffect(() => {
      dispatch(addGenres())
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
   console.log(books)
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
               books.map((el) => (
                  <BookCardAdmin
                     key={el.id}
                     id={el.id}
                     img={el.mainImage}
                     name={el.name}
                     price={el.price}
                     //  onClick={() => deatailRequest(el.id)}
                  />
               ))}
            {/* <SeeMore onClick={getRequsetBooks}>Смотреть больше</SeeMore> */}
         </Books>
      </AdminBooksBlock>
   )
}

const SelectBlock = styled('div')`
   /* border: 1px solid red; */
   display: flex;
   justify-content: flex-start;
   width: 550px;
`

const AdminBooksBlock = styled('div')`
   /* border: 1px solid red; */
`
const Books = styled('div')`
   display: flex;
   justify-content: space-between;
`
