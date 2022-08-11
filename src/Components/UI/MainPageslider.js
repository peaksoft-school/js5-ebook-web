import { useState } from 'react'
import Slider from 'react-slick'
import { styled } from '@mui/material'
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
   const [imageIndex, setImageIndex] = useState(0)

   const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
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
         <Slider {...settings}>
            {images.map((img, idx) => (
               <div className={idx === imageIndex ? 'activeSlide' : 'slide'}>
                  <Image src={img} alt={img} />
               </div>
            ))}
         </Slider>
      </Container>
   )
}

export default MainPageSlider

const Container = styled('div')`
   width: 632px;
   margin: 10rem auto;

   .slide {
      transform: scale(0.6);
      transition: transform 600ms;
      opacity: 0.5;
      z-index: -10;
      margin-left: -10px;
   }

   .activeSlide {
      transform: scale(1);
      z-index: 1;
      opacity: 1;
      margin-left: -16px;
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
   height: 468pxpx;
   margin: 0 auto;
`
