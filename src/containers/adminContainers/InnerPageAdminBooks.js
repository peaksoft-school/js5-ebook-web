import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Components/UI/Button/Button'
import New from '../../assets/icons/new.svg'
import { TabInnerPage } from '../TabInnerPage'
import About from '../../Components/About'
import BookFragment from '../../Components/BookFragment'
import Breadcrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'
import { applicationInnerPageAction } from '../../store/slices/adminActions/applicationInnerPageActions'
import { blockBookAction } from '../../store/slices/globalSlices'

export const InnerPageAdminInnerBook = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const { application } = useSelector((state) => state.applicationsInnerPage)

   useEffect(() => {
      dispatch(applicationInnerPageAction(id))
   }, [])
   function blockBook() {
      dispatch(blockBookAction(id))
   }

   const pathTranslate = {
      books: 'Книги',
      [id]: application.bookName,
   }

   return (
      <>
         <Breadcrumbs translate={pathTranslate} />
         <StyledMain>
            <ImageDiv>
               <StyledBookImageCont>
                  <StyledBookImage src={application.mainImage} />
                  {application.new === true ? <Img src={New} /> : ''}
                  <StyledBookImage2>
                     {application.secondImage && (
                        <img src={application.secondImage} alt="book" />
                     )}
                  </StyledBookImage2>
               </StyledBookImageCont>
               <InfoContainer>
                  <StyledBookName>{application.bookName}</StyledBookName>
                  <div>
                     <StyledPrice>{application.price}</StyledPrice>
                  </div>
                  <StyledInfo>
                     <div>
                        <StyledInfoTitle>Автор</StyledInfoTitle>
                        <StyledInfoTitle>Жанр</StyledInfoTitle>
                        <StyledInfoTitle>Язык</StyledInfoTitle>
                        <StyledInfoTitle>Издательство</StyledInfoTitle>
                        <StyledInfoTitle>Год выпуска</StyledInfoTitle>
                        <StyledInfoTitle>Обьем</StyledInfoTitle>
                     </div>
                     <div>
                        <StyledInfoText>{application.author}</StyledInfoText>
                        <StyledInfoText>{application.genre}</StyledInfoText>
                        <StyledInfoText>{application.language}</StyledInfoText>
                        <StyledInfoText>
                           {application.publishingHouse}
                        </StyledInfoText>
                        <StyledInfoText>
                           {application.yearOfIssue}
                        </StyledInfoText>
                        <StyledInfoText>{application.volume}</StyledInfoText>
                     </div>
                  </StyledInfo>

                  <StyledBtnCont>
                     <Button
                        onClick={() => blockBook()}
                        variant="universal"
                        border="1px solid"
                        background="#f34901"
                        width="195px"
                     >
                        Заблокировать
                     </Button>
                  </StyledBtnCont>
               </InfoContainer>
            </ImageDiv>
            <FragmentRequest>
               <TabInnerPage
                  about={<About about={application.description} />}
                  bookFragment={
                     <BookFragment
                        fragment={
                           application.fragment || application.audioBookFragment
                        }
                     />
                  }
               />
               <ThirdImage>
                  {application.thirdImage && (
                     <img src={application.thirdImage} alt="book" />
                  )}
               </ThirdImage>
            </FragmentRequest>
         </StyledMain>
      </>
   )
}

const InfoContainer = styled('div')`
   padding-top: 50px;
`
const FragmentRequest = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 185px;
`
const ImageDiv = styled('div')`
   display: flex;
   justify-content: flex-start;
`
const StyledBookImage2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   & img {
      width: 170px;
      margin: 0px 0px 20px 20px;
   }
`
const ThirdImage = styled('div')`
   & img {
      width: 320px;
      height: 480px;
   }
   margin-top: -49px;
`
const StyledBookName = styled.h3`
   height: 36px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 130%;
`
const StyledInfoText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 130%;
   color: #222222;
`
const StyledInfoTitle = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 12px;
   line-height: 130%;
   color: #222222;
`
const StyledBookImage = styled.img`
   width: 357px;
   margin-bottom: 185px;
   margin-right: -8px;
`
const StyledMain = styled.div`
   padding-top: 72px;
`
const StyledInfo = styled.div`
   display: flex;
   justify-content: space-between;
   width: 340px;
   height: 160px;
   margin-bottom: 50px;
`
const StyledBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 10px;
   width: 400px;
`

const StyledPrice = styled.p`
   width: 40px;
   height: 19px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 120%;
   color: #f34901;
`
const StyledBookImageCont = styled.div`
   display: flex;
   justify-content: space-between;
   width: 531px;
   margin-right: 20px;
   position: relative;
`
const Img = styled('img')`
   width: 206px;
   height: 206px;
   position: absolute;
   left: 230px;
   top: 250px;
`
