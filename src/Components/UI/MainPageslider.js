import { useCallback, useState, useEffect } from 'react'
import { styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { useLocation, useNavigate } from 'react-router'
import 'slick-carousel/slick/slick-theme.css'
import { ReactComponent as NextIcon } from '../../assets/icons/slider/next.svg'
import { ReactComponent as PrevIcon } from '../../assets/icons/slider/prev.svg'

const NextArrow = ({ onClick, variant }) => {
   return (
      <StyledNextArrow onClick={onClick} variant={variant}>
         <NextIcon />
      </StyledNextArrow>
   )
}

const PrevArrow = ({ onClick, variant }) => {
   return (
      <StyledPrevArrow onClick={onClick} variant={variant}>
         <PrevIcon />
      </StyledPrevArrow>
   )
}

const BookInfo = ({ item }) => {
   const navigate = useNavigate()
   const location = useLocation()
   const onClickCard = () => {
      navigate(`${location.pathname}/catalog/${item.bookId}`)
   }
   return (
      <>
         <SliceImageBlock onClick={onClickCard}>
            <Image src={item.mainImage} alt={item.name} />
         </SliceImageBlock>
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
      </>
   )
}

function MainPageSlider({ images, variant, onClick }) {
   const [imageIndex, setImageIndex] = useState(0)
   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      if (onClick) {
         const findEl = images.find((el, idx) => idx === imageIndex)
         onClick(findEl)
      }
   }, [imageIndex])

   const onClickImageBlock = (id) => {
      navigate(`${location.pathname}/catalog/${id}`)
   }

   const mainSettings = {
      dots: false,
      infinite: true,
      lazyLoad: false,
      speed: 900,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: images.length > 3 ? 3 : 1,
      tabindex: -1,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow variant="mainSlider" />,
      prevArrow: <PrevArrow variant="mainSlider" />,
      beforeChange: (current, next) => setImageIndex(next),
   }
   const settings = {
      autoplay: false,
      slidesToShow: images.length > 3 ? 3 : 1,
      speed: 900,
      slidesToScroll: 1,
      centerMode: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
   }
   const nextIdx = useCallback((index, length) => {
      let value = index + 1
      if (index === length) {
         value = 0
      }
      return value
   }, [])
   return (
      <div>
         {variant === 'mainSlider' ? (
            <Container className="slider">
               <Slider {...mainSettings}>
                  {images.map((item, idx) => (
                     <div
                        key={item.bookId}
                        className={idx === imageIndex ? 'activeSlide' : 'slide'}
                     >
                        <BookInfo item={item} />
                     </div>
                  ))}
               </Slider>
            </Container>
         ) : (
            <Slider2 {...settings}>
               {images.map((item, idx, array) => {
                  if (idx === nextIdx(imageIndex, array.length - 1)) {
                     return (
                        <SliderItem key={item.bookId} className="slider1">
                           <ImageBlock
                              onClick={() => onClickImageBlock(item.bookId)}
                           >
                              <Image src={item.mainImage} alt="book" />
                           </ImageBlock>
                        </SliderItem>
                     )
                  }
                  return (
                     <SliderItem
                        key={item.bookId}
                        className={idx === imageIndex ? 'activeSlide' : 'slide'}
                     >
                        <ImageBlock
                           onClick={() => onClickImageBlock(item.bookId)}
                        >
                           <Image src={item.mainImage} alt="book" />
                        </ImageBlock>
                     </SliderItem>
                  )
               })}
            </Slider2>
         )}
      </div>
   )
}
export default MainPageSlider

const Slider2 = styled(Slider)`
   /* border: 1px solid red; */
   height: 543px;
   .activeSlide {
      /* border: 1px solid blue; */
      transform: scale(1);
      position: relative;
      top: 0px;
      left: 5px;
   }
   .slider1 {
      position: relative;
      left: 40px;
      transition: 900ms;
   }
`

const SliderItem = styled('div')`
   /* border: 1px solid red; */
   transform: scale(0.6);
   position: relative;
   top: 82px;
   left: 0;
   transition: 900ms;
`

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
   /* border: 1px solid red; */
   width: 600px;
   height: 600px;
   .slide {
      transform: scale(0.5);
      transition: 900ms;
      position: relative;
      margin-top: 30px;
      top: 0px;
      left: -26px;
      z-index: 1;
   }
   .activeSlide {
      transition: 900ms;
      /* border: 1px solid red; */
      position: relative;
      margin-top: 30px;
      top: 0px;
      left: -50px;
      z-index: 10;
      & > div {
         opacity: 1;
      }
   }

   .arrow svg {
      transition: color 300ms;
   }
   .arrow svg:hover {
      color: #68edff;
   }
`
const StyledNextArrow = styled('div')`
   position: absolute;
   right: ${(props) => (props.variant === 'mainSlider' ? '-15%' : '0px')};
   top: ${(props) => (props.variant === 'mainSlider' ? '45%' : '480px')};
   cursor: pointer;
   z-index: 10;
`
const StyledPrevArrow = styled('div')`
   position: absolute;
   left: ${(props) => (props.variant === 'mainSlider' ? '-16%' : '520px')};
   top: ${(props) => (props.variant === 'mainSlider' ? '45%' : '480px')};
   cursor: pointer;
   z-index: 10;
`
const SliceImageBlock = styled('div')`
   /* border: 1px solid red; */
   width: 292px;
   height: 468px;
`
const Image = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const ImageBlock = styled('div')`
   /* border: 1px solid red; */
   width: 294px;
   height: 443px;
`
