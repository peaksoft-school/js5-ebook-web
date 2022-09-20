import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainPageSlider from '../../Components/UI/MainPageslider'
// import { books } from './bookImage'
import { BestComponent } from './BestComponent'
import { LatestPublic } from './LatestPublic'
import { AudioBooks } from './AudioBooks'
import { ReactComponent as MainPageIcon } from '../../assets/icons/mainPage/mainPageIcon.svg'
import MainFooter from './MainFooter'
import { getBookMainPage } from '../../store/slices/mainPageSlices'
import { SortBy, BookType } from '../../utils/constants/constants'

function MainPage() {
   const dispatch = useDispatch()
   const {
      favoriteBooksResponses,
      bestsellerBooksResponses,
      lastPublicationsBooksResponses,
      favoriteAudioBookResponses,
      favoriteElectronicBooksResponses,
   } = useSelector((store) => store.mainPage.books)

   React.useEffect(() => {
      dispatch(getBookMainPage())
   }, [])

   return (
      <StyledMainPage>
         <StyledSliderCont>
            <MainPageIconBlock />
            {favoriteBooksResponses && (
               <MainPageSlider
                  images={favoriteBooksResponses}
                  variant="mainSlider"
               />
            )}
         </StyledSliderCont>

         <BestComponent
            books={bestsellerBooksResponses}
            variant="Бестселлеры"
            type={SortBy.BESTSELLER}
         />

         <LatestPublic books={lastPublicationsBooksResponses} />

         <AudioBooks books={favoriteAudioBookResponses} />

         <BestComponent
            books={favoriteElectronicBooksResponses}
            variant="Электронные книги"
            type={BookType.ELECTRONIC_BOOK}
         />
         <MainFooter />
      </StyledMainPage>
   )
}

export default MainPage

const MainPageIconBlock = styled(MainPageIcon)`
   /* border: 1px solid red; */
   position: absolute;
   top: 1px;
   left: -7px;
`

const StyledMainPage = styled.div`
   width: 100%;
   margin-top: 27px;
   /* border: 2px solid red; */
`
const StyledSliderCont = styled.div`
   background: #1c1c1c;
   height: 720px;
   padding: 60px 0;
   overflow: hidden;
   display: flex;
   justify-content: center;
   position: relative;
`
