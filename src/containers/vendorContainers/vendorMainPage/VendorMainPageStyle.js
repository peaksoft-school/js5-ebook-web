import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const ContainerDiv = styled('div')`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-column-gap: 16px;
   grid-row-gap: 1.2em;
   width: 1240px;
   margin: auto;
   margin-bottom: 20px;
`
export const Img = styled('img')`
   width: 197px;
   height: 297px;
   cursor: pointer;
`
export const CopyLink = styled(Link)`
   text-decoration: none;
`
export const BookSHeader = styled('div')`
   width: 154px;
   display: flex;
   justify-content: space-between;
   padding: 19px 0px 16px 0px;
   align-items: center;
   color: black;
   margin-top: -10px;
`
export const BooksWrapper = styled('div')`
   padding: 10px 30px 10px 40px;
`
export const BooksContainer = styled('div')`
   display: flex;
   width: 280px;
`
export const BooksContainer2 = styled('div')`
   border: 1px solid red;
   display: flex;
   justify-content: center;
   background: #ededed;
`
export const MeatBallsDiv = styled('div')`
   margin-top: 16px;
`
export const FooterDiv = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
export const HeaderText = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
`
export const Price = styled('span')`
   color: #ff4c00;
   font-size: 20px;
   font-weight: 800;
`
export const WrapperDiv = styled('div')`
   width: 1240px;
   margin: auto;
   padding-bottom: 30px;
   & hr {
      margin: 30px 0px 30px 0px;
   }
`
export const DateSpan = styled('span')`
   width: 70px;
   display: flex;
   justify-content: space-between;
   color: #8a8a8a;
`
export const NameBook = styled('h2')`
   color: #222222;
`
export const ImgFavorite = styled('span')`
   display: flex;
   align-items: center;
   color: grey;
   width: 44px;
   justify-content: space-between;
`
export const Span = styled('span')`
   color: #969696;
`
export const SelectBooksDiv = styled('div')``
