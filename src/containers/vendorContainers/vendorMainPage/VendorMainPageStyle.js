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
   margin-bottom: 6px;
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
   background: rgba(243, 73, 1, 0.08);
`
export const MeatBallsDiv = styled('div')`
   margin-top: 16px;
`
export const FooterDiv = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 6px;
   margin-top: 3px;
`
export const HeaderText = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
`
export const Price = styled('span')`
   color: #ff4c00;
   font-size: 16px;
   font-weight: 600;
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
   font-size: 14px;
   width: 110px;
   display: flex;
   justify-content: space-between;
   color: #8a8a8a;
`
export const NameBook = styled('span')`
   color: #222222;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 120%;
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
