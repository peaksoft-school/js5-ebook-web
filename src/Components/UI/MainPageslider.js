/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { styled } from '@mui/material'
import AboutSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Vector from '../../assets/Vector.jpg'
import Vector2 from '../../assets/Vector2.png'

const NextArrow = () => {
   return (
      <div className="arrow next">
         <img src={Vector} alt="book Vector" />
      </div>
   )
}
const PrevArrow = () => {
   return (
      <div className="arrow prev">
         <img src={Vector2} alt="book Vector2" />
      </div>
   )
}
function MainPageSlider({ images }) {
<<<<<<< HEAD
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

=======
>>>>>>> 88da9523e598ee93e8ece69e4eb0a75b9005ca56
   const [imageIndex, setImageIndex] = useState(0)

   const settings = {
      dots: false,
      infinite: true,
      lazyLoad: false,
      speed: 900,
      autoplay: true,
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
                  <Image src={img} alt={img} />
               </div>
            ))}
         </AboutSlider>
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
