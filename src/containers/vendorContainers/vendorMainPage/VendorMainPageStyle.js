import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const ImageBlock = styled('div')`
   width: 197px;
   height: 297px;
   margin-bottom: 10px;
`

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
   cursor: pointer;
   object-fit: cover;
   margin-bottom: 6px;
   background-color: aliceblue;
   width: 100%;
   height: 100%;
   object-fit: cover;
`
export const ImgesCont = styled('img')`
   width: 16px;
`
export const CopyLink = styled(Link)`
   text-decoration: none;
`
export const BookSHeader = styled('div')`
   width: 134px;
   display: flex;
   justify-content: space-between;
   padding: 19px 0px 16px 0px;
   align-items: center;
   color: #8a8a8a;
   margin-top: -10px;
   font-size: 14px;
   line-height: 16.8px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
`
export const BooksWrapper = styled('div')`
   padding: 10px 30px 10px 40px;
`
export const BooksContainer = styled('div')`
   display: flex;
   width: 280px;
   padding: 0px 0px 0px 9px;
   position: relative;
`

export const MeatBallsDiv = styled('div')`
   margin-top: 9px;
   position: absolute;
   right: 0px;
   top: 6px;
   z-index: 1;
   opacity: 10;
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
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
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
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
`
export const NameBook = styled('h3')`
   margin-top: 10px;
   color: #222222;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 120%;
   text-transform: uppercase;
   padding-top: 10px;
   text-transform: uppercase;
`
export const ImgFavorite = styled('span')`
   display: flex;
   align-items: center;
   color: grey;
   width: 38px;
   justify-content: space-between;
`
export const Span = styled('span')`
   color: #969696;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
`
export const SelectBooksDiv = styled('div')`
   display: flex;
   justify-content: space-around;
`
export const SelectCopy = styled('div')`
   width: 32px;
   display: flex;
   flex-direction: row-reverse;
`
