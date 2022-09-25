import { styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { ReactComponent as Heart } from '../../../assets/icons/bookCard/heartBook.svg'
import { ReactComponent as HeartOrange } from '../../../assets/icons/bookCard/heartBookOrange.svg'
import { ReactComponent as AudioBook } from '../../../assets/icons/bookCard/audioBook.svg'
import { ReactComponent as PdfBook } from '../../../assets/icons/bookCard/pdfBook.svg'
import Button from '../../../Components/UI/Button/Button'
import { BookType } from '../../../utils/constants/constants'
import {
   addWishlist,
   removeWishlist,
} from '../../../store/slices/wishListSlices'

export const BooksCardWishList = ({ book }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [heartActive, setHeartActive] = React.useState(false)
   const [activeHeart, setActiveHeart] = React.useState(false)
   const onClickIconBtn = (e) => {
      e.stopPropagation()
      setHeartActive(!heartActive)
      setActiveHeart(!activeHeart)
      if (!heartActive) {
         dispatch(removeWishlist(book.bookId))
      } else {
         dispatch(addWishlist(book.bookId))
      }
   }

   const BookTypeBlock = React.useMemo(() => {
      return {
         [BookType.PAPER_BOOK]: '',
         [BookType.AUDIO_BOOK]: <AudioBook />,
         [BookType.ELECTRONIC_BOOK]: <PdfBook />,
      }
   }, [])
   const onCLickBook = () => {
      navigate(`main/favorite/${book.bookId}`)
   }
   return (
      <Card onClick={onCLickBook}>
         <CartTypeIcon>{BookTypeBlock[book.bookType]}</CartTypeIcon>
         {activeHeart && (
            <CardIcon onClick={onClickIconBtn}>
               {!heartActive ? <HeartOrange /> : <Heart />}
            </CardIcon>
         )}
         <CardIcon onClick={onClickIconBtn}>
            {!heartActive ? <HeartOrange /> : <Heart />}
         </CardIcon>
         <ImgBlock>
            <Img src={book.mainImage} alt="photo" />
         </ImgBlock>
         <TitleBook>{book.name}</TitleBook>
         <AuthorBook>{book.author}</AuthorBook>
         <PriceBook>{book.price}</PriceBook>
         <BtbBook>Добавить в корзину</BtbBook>
      </Card>
   )
}

const CartTypeIcon = styled('div')`
   position: absolute;
   top: 0;
   left: 0;
   margin-top: 20px;
   margin-left: 20px;
`

const BtbBook = styled(Button)`
   padding: 10px 0px;
   width: 100%;
   position: absolute;
   z-index: 10;
`

const CardIcon = styled('button')`
   border: none;
   position: absolute;
   top: 0;
   right: 0;
   margin-right: 20px;
   margin-top: 20px;
   padding: 0;
   background-color: rgba(0, 0, 0, 0);
   outline: 0px solid red;
   cursor: pointer;
   transition: ease-in 0.2s;
`

const TitleBook = styled('h3')`
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 14px;
   text-transform: uppercase;
   margin: 0;
   padding: 5px 0;
`
const AuthorBook = styled('p')`
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 14px;
   margin: 0;
   padding: 5px 0;
`
const PriceBook = styled('p')`
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 14px;
   margin: 0;
   padding: 5px 0;
`
const ImgBlock = styled('div')`
   height: 349px;
`

const Img = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

const Card = styled('div')`
   /* border: 1px solid green; */
   width: 224px;
   /* min-height: 343px; */
   /* margin: 0 auto; */
   max-height: 452px;
   /* overflow: hidden; */
   padding: 0;
   margin-right: 20px;
   position: relative;
   transition: ease-in 0.2s;
   &:nth-of-type(4n + 1) {
      margin-right: 20px;
   }
   margin-bottom: 20px;
`
