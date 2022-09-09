/* eslint-disable max-len */
import styled from 'styled-components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
// import { books } from './bookImage'

export const LatestPublic = ({ books }) => {
   const [book, setBook] = React.useState()
   const [booksStyled, setBooksStyled] = React.useState(null)
   const location = useLocation()
   const navigate = useNavigate()
   useEffect(() => {
      if (books) {
         setBook(books[books.length - 1])
         setBooksStyled(() => {
            return books.map((el) => {
               return {
                  id: el.id,
                  active: false,
               }
            })
         })
      }
   }, [books])
   const onClickItem = (id) => {
      setBook(() => {
         return books.find((el) => el.id === id)
      })
      setBooksStyled((prev) => {
         return prev.map((el) => {
            if (el.id === id) {
               return {
                  ...el,
                  active: true,
               }
            }
            return {
               ...el,
               active: false,
            }
         })
      })
   }
   const onClickBook = (bookId) => {
      navigate(`${location.pathname}/${bookId}`)
   }
   return (
      <StyledLatestPublCont>
         <StyledTitle>
            <StyledLatestPublText>Последние публикации</StyledLatestPublText>
            <LinkBlock>
               <Link to="/catalog">Смотреть все</Link>
            </LinkBlock>
         </StyledTitle>
         <StyledBookSliderBlock>
            <StyledGenresBlock>
               {books?.map((el) => {
                  let findEl = null
                  if (booksStyled) {
                     findEl = booksStyled?.find((elem) => elem.id === el.id)
                  }
                  return (
                     <StyledGenresText
                        active={findEl?.active}
                        key={el.id}
                        onClick={() => onClickItem(el.id)}
                     >
                        <GenresSpan>{el.genre}</GenresSpan>
                     </StyledGenresText>
                  )
               })}
            </StyledGenresBlock>
            <ImageBlock>
               <ImageLine />
               <StyledBookImage onClick={() => onClickBook(book.id)}>
                  <Image src={book?.image} alt={book?.name} />
               </StyledBookImage>
            </ImageBlock>
            <StyledBookDescriptionBlock>
               <StyledLatestBookName>{book?.name}</StyledLatestBookName>
               <StyledLatestBookDesc>{book?.description}</StyledLatestBookDesc>
               <LinkBlock>
                  <Link to={`${location.pathname}/${book?.id}`}>Подробнее</Link>
                  <StyledBookPrice>{book?.price} с</StyledBookPrice>
               </LinkBlock>
            </StyledBookDescriptionBlock>
         </StyledBookSliderBlock>
      </StyledLatestPublCont>
   )
}

const ImageLine = styled('div')`
   /* border: 1px solid red; */
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: -15px;
   z-index: 1;
   /* border: 1px solid red; */
   &:before {
      content: '';
      display: block;
      position: absolute;
      border: 1px solid #e24604;
      height: 100%;
      top: -20px;
      bottom: 0;
      left: 0;
      z-index: 1;
   }
   &:after {
      content: '';
      display: block;
      position: absolute;
      border: 1px solid #e24604;
      height: 100%;
      top: 0;
      right: 0;
      bottom: -30px;
      z-index: 1;
   }
`

const ImageBlock = styled('div')`
   /* border: 1px solid red; */
   height: 445px;
   position: relative;
   z-index: 10;
   /* overflow: hidden; */
   &::after,
   &:before {
      content: '';
      display: block;
      border: 1px solid #e24604;
      position: absolute;
      left: -30px;
      right: -30px;
   }
`

const Image = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
   position: relative;
   z-index: 10;
   /* opacity: 0; */
`

const StyledTitle = styled.div`
   width: 100%;
   /* border: 1px solid red; */
   display: flex;
   justify-content: space-between;
   align-items: center;
   & p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 130%;
   }
`

const LinkBlock = styled.div`
   /* border: 1px solid red; */
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
const StyledBookPrice = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   color: #ff4c00;
`
const StyledBookSliderBlock = styled.div`
   /* border: 1px solid red; */
   padding: 50px 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const StyledLatestPublCont = styled.div`
   /* border: 1px solid red; */
   padding: 90px 20px;
   background: #1c1c1c;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const StyledLatestPublText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 130%;
   color: #f8f8f8;
`
const StyledGenresBlock = styled.div`
   /* border: 1px solid red; */
   /* width: 159px; */
   /* height: 246px; */
   overflow: hidden;
`
const GenresSpan = styled('span')`
   /* border: 1px solid red; */
   position: relative;
   z-index: 10;
   padding-left: 15px;
   background-color: #1c1c1c;
`
const StyledGenresText = styled.p`
   margin: 0;
   padding: 10px 0;
   /* border: 1px solid red; */
   width: 250px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   color: #969696;
   cursor: pointer;
   transition: ease-in-out 0.5s;
   position: relative;
`
const StyledBookImage = styled.div`
   /* border: 1px solid red; */
   width: 282px;
   height: 445px;
   transition: transform 1s ease 0s;
   transform: rotate(10deg);
   position: relative;
   z-index: 20;
   &:hover {
      transform: rotate(0deg);
   }
`
const StyledBookDescriptionBlock = styled.div`
   /* border: 1px solid red; */
   width: 365px;
   /* height: 229px; */
   & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`
const StyledLatestBookName = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   text-transform: uppercase;
   color: #d1d1d1;
   margin: 0;
   margin-bottom: 60px;
`
const StyledLatestBookDesc = styled.p`
   text-align: left;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #d1d1d1;
`
