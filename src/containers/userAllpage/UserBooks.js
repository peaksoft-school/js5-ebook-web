import { styled } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LanguageBooks from './LanguageBooks'
import Genres from './Genres'
import TypeBooks from './TypeBooks'
import PriceBooks from './PriceBooks'
import { BooksCard } from '../BookCard'
import ShowChoice from './ShowChoice'
import Sorting from './Sorting'
import TotalBooks from './TotalBooks'
import Button from '../../Components/UI/Button/Button'
import { getBooks } from '../../store/slices/catalogSlice'
// import BreadCrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'
// import { sortRequestApplic } from '../../utils/helpers/helpers'

// const books = [
//    {
//       id: 1,
//       mainImage:
//          'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
//       name: 'Ыссык-Кол',
//       author: 'Чынгыз Айтматов',
//       price: 500,
//       bookType: 'AUDIO_BOOK',
//    },
//    {
//       id: 2,
//       mainImage:
//          'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
//       name: 'Ыссык-Кол',
//       author: 'Чынгыз Айтматов',
//       price: 500,
//       bookType: 'AUDIO_BOOK',
//    },
//    {
//       id: 3,
//       mainImage:
//          'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
//       name: 'Баткен',
//       author: 'Чынгыз Айтматов',
//       price: 450,
//       bookType: 'ELECTRONIC_BOOK',
//    },
//    {
//       id: 5,
//       mainImage:
//          'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
//       name: 'Талас',
//       author: 'Чынгыз Айтматов',
//       price: 495,
//       bookType: 'PAPER_BOOK',
//    },
//    {
//       id: 4,
//       mainImage:
//          'https://ebookjava5.s3.eu-central-1.amazonaws.com/16611702063041024w-iRBldJ_jyLw.webp',
//       name: 'Баткен',
//       author: 'Чынгыз Айтматов',
//       price: 450,
//       bookType: 'ELECTRONIC_BOOK',
//    },
// ]

const UserBooks = () => {
   const [requestObj, setRequestObj] = React.useState({
      genres: [],
      bookType: null,
      priceFrom: null,
      priceTo: null,
      languages: null,
      search: 'all',
      sortBy: null,
      page: '1',
      size: '12',
   })
   const { books, totalBooks, totalPages } = useSelector((store) => store.books)
   const [showSeeMore, setShowSeeMore] = React.useState(false)
   const [showGenres, setShowGenres] = React.useState([])
   const dispatch = useDispatch()

   React.useEffect(() => {
      if (
         Number(totalPages) === Number(requestObj.page) ||
         Number(totalPages) === 0
      ) {
         setShowSeeMore(false)
      } else {
         setShowSeeMore(true)
      }
   }, [requestObj.page, totalPages])

   React.useEffect(() => {
      dispatch(getBooks(requestObj))
   }, [
      requestObj.genres,
      requestObj.bookType,
      requestObj.priceFrom,
      requestObj.priceTo,
      requestObj.languages,
      requestObj.sortBy,
   ])
   const onChangePriceHandler = (from, to) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            priceFrom: from,
            priceTo: to,
         }
      })
   }
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
   const onChangeHandler = (key, value) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            [key]: value,
         }
      })
   }
   return (
      <FilterBooks>
         <SortBooks>
            <HeaderBooks>
               <HeaderItem width="100%">
                  <TotalBooks totalBooks={totalBooks} />
               </HeaderItem>
            </HeaderBooks>
            <Genres onChange={onChangeGenreHandler} />
            <TypeBlock>
               <TypeBooks onChange={onChangeHandler} />
            </TypeBlock>
            <PriceBooks onChange={onChangePriceHandler} />
            <LanguageBooks onChange={onChangeHandler} />
         </SortBooks>
         <Books>
            <HeaderBooks>
               <HeaderItem width="80%">
                  <ShowChoice
                     arr={showGenres}
                     onChange={onChangeGenreHandler}
                  />
               </HeaderItem>
               <HeaderItem width="20%" right="Hello">
                  <Sorting onChange={onChangeHandler} />
               </HeaderItem>
            </HeaderBooks>
            {books.map((elem) => {
               return <BooksCard key={elem.id} book={elem} />
            })}
            {showSeeMore && <SeeMore>Смотреть больше</SeeMore>}
         </Books>
      </FilterBooks>
   )
}

export default UserBooks

const HeaderItem = styled('div')`
   width: ${(props) => props.width || '100%'};
   display: flex;
   flex-flow: row wrap;
   justify-content: ${(props) => (props.right ? 'flex-end' : 'flex-start')};
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
   /* border: 1px solid red; */
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   flex-wrap: nowrap;
   font-family: 'Open Sans';
   /* padding-top: 50px; */
   padding-bottom: 50px;
   /* border: 1px solid red; */
`

const SortBooks = styled('div')`
   /* border: 1px solid red; */
   width: calc(1 / 5 * 100%);
   /* padding-top: 18px; */
   /* padding-right: 40px; */
   /* margin-top: 18px; */
   margin-right: 30px;
`

const Books = styled('div')`
   /* width: 910px; */
   /* border: 1px solid red; */
   width: calc(4 / 5 * 100%);
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
   align-items: flex-start;
   align-content: flex-start;
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
   margin-top: 40px;
   color: #969696;
   &:hover {
      color: #f8f8f8;
   }
`
