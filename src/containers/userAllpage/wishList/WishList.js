import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'
import Spinner from '../../../Components/UI/Spinner'
import { favoriteBooksAction } from '../../../store/slices/wishListSlices'
import { BooksCardWishList } from './BookCardWishList'

const WishList = () => {
   const dispatch = useDispatch()
   const [isShowSpinner, setIsShowSpinner] = useState(false)
   const { status, favoriteBooks } = useSelector((state) => state.favoriteBooks)

   const pathTranslate = {
      main: 'Главная',
      favorite: 'Избранное',
   }
   useEffect(() => {
      dispatch(favoriteBooksAction())
   }, [])

   useEffect(() => {
      if (status === 'pending') {
         setIsShowSpinner(true)
      } else {
         setIsShowSpinner(false)
      }
   }, [])
   return (
      <WishListBlock>
         <Breadcrumbs translate={pathTranslate} />
         {isShowSpinner && <Spinner />}
         <Book>
            {favoriteBooks &&
               favoriteBooks.map((book) => (
                  <BooksCardWishList wishlist key={book.bookId} book={book} />
               ))}
         </Book>
      </WishListBlock>
   )
}

export default WishList
const WishListBlock = styled('div')`
   padding-top: 46px;
`
const Book = styled('div')`
   padding-top: 32px;
   margin-top: 40px;
   width: 100%;
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
   margin-right: 20px;
`
