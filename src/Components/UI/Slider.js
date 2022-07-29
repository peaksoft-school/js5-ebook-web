import { useState } from 'react'
import Slider from 'react-slick'

import Book from '../../assets/Book.jpg'
import BookSecond from '../../assets/BookSecond.jpg'
import BookThree from '../../assets/BookThree.jpg'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { styled } from '@mui/material'

const images = [BookThree, BookSecond, Book, Book]

function SliderMainPage() {
   const NextArrow = ({ onClick }) => {
      return (
         <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
         </div>
      )
   }

   const PrevArrow = ({ onClick }) => {
      return (
         <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
         </div>
      )
   }

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

export default SliderMainPage

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
      right: 0%;
      top: 50%;
      color: red;
   }

   .prev {
      left: 0%;
      top: 50%;
      color: red;
   }
`

const Image = styled('img')`
   width: 292px;
   height: 468pxpx;
   margin: 0 auto;
`
