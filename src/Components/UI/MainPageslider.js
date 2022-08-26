/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactComponent as NextIcon } from '../../assets/icons/slider/next.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/slider/prev.svg'

const NextArrow = ({ onClick, variant }) => {
   return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <StyledNextArrow onClick={onClick}>
         <NextIcon variant={variant} />
      </StyledNextArrow>
   )
}
// eslint-disable-next-line react/no-unstable-nested-components
const PrevArrow = ({ onClick }) => {
   return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <StyledPrevArrow onClick={onClick}>
         <ArrowIcon />
      </StyledPrevArrow>
   )
}

function MainPageSlider({ images, variant }) {
   const [imageIndex, setImageIndex] = useState(0)
   const mainSettings = {
      dots: false,
      infinite: true,
      lazyLoad: false,
      speed: 900,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      tabindex: -1,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow variant="mainSlider" />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
   }
   const settings = {
      autoplay: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
   }
   return (
      <div>
         {variant === 'mainSlider' ? (
            <Container className="slider">
               <Slider {...mainSettings}>
                  {images.map((item, idx) => (
                     <div
                        key={item.id}
                        className={idx === imageIndex ? 'activeSlide' : 'slide'}
                     >
                        <Image src={item.image} alt={item} />
                        <BookInfoBlock>
                           <BookInfoItem>
                              <Title>{item.name}</Title>
                           </BookInfoItem>
                           <BookInfoItem width="80%">
                              <Author>{item.author}</Author>
                           </BookInfoItem>
                           <BookInfoItem width="20%">
                              <Price>{item.price}</Price>
                           </BookInfoItem>
                        </BookInfoBlock>
                     </div>
                  ))}
               </Slider>
            </Container>
         ) : (
            <Slider {...settings}>
               {images.map((item, idx) => (
                  <div
                     key={item.id}
                     className={idx === imageIndex ? 'activeSlide' : 'slide'}
                  >
                     {/* <StyledBookTitle>
                        <StyledBookName>{item.name}</StyledBookName>
                        <StyledBookDescription>
                           {item.description}
                        </StyledBookDescription>
                        <div>
                           <StyledNavLink href="/">Подробнее</StyledNavLink>
                           <StyledBookPrice>{item.price}</StyledBookPrice>
                        </div>
                     </StyledBookTitle> */}
                     <StyledSliderImage src={item.image} alt="book" />
                  </div>
               ))}
            </Slider>
         )}
      </div>
   )
}
export default MainPageSlider

// const StyledBookTitle = styled('div')`
//    width: 492px;
//    height: 423px;
//    display: flex;
//    flex-direction: column;
//    & div {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//    }
// `
// const StyledBookName = styled('p')`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 56px;
//    line-height: 130%;
// `
// const StyledBookDescription = styled('p')`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 16px;
//    line-height: 130%;
// `
// const StyledNavLink = styled('a')`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 14px;
//    line-height: 120%;
//    text-decoration-line: underline;
//    color: #ff4c00;
// `
// const StyledBookPrice = styled('p')`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 16px;
//    line-height: 130%;
//    color: #ff4c00;
// `
const Title = styled('h3')`
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 16px;
   color: #d6d6d6;
   padding: 0;
   padding-top: 20px;
   margin: 0;
`
const Author = styled(Title)`
   font-size: 14px;
   color: #8c8c8c;
   padding-top: 10px;
`
const Price = styled(Title)`
   font-weight: 600;
   color: #ff4c00;
   text-align: right;
   padding-top: 10px;
`
const BookInfoItem = styled('div')`
   margin: 0;
   padding: 0;
   width: ${(props) => props.width || '100%'};
`
const BookInfoBlock = styled('div')`
   width: 292px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   opacity: 0;
   transition: ease-in 0.2s;
`
const Container = styled('div')`
   width: 480px;
   /* .slide {
      transform: scale(0.5);
      transition: 900ms;
      margin-left: -35px;
      position: relative;
      z-index: 0; */
   width: 532px;
   margin: 10rem auto;

   .slide {
      transform: scale(0.5);
      transition: transform 900ms;
      margin-left: -35px;
   }
   .activeSlide {
      transition: 900ms;
      margin-left: -65px;
      position: relative;
      z-index: 10;
      & > div {
         opacity: 1;
      }
      /* transform: scale(1);
         transition: transform 900ms;
         margin-left: -38px;
         position: relative;
         z-index: 10; */
   }
   /* .arrow {
      position: absolute;
      cursor: pointer;
      z-index: 10;
   } */
   .arrow svg {
      transition: color 300ms;
   }
   .arrow svg:hover {
      color: #68edff;
   }
`
const StyledNextArrow = styled('div')`
   position: absolute;
   right: -20%;
   top: 45%;
   /* right: ${(props) => (props.variant === 'mainSlider' ? '-20%' : '-20%')};
   top: ${(props) => (props.variant === 'mainSlider' ? '45%' : '45%')}; */
   cursor: pointer;
   z-index: 10;
`
const StyledPrevArrow = styled('div')`
   position: absolute;
   left: -16%;
   top: 45%;
   cursor: pointer;
   z-index: 10;
`
const Image = styled('img')`
   width: 292px;
   /* margin: 0 auto;
   transition: ease-in 0.2s; */
`
const StyledSliderImage = styled('img')`
   width: 220px;
   margin-right: 20px;
`
