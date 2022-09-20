import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Button from '../../../Components/UI/Button/Button'
import New from '../../../assets/icons/new.svg'
import { TabInnerPage } from './TabInnerPage'
import About from '../../../Components/About'
import BookFragment from '../../../Components/BookFragment'
import Breadcrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'
import {
   acceptApplicationInnerPage,
   applicationInnerPageAction,
} from '../../../store/slices/adminActions/applicationInnerPageActions'
import { uiSlicesSlicesActions } from '../../../store/slices/uiSlices'
import { RejectApplicationModal } from './RejectApplicationModal'
import Spinner from '../../../Components/UI/Spinner'

export const InnerPageAdminApplication = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { application, status } = useSelector(
      (state) => state.applicationsInnerPage
   )
   const isRejectModalOpen = useSelector((state) => state.uiSlice.rejectModal)
   const [isShowSpinner, setIsShowSpinner] = useState(false)
   useEffect(() => {
      dispatch(applicationInnerPageAction(id))
   }, [])
   useEffect(() => {
      if (status === 'pending') {
         setIsShowSpinner(true)
      } else {
         setIsShowSpinner(false)
      }
   })
   function acceptModal() {
      dispatch(acceptApplicationInnerPage(id, navigate))
   }
   function rejectModal() {
      dispatch(uiSlicesSlicesActions.showRejectModal())
   }
   function onCloseRejectModal() {
      dispatch(uiSlicesSlicesActions.hideRejectModal())
   }

   const pathTranslate = {
      applications: 'Заявки',
      [id]: application.bookName,
   }

   return (
      <>
         <Breadcrumbs translate={pathTranslate} />
         <StyledMain>
            {isShowSpinner && <Spinner />}
            <ImageDiv>
               <StyledBookImageCont>
                  <Img1>
                     <StyledBookImage src={application.mainImage} />
                  </Img1>
                  {application.new === true ? <NewIcon src={New} /> : ''}
                  <StyledBookImage2>
                     {application.secondImage && (
                        <Img2>
                           <Image2 src={application.secondImage} alt="book" />
                        </Img2>
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
                        onClick={() => rejectModal()}
                        variant="universal"
                        color="#f34901"
                        border="1px solid"
                        background="none"
                        width="195px"
                     >
                        Отклонить
                     </Button>

                     <Button
                        onClick={() => acceptModal()}
                        variant="universal"
                        border="1px solid"
                        background="#f34901"
                        width="195px"
                     >
                        Принять
                     </Button>

                     <RejectApplicationModal
                        id={id}
                        open={isRejectModalOpen}
                        onClose={() => onCloseRejectModal()}
                     />
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
                     <Img3>
                        <Image3 src={application.thirdImage} alt="book" />
                     </Img3>
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
   margin-top: -100px;
   width: 100%;
`
const ImageDiv = styled('div')`
   display: flex;
   justify-content: flex-start;
`
const StyledBookImage2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const ThirdImage = styled('div')`
   margin-left: 30px;
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
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const StyledMain = styled.div`
   padding-top: 72px;
   padding-bottom: 123px;
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
const Img1 = styled.div`
   width: 357px;
   height: 500px;
   margin-bottom: 185px;
   margin-right: -8px;
`
const Img2 = styled.div`
   width: 201px;
   height: 321px;
   margin: 0px 0px 20px 20px;
`
const Img3 = styled.div`
   width: 357px;
   height: 580px;
`

const NewIcon = styled('img')`
   width: 206px;
   height: 206px;
   position: absolute;
   left: 230px;
   top: 280px;
`
const Image2 = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const Image3 = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
