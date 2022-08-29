import { styled } from '@mui/material'
import React from 'react'
import LanguageBooks from './LanguageBooks'
import Genres from './Genres'
import TypeBooks from './TypeBooks'
import PriceBooks from './PriceBooks'
import { BooksCard } from '../BookCard'
import ShowChoice from './ShowChoice'
// import { sortRequestApplic } from '../../utils/helpers/helpers'

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
   const [requestObj, setRequestObj] = React.useState({
      genres: [],
      bookType: 'PAPER_BOOK',
      priceFrom: null,
      priceTo: null,
      languages: [],
      search: 'all',
      sortBy: null,
      page: null,
      size: null,
   })

   const [showGenres, setShowGenres] = React.useState([])
   console.log(requestObj)
   const onChangeGenreHandler = (choiseGenre) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            genres: [...choiseGenre.ids],
         }
      })
      setShowGenres(() => {
         return [...choiseGenre.labels]
      })
   }
   const onChangeTypeBook = (value) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            bookType: value,
         }
      })
   }
   return (
      <FilterBooks>
         <HeaderBooks>
            <HeaderItem width="25%" />
            <HeaderItem width="60%">
               <ShowChoice arr={showGenres} onChange={onChangeGenreHandler} />
            </HeaderItem>
            <HeaderItem width="17%" />
         </HeaderBooks>
         <SortBooks>
            <Genres onChange={onChangeGenreHandler} />
            <TypeBlock>
               <TypeBooks onChange={onChangeTypeBook} />
            </TypeBlock>
            <PriceBooks />
            <LanguageBooks />
         </SortBooks>
         <Books>
            {books.map((elem) => {
               return <BooksCard key={elem.id} book={elem} />
            })}

            {/* <SeeMore onClick={getRequsetBooks}>Смотреть больше</SeeMore> */}
         </Books>
      </FilterBooks>
   )
}

export default UserBooks

const HeaderItem = styled('div')`
   width: ${(props) => props.width || '100%'};
   /* border: 1px solid red; */
`

const HeaderBooks = styled('div')`
   /* border: 1px solid red; */
   padding: 20px 0px;
   width: 100%;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
`

const FilterBooks = styled('div')`
   display: flex;
   justify-content: flex-start;
   flex-direction: row;
   flex-wrap: wrap;
   font-family: 'Open Sans';
   padding-top: 50px;
   padding-bottom: 50px;
   /* border: 1px solid red; */
`

const SortBooks = styled('div')`
   width: calc(1 / 5 * 100%);
   margin-top: 18px;
   margin-right: 40px;
`

const Books = styled('div')`
   /* width: 910px; */
   /* border: 1px solid red; */
   width: calc(3.8 / 5 * 100%);
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`
const TypeBlock = styled('div')`
   margin-top: 38px;
   margin-bottom: 38px;
`

// const SeeMore = styled(Button)`
//    border: 1px solid #c4c4c4;
//    background: #f8f8f8;
//    width: 100%;
//    text-align: center;
//    padding: 10px;
//    margin-top: 64px;
// `
