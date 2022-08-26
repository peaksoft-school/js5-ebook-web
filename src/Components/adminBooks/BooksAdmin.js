/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router'
import { styled } from '@mui/material'
import BookCard from './BookCart'
import { URL, BookType } from '../../utils/constants/constants'

console.log(BookType.AUDIO_BOOK)

const obj = {
   genres: null,
   bookType: 'ELECTRONIC_BOOK',
   priceFrom: null,
   priceTo: null,
   languages: null,
   search: 'all',
}

function saveUrl(obj) {
   let text = ''
   // eslint-disable-next-line no-restricted-syntax
   for (const key in obj) {
      if (obj[key] !== null) {
         if (text !== '') {
            text = `${text}&${key}=${obj[key]}`
         } else {
            text = `?${key}=${obj[key]}`
         }
      }
   }
   return text
}

console.log(saveUrl(obj))

const BooksAdmin = () => {
   const [requestAppl, setRequestAppl] = useState(obj)
   const [books, setBooks] = useState(null)
   useEffect(() => {
      fetch(`${URL}/api/books${saveUrl(requestAppl)}`)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            setBooks(data)
         })
   }, [])

   const onClickHandler = (key, value) => {
      setRequestAppl((prev) => {
         return {
            ...prev,
            [key]: value,
         }
      })
   }
   return (
      <div>
         <div>
            <p>Все</p>
            <p onClick={() => onClickHandler('bookType', 'PAPER_BOOK')}>
               Бумажные книги
            </p>
            <p>Аудиокниги</p>
            <p>Электронные книги</p>
         </div>
         {/* <div>Всего:{moreBbooks}</div> */}
         <div>
            {' '}
            <Books>
               {books?.map((el) => (
                  <BookCard
                     key={el.id}
                     id={el.id}
                     img={el.mainImage}
                     date={el.date}
                     name={el.name}
                     price={el.price}
                     //  onClick={() => deatailRequest(el.id)}
                  />
               ))}
               {/* <SeeMore onClick={getRequsetBooks}>Смотреть больше</SeeMore> */}
            </Books>
         </div>
      </div>
   )
}

export default BooksAdmin

const Books = styled('div')`
   padding-top: 22px;
   display: flex;
   justify-content: space-between;
   width: 954px;
   flex-wrap: wrap;
`
