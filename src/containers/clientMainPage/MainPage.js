import styled from '@emotion/styled'
import React from 'react'
import MainPageSlider from '../../Components/UI/MainPageslider'
// import { books } from './bookImage'
import { BestComponent } from './BestComponent'
import { LatestPublic } from './LatestPublic'
import { AudioBooks } from './AudioBooks'
import { ReactComponent as MainPageIcon } from '../../assets/icons/mainPage/mainPageIcon.svg'
import appFetch from '../../hooks/appFetch'
import MainFooter from './MainFooter'
// import appFetch from '../../hooks/appFetch'
// import { ReactComponent as MeatIcon } from '../../assets/icons/bookCard/audioBook.svg'

function MainPage() {
   const [favoritBooks, setFavoritBooks] = React.useState()
   const [besteller, setBestseller] = React.useState(null)
   const [last, setLast] = React.useState(null)
   const [eletronics, setElectronics] = React.useState(null)
   const [audioBooks, setAudioBooks] = React.useState(null)
   // console.log(audioBooks)
   const getBooks = React.useCallback(async () => {
      const result = await appFetch({
         url: '/api/users/mainPage',
      })
      console.log(result)
      setFavoritBooks(() => {
         return result.favoriteBooksResponses.map((el) => {
            return {
               ...el,
               image: el.mainImage,
               id: el.bookId,
            }
         })
      })
      setBestseller(() => {
         return result.bestsellerBooksResponses.map((el) => {
            return {
               ...el,
               image: el.mainImage,
               id: el.bookId,
            }
         })
      })
      setLast(() => {
         return result.lastPublicationsBooksResponses.map((el) => {
            return {
               ...el,
               image: el.mainImage,
               id: el.bookId,
            }
         })
      })
      setElectronics(() => {
         return result.favoriteElectronicBooksResponses.map((el) => {
            return {
               ...el,
               image: el.mainImage,
               id: el.bookId,
            }
         })
      })
      setAudioBooks(() => {
         return result.favoriteAudioBookResponses.map((el) => {
            return {
               ...el,
               image: el.mainImage,
               id: el.bookId,
            }
         })
      })
   }, [])
   React.useEffect(() => {
      getBooks()
   }, [])

   return (
      <StyledMainPage>
         <StyledSliderCont>
            <MainPageIconBlock />
            {favoritBooks && (
               <MainPageSlider images={favoritBooks} variant="mainSlider" />
            )}
         </StyledSliderCont>

         <BestComponent books={besteller} variant="Бестселлеры" />

         <LatestPublic books={last} />

         <AudioBooks books={audioBooks} />

         <BestComponent variant="Электронные книги" books={eletronics} />
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
