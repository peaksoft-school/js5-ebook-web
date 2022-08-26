import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Button from '../../Components/UI/Button/Button'
import LanguageBooks from './LanguageBooks'
import Genres from './Genres'
import TypeBooks from './TypeBooks'
import PriceBooks from './PriceBooks'
import { BooksCard } from '../BookCard'
import { URL } from '../../utils/constants/constants'
import BreadCrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'

const books = [
   {
      id: 1,
      mainImage:
         'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
      name: 'Ыссык-Кол',
      author: 'Чынгыз Айтматов',
      price: 500,
      bookType: 'AUDIO_BOOK',
   },
   {
      id: 2,
      mainImage:
         'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
      name: 'Ыссык-Кол',
      author: 'Чынгыз Айтматов',
      price: 500,
      bookType: 'AUDIO_BOOK',
   },
   {
      id: 3,
      mainImage:
         'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
      name: 'Баткен',
      author: 'Чынгыз Айтматов',
      price: 450,
      bookType: 'ELECTRONIC_BOOK',
   },
   {
      id: 5,
      mainImage:
         'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
      name: 'Талас',
      author: 'Чынгыз Айтматов',
      price: 495,
      bookType: 'PAPER_BOOK',
   },
   {
      id: 4,
      mainImage:
         'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
      name: 'Баткен',
      author: 'Чынгыз Айтматов',
      price: 450,
      bookType: 'ELECTRONIC_BOOK',
   },
]
const UserBooks = () => {
   const [requestBooks, setRequestBooks] = useState(null)

   const getRequsetBooks = () => {
      setRequestBooks()
   }

   useEffect(() => {
      fetch(`${URL}/api/books?search=all&page=1&size=12`)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            setRequestBooks(data)
         })
   }, [])

   // const deatailRequest = (id) => {
   //    navigate(`/request/${id}`)
   // }
   // const pathTranslate = {
   //    allBooks: 'Главная',
   //    allbooks: 'Психология',
   // }
   return (
      <FilterBooks>
         {/* <BreadCrumbs translate={pathTranslate} /> */}
         <SortBooks>
            <Genres />
            <TypeBlock>
               <TypeBooks />
            </TypeBlock>
            <PriceBooks />
            <LanguageBooks />
         </SortBooks>
         <Books>
            {requestBooks &&
               requestBooks.map((elem) => {
                  return <BooksCard key={elem.id} book={elem} />
               })}

            <SeeMore onClick={getRequsetBooks}>Смотреть больше</SeeMore>
         </Books>
      </FilterBooks>
   )
}

export default UserBooks

const FilterBooks = styled('div')`
   display: flex;
   justify-content: space-between;
   font-family: 'Open Sans';
   padding-top: 50px;
   padding-bottom: 50px;
`

const SortBooks = styled('div')`
   width: 266px;
   margin-top: 18px;
   margin-right: 40px;
`

const Books = styled('div')`
   width: 955px;
   display: flex;
   justify-content: space-between;
   width: 954px;
   flex-wrap: wrap;
`
const TypeBlock = styled('div')`
   margin-top: 38px;
   margin-bottom: 38px;
`

const SeeMore = styled(Button)`
   border: 1px solid #c4c4c4;
   background: #f8f8f8;
   width: 100%;
   text-align: center;
   padding: 10px;
`
