import styled from 'styled-components'
// import { books } from './bookImage'

export const LatestPublic = () => {
   return (
      <StyledLatestPublCont>
         <StyledTitle>
            <StyledLatestPublText>Последние публикации</StyledLatestPublText>
            <StyledNavLink href="/">Смотреть все</StyledNavLink>
         </StyledTitle>
         <StyledBookSliderBlock>
            <StyledGenresBlock>
               <StyledGenresText>Бизнес-литература</StyledGenresText>
               <StyledGenresText>Детские книги</StyledGenresText>
               <StyledGenresText>Хобби и досуг</StyledGenresText>
               <StyledGenresText>Публицистика</StyledGenresText>
               <StyledGenresText>Учебная литература</StyledGenresText>
               <StyledGenresText>Поэзия</StyledGenresText>
            </StyledGenresBlock>
            <ImageBlock>
               <ImageLine />
               <StyledBookImage>
                  <Image
                     src="https://img3.labirint.ru/rc/d943b98184660c6b520981a20bd8421d/363x561q80/books55/548551/cover.jpg?1563945229"
                     alt="book"
                  />
               </StyledBookImage>
            </ImageBlock>
            <StyledBookDescriptionBlock>
               <StyledLatestBookName>История книги</StyledLatestBookName>
               <StyledLatestBookDesc>
                  Предлагаемый перевод является первой попыткой обращения
                  ктворчеству Павла Орозия— римского христианского историка
                  начала V века, сподвижника исовременника знаменитого Августина
                  Блаженн...
               </StyledLatestBookDesc>
               <div>
                  <StyledNavLink href="/">Подробнее</StyledNavLink>
                  <StyledBookPrice>456 с</StyledBookPrice>
               </div>
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
      top: -30px;
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

const StyledNavLink = styled.a`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   text-decoration-line: underline;
   color: #ff4c00;
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
   border: 1px solid red;
   padding: 100px 20px;
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
const StyledGenresText = styled.p`
   margin: 0;
   padding: 10px 0;
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #969696;
`
const StyledBookImage = styled.div`
   /* border: 1px solid red; */
   width: 282px;
   transition: transform 1s ease 0s;
   transform: rotate(10deg);
   position: relative;
   z-index: 20;
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
