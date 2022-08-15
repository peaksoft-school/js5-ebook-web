import { styled } from '@mui/material'
import React from 'react'
// import Image from '../assets/Rectangle 138.jpg'
import { ReactComponent as Heart } from '../assets/icons/bookCard/heartBook.svg'
import { ReactComponent as HeartOrange } from '../assets/icons/bookCard/heartBookOrange.svg'
import { ReactComponent as AudioBook } from '../assets/icons/bookCard/audioBook.svg'
import { ReactComponent as PdfBook } from '../assets/icons/bookCard/pdfBook.svg'
import Button from '../Components/UI/Button/Button'
import { BookType } from '../utils/constants/datas'

export const BooksCard = ({ book }) => {
   const [ShowBtn, setShowBtn] = React.useState(false)
   const [heartActive, setHeartActive] = React.useState(false)
   const [activeHeart, setActiveHeart] = React.useState(false)
   const onClickIconBtn = () => {
      setHeartActive(!heartActive)
      setActiveHeart(!activeHeart)
   }
   const onHoverCardHandler = () => {
      setShowBtn(true)
   }
   const onOutCardHandler = () => {
      setShowBtn(false)
   }
   const BookTypeBlock = React.useMemo(() => {
      return {
         [BookType.PAPER_BOOK]: '',
         [BookType.AUDIO_BOOK]: <AudioBook />,
         [BookType.ELECTRONIC_BOOK]: <PdfBook />,
      }
   }, [])
   return (
      <Card onMouseOver={onHoverCardHandler} onMouseOut={onOutCardHandler}>
         <CartTypeIcon>{BookTypeBlock[book.bookType]}</CartTypeIcon>
         {!ShowBtn && activeHeart && (
            <CardIcon onClick={onClickIconBtn}>
               {heartActive ? <HeartOrange /> : <Heart />}
            </CardIcon>
         )}
         {ShowBtn && (
            <CardIcon onClick={onClickIconBtn}>
               {heartActive ? <HeartOrange /> : <Heart />}
            </CardIcon>
         )}
         <Img src={book.image} alt="photo" />
         <TitleBook>{book.name}</TitleBook>
         <AuthorBook>{book.author}</AuthorBook>
         <PriceBook>{book.price}</PriceBook>
         {ShowBtn && <BtbBook>Добавить в корзину</BtbBook>}
      </Card>
   )
}

const CartTypeIcon = styled('div')`
   /* border: 1px solid red; */
   position: absolute;
   top: 0;
   left: 0;
   margin-top: 20px;
   margin-left: 20px;
`

const BtbBook = styled(Button)`
   padding: 20px 0px;
   width: 100%;
   position: absolute;
   z-index: 10;
`

const CardIcon = styled('button')`
   /* border: 1px solid red; */
   position: absolute;
   top: 0;
   right: 0;
   margin-right: 20px;
   margin-top: 20px;
   padding: 0;
   background-color: rgba(0, 0, 0, 0);
   cursor: pointer;
   transition: ease-in 0.2s;
`

const TitleBook = styled('h3')`
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 14px;
   text-transform: uppercase;
   margin: 0;
   padding: 5px 0;
`
const AuthorBook = styled('p')`
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 14px;
   margin: 0;
   padding: 5px 0;
`
const PriceBook = styled('p')`
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 14px;
   margin: 0;
   padding: 5px 0;
`

const Img = styled('img')`
   width: 100%;
`

const Card = styled('div')`
   /* border: 1px solid green; */
   width: 224px;
   min-height: 343px;
   /* margin: 0 auto; */
   padding: 0;
   margin-right: 20px;
   position: relative;
   transition: ease-in 0.2s;
   &:nth-child(4n) {
      margin-right: 0;
   }
`
