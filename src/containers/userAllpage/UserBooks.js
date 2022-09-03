import { styled } from '@mui/material'
import React, { useCallback } from 'react'
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
import {
   getBooks,
   updateBooks,
   сatalogActions,
} from '../../store/slices/catalogSlice'
import GetSnackbar from '../../Components/UI/snackbar/GetSnackbar'
import BreadCrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'

const arr = {
   allbooks: `каталог`,
}

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
   const { books, totalBooks, totalPages, error } = useSelector(
      (store) => store.books
   )
   const [showSeeMore, setShowSeeMore] = React.useState(false)
   const [showGenres, setShowGenres] = React.useState([])
   const dispatch = useDispatch()

   React.useEffect(() => {
      let errorTime = setTimeout(() => {}, 1000)
      if (error) {
         errorTime = setTimeout(() => {
            dispatch(сatalogActions.cleanError())
         }, 3000)
      }
      return () => {
         clearTimeout(errorTime)
      }
   }, [error])

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
      setRequestObj((prev) => {
         return {
            ...prev,
            page: '1',
         }
      })
   }, [totalPages])

   React.useEffect(() => {
      dispatch(updateBooks(requestObj))
   }, [requestObj.page, requestObj.sortBy])

   React.useEffect(() => {
      dispatch(getBooks(requestObj))
   }, [
      requestObj.genres,
      requestObj.bookType,
      requestObj.priceFrom,
      requestObj.priceTo,
      requestObj.languages,
   ])
   const onChangePriceHandler = useCallback((from, to) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            priceFrom: from,
            priceTo: to,
         }
      })
   }, [])

   const onChangeGenreHandler = useCallback((choiseGenre) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            genres: [...choiseGenre.ids],
         }
      })
      setShowGenres((prev) => {
         const newArr = prev.filter((el) => el.type !== 'genre')
         if (newArr) {
            return [...newArr, ...choiseGenre.labels]
         }
         return [...choiseGenre.labels]
      })
   }, [])

   const onChangeHandler = useCallback((key, value, showRadio) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            [key]: value,
         }
      })
      if (showRadio) {
         setShowGenres((prev) => {
            const findEl = prev.find((el) => el.type === key)
            if (!findEl) {
               return [...prev, showRadio]
            }
            if (value === null && findEl) {
               return prev.filter((el) => el.type !== key)
            }
            return prev.map((el) => {
               if (el.type === key) {
                  return showRadio
               }
               return el
            })
         })
      }
      if (value === null) {
         setShowGenres((prev) => {
            return prev.filter((el) => el.type !== key)
         })
      }
   }, [])
   const onClickSeeMore = () => {
      setRequestObj((prev) => {
         return {
            ...prev,
            page: Number(prev.page) + 1,
         }
      })
   }
   const onCloseSnackbar = () => {
      dispatch(сatalogActions.cleanError())
   }
   return (
      <>
         <BreadCrumbs translate={arr} />
         <FilterBooks>
            <GetSnackbar
               open={error}
               message={error}
               variant="error"
               horizontal="right"
               handleClose={() => onCloseSnackbar()}
            />
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
               {showSeeMore && (
                  <SeeMore onClick={onClickSeeMore}>Смотреть больше</SeeMore>
               )}
            </Books>
         </FilterBooks>
      </>
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
