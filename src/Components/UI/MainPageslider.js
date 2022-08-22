//

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { styled } from '@mui/material'
import AboutSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactComponent as NextIcon } from '../../assets/icons/slider/next.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/slider/prev.svg'

const NextArrow = ({ onClick }) => {
   return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div className="arrow next" onClick={onClick}>
         <NextIcon />
      </div>
   )
}
// eslint-disable-next-line react/no-unstable-nested-components
const PrevArrow = ({ onClick }) => {
   return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div className="arrow prev" onClick={onClick}>
         <ArrowIcon />
      </div>
   )
}
function MainPageSlider({ images }) {
   const [imageIndex, setImageIndex] = useState(0)
   const settings = {
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
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
   }
   return (
      <Container className="slider">
         <AboutSlider {...settings}>
            {images.map((img, idx) => (
               <div
                  key={img.id}
                  className={idx === imageIndex ? 'activeSlide' : 'slide'}
               >
                  <Image src={img.image} alt={img} />
                  <BookInfoBlock>
                     <BookInfoItem>
                        <Title>{img.name}</Title>
                     </BookInfoItem>
                     <BookInfoItem width="80%">
                        <Author>{img.author}</Author>
                     </BookInfoItem>
                     <BookInfoItem width="20%">
                        <Price>{img.price}</Price>
                     </BookInfoItem>
                  </BookInfoBlock>
               </div>
            ))}
         </AboutSlider>
      </Container>
   )
}
export default MainPageSlider
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
   /* border: 1px solid red; */
   /* height: 30px; */
   margin: 0;
   padding: 0;
   width: ${(props) => props.width || '100%'};
`
const BookInfoBlock = styled('div')`
   /* border: 1px solid red; */
   width: 292px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   opacity: 0;
   transition: ease-in 0.2s;
`
const Container = styled('div')`
   width: 480px;
   /* margin: 97px auto; */
   /* margin-bottom: 155px; */
   /* border: 1px solid red; */
   .slide {
      transform: scale(0.5);
      /* transition: ease-in transform 900ms; */
      transition: 900ms;
      margin-left: -35px;
      position: relative;
      z-index: 0;
   }
   .arrow.next {
      /* border: 1px solid aqua; */
      background-color: rgba(0, 0, 0, 0);
      right: -150px;
   }
   .arrow.prev {
      /* border: 1px solid aqua; */
      background-color: rgba(0, 0, 0, 0);
      left: -150px;
   }
   .activeSlide {
      /* transform: scale(1); */
      /* transition: transform 900ms; */
      transition: 900ms;
      margin-left: -65px;
      position: relative;
      z-index: 10;
      & > div {
         opacity: 1;
      }
   }
   .arrow {
      /* background-color: #fff; */
      position: absolute;
      cursor: pointer;
      z-index: 10;
   }
   .arrow svg {
      transition: color 300ms;
   }
   .arrow svg:hover {
      color: #68edff;
   }
   .next {
      right: -20%;
      top: 45%;
      color: red;
   }
   .prev {
      left: -16%;
      top: 45%;
      color: red;
   }
`
const Image = styled('img')`
   width: 292px;
   margin: 0 auto;
   transition: ease-in 0.2s;
`
