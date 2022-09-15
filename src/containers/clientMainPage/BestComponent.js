/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
// import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MainPageSlider from '../../Components/UI/MainPageslider'
import { сatalogActions } from '../../store/slices/catalogSlice'
import { SortBy, BookType } from '../../utils/constants/constants'

export const BestComponent = ({ variant, books, type }) => {
   // const { externalSetting } = useSelector((store) => store.books)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [book, setBook] = React.useState()
   const location = useLocation()
   const onClickCard = (book) => {
      setBook(book)
   }
   const onClickBtn = (e) => {
      e.preventDefault()
      if (type === SortBy.BESTSELLER) {
         dispatch(
            сatalogActions.setExternalSetting({
               key: 'sortBy',
               value: { type: SortBy.BESTSELLER, label: 'Бестселлеры' },
            })
         )
      }
      if (type === BookType.ELECTRONIC_BOOK) {
         dispatch(
            сatalogActions.setExternalSetting({
               key: 'bookType',
               value: BookType.ELECTRONIC_BOOK,
            })
         )
      }
      navigate(`${location.pathname}/catalog`)
   }
   return (
      <StyledBestSlider>
         <StyledTitle>
            <StyledBestText>{variant}</StyledBestText>
            <a href="#" onClick={onClickBtn}>
               Смотреть все
            </a>
         </StyledTitle>
         <StyledBookSliderBlock>
            <StyledBookTitle>
               <StyledBookName>{book?.name}</StyledBookName>
               <StyledBookDescription>
                  {book?.description}
               </StyledBookDescription>
               <TableBlock>
                  <TableItem width="50%">
                     <Link to={`${location.pathname}/catalog/${book?.bookId}`}>
                        Подробнее
                     </Link>
                  </TableItem>
                  <TableItem width="50%" align="right">
                     <StyledBookPrice>{book?.price} c</StyledBookPrice>
                  </TableItem>
               </TableBlock>
            </StyledBookTitle>
            <StyledBookSlider>
               {books && (
                  <MainPageSlider images={books} onClick={onClickCard} />
               )}
            </StyledBookSlider>
         </StyledBookSliderBlock>
      </StyledBestSlider>
   )
}

const TableBlock = styled.div`
   /* border: 1px solid red; */
   display: flex;
   flex-flow: row wrap;
   justify-content: flex-start;
   align-items: flex-start;
   align-content: flex-start;
`
const TableItem = styled.div`
   /* border: 1px solid red; */
   height: 20px;
   width: ${(props) => props.width || '100%'};
   display: flex;
   justify-content: ${(props) =>
      props.align === 'right' ? 'flex-end' : 'flex-start'};
   & > a {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      text-decoration-line: underline;
      color: #ff4c00;
   }
`

const StyledBestSlider = styled.div`
   /* border: 1px solid red; */
   padding: 70px 0px;
   width: 100%;
`
const StyledTitle = styled.div`
   width: 100%;
   /* border: 1px solid red; */
   display: flex;
   justify-content: space-between;
   align-items: center;
   & > a {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      text-decoration-line: underline;
      color: #ff4c00;
   }
   & p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 130%;
   }
`
const StyledBestText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 130%;
`
const StyledBookDescription = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
`
// const StyledNavLink = styled('a')`
//    /* border: 1px solid red; */
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 14px;
//    line-height: 120%;
//    text-decoration-line: underline;
//    color: #ff4c00;
// `
const StyledBookPrice = styled.span`
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   color: #ff4c00;
   margin: 0;
   padding: 0;
`
const StyledBookSliderBlock = styled.div`
   /* border: 1px solid red; */
   padding-top: 40px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`
const StyledBookTitle = styled.div`
   /* border: 1px solid red; */
   /* padding-top: 20px; */
   width: 492px;
   display: flex;
   flex-direction: column;
   overflow: hidden;
`
const StyledBookName = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 56px;
   line-height: 130%;
   margin: 0;
   padding: 0;
   margin-bottom: 50px;
`
const StyledBookSlider = styled.div`
   /* border: 1px solid red; */
   width: 700px;
`
export const StyledBookImage = styled.div`
   width: 342px;
   transition: transform 1s ease 0s;
   &:hover {
      transform: rotate(9.34deg);
   }
`
