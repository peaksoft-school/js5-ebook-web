import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import React from 'react'
import { useNavigate } from 'react-router'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { ReactComponent as AudioBook } from '../../../assets/icons/bookCard/audioBook.svg'
import { ReactComponent as PdfBook } from '../../../assets/icons/bookCard/pdfBook.svg'
import { BookType } from '../../../utils/constants/constants'
import { blockBookAction } from '../../../store/slices/adminActions/applicationInnerPageActions'
import PopUpMeatBalls from '../../../Components/UI/MeatBalls/PopupMeatBalls'

const Book = ({ id, img, date, name, price, bookType }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const menuMeatBall = [
      {
         id: 2,
         text: 'Заблокировать',
         icon: <LockOutlinedIcon />,
         onClick: blockBook,
      },
   ]

   function blockBook() {
      dispatch(blockBookAction(id))
   }

   const BookTypeBlock = React.useMemo(() => {
      return {
         [BookType.PAPER_BOOK]: '',
         [BookType.AUDIO_BOOK]: <AudioBook />,
         [BookType.ELECTRONIC_BOOK]: <PdfBook />,
      }
   }, [])
   const navigateToDetailsPage = () => {
      navigate(`/books/${id}`)
   }
   return (
      <BookItems onClick={navigateToDetailsPage}>
         <MeatBall onClick={(e) => e.stopPropagation()}>
            <PopUpMeatBalls options={menuMeatBall} />
         </MeatBall>

         <CartTypeIcon>{BookTypeBlock[bookType]}</CartTypeIcon>
         <Div>
            <Img>
               <BookImage src={img} alt="photo" />
            </Img>
            <NameBook>{name}</NameBook>

            <PriceDate>
               <Date>{date}</Date>
               <Price>{price}</Price>
            </PriceDate>
         </Div>
      </BookItems>
   )
}

export default Book

const BookItems = styled('div')`
   width: 225px;
   height: 380px;
   border: #ededed;
   background: #ededed;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: space-evenly;
   font-family: 'Open Sans';
   margin-top: 22px;
   margin-right: 10px;
`
const MeatBall = styled('div')`
   display: flex;
   justify-content: center;
   width: 60px;
   margin-right: -16px;
   margin-top: 25px;
   cursor: pointer;
`
const Img = styled('div')`
   margin-top: 5px;
   width: 170px;
   height: 260px;
`
const BookImage = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
   cursor: pointer;
`
const NameBook = styled('p')`
   font-size: 14px;
   font-weight: 600;
   width: 194px;
`
const PriceDate = styled('div')`
   width: 169px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: -15px;
   padding-bottom: 20px;
`
const Date = styled('p')`
   font-size: 14px;
   font-weight: 400;
   color: #8a8a8a;
`
const Price = styled('p')`
   font-size: 16px;
   font-weight: 600;
   color: #ff4c00;
`
const Div = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 197px;
`
const CartTypeIcon = styled('div')`
   /* border: 1px solid red; */
   position: absolute;
   top: 0;
   left: 0;
   margin-top: 20px;
   margin-left: 20px;
`
