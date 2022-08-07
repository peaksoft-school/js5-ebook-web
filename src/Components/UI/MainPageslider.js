/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { styled } from '@mui/material'
import AboutSlide from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Vector from '../../assets/Vector.jpg'
import Vector2 from '../../assets/Vector2.png'

function MainPageSlider({ images }) {
   // eslint-disable-next-line react/no-unstable-nested-components
   const NextArrow = ({ onClick }) => {
      return (
         // eslint-disable-next-line jsx-a11y/no-static-element-interactions
         <div className="arrow next" onClick={onClick}>
            <img src={Vector} alt="book Vector" />
         </div>
      )
   }

   // eslint-disable-next-line react/no-unstable-nested-components
   const PrevArrow = ({ onClick }) => {
      return (
         // eslint-disable-next-line jsx-a11y/no-static-element-interactions
         <div className="arrow prev" onClick={onClick}>
            <img src={Vector2} alt="book Vector2  " />
         </div>
      )
   }

   const [imageIndex, setImageIndex] = useState(0)

   const settings = {
      dots: false,
      infinite: true,
      lazyLoad: false,
      speed: 900,
      autoplay: true,
      autoplaySpeed: 5000,
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
         <AboutSlide {...settings}>
            {images.map((img, idx) => (
               <div className={idx === imageIndex ? 'activeSlide' : 'slide'}>
                  <Image src={img} alt={img} />
               </div>
            ))}
         </AboutSlide>
      </Container>
   )
}

export default MainPageSlider

const Container = styled('div')`
   width: 532px;
   margin: 10rem auto;

   .slide {
      transform: scale(0.5);
      transition: transform 900ms;
      margin-left: -14px;
   }

   .activeSlide {
      transform: scale(1);
      transition: transform 900ms;
      margin-left: -38px;
      position: relative;
      z-index: 10;
   }

   .arrow {
      background-color: #fff;
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
      top: 50%;
      color: red;
   }

   .prev {
      left: -16%;
      top: 50%;
      color: red;
   }
`

const Image = styled('img')`
   width: 292px;
   height: 468px;
   margin: 0 auto;
`
