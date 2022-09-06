import styled from '@emotion/styled'
import React from 'react'
import Button from '../../Components/UI/Button/Button'
import InputText from '../../Components/UI/Inputs/InputText'
import MainPageSlider from '../../Components/UI/MainPageslider'
import { books } from './bookImage'
import { BestComponent } from './BestComponent'
import { LatestPublic } from './LatestPublic'
import { AudioBooks } from './AudioBooks'
import { ReactComponent as MainPageIcon } from '../../assets/icons/mainPage/mainPageIcon.svg'

function MainPage() {
   return (
      <StyledMainPage>
         <StyledSliderCont>
            <MainPageIconBlock />
            <MainPageSlider images={books} variant="mainSlider" />
         </StyledSliderCont>

         <BestComponent />

         <LatestPublic />

         <AudioBooks />

         <BestComponent />

         <StyledMainFooter>
            <StyledMailingCont>
               <p>Подписаться на рассылку</p>
               <div>
                  <InputText placeholder="Напишите ваш E-mail" />
                  <Button variant="universal" background="black" width="137px">
                     Отправить
                  </Button>
               </div>
            </StyledMailingCont>
            <StyledSocialMedia>
               <p>Instagram</p>
               <p>Facebook</p>
               <p>Bконтакте</p>
            </StyledSocialMedia>
         </StyledMainFooter>
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

export const StyledMainPage = styled.div`
   width: 100%;
   margin-top: 27px;
   /* border: 2px solid red; */
`
export const StyledSliderCont = styled.div`
   background: #1c1c1c;
   padding: 90px 0;
   display: flex;
   justify-content: center;
   position: relative;
`
export const StyledBestSlider = styled.div`
   /* border: 1px solid red; */
   padding: 100px 0px;
   /* padding-bottom: 250px; */
   width: 100%;
`
export const StyledTitle = styled.div`
   width: 100%;
   /* border: 1px solid red; */
   display: flex;
   justify-content: space-between;
   align-items: center;
   & p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 130%;
   }
`
export const StyledBestText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 130%;
`
export const StyledBookDescription = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
`
export const StyledNavLink = styled.a`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   text-decoration-line: underline;
   color: #ff4c00;
`
export const StyledBookPrice = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   color: #ff4c00;
`
export const StyledBookSliderBlock = styled.div`
   /* border: 1px solid red; */
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const StyledBookTitle = styled.div`
   /* border: 1px solid red; */
   width: 492px;
   height: 423px;
   display: flex;
   flex-direction: column;
   & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`
export const StyledBookName = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 56px;
   line-height: 130%;
`
export const StyledBookSlider = styled.div`
   /* border: 1px solid red; */
   width: 700px;
   height: 443px;
   margin-top: 200px;
`
export const StyledLatestPublCont = styled.div`
   padding: 150px 50px;
   background: #1c1c1c;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const StyledLatestPublText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 130%;
   color: #f8f8f8;
`
export const StyledGenresBlock = styled.div`
   width: 159px;
   height: 246px;
`
export const StyledGenresText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #969696;
`
export const StyledBookImage = styled.div`
   width: 342px;
   transition: transform 1s ease 0s;
   &:hover {
      transform: rotate(9.34deg);
   }
`
export const StyledBookDescriptionBlock = styled.div`
   width: 365px;
   height: 229px;
   & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`
export const StyledLatestBookName = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   text-transform: uppercase;
   color: #d1d1d1;
`
export const StyledLatestBookDesc = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #d1d1d1;
`
export const StyledAudioBooksCont = styled.div`
   width: 100%;
   padding: 150px 0px;
`
export const StyledBookCardTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const StyledBookCardCont = styled.div`
   width: 100%;
   height: 747px;
   display: flex;
   justify-content: space-between;
   .first {
      align-self: flex-end;
   }
   .second {
      align-self: center;
   }
`
export const StyledBookCard = styled.div`
   width: 309px;
   display: flex;
   flex-direction: column;
`
export const StyledBookCardName = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   text-transform: uppercase;
   color: #222222;
`
export const StyledBookCardAuthor = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #334433;
`
export const StyledBookCardTime = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8c8c8c;
`
export const StyledMainFooter = styled.div`
   padding: 150px 0px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`
export const StyledMailingCont = styled.div`
   width: 1091px;
   height: 111px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   & p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 120%;
      color: #222222;
   }
   & div {
      display: flex;
   }
`
export const StyledSocialMedia = styled.div`
   display: flex;
   justify-content: space-between;
   width: 701px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 22px;
   line-height: 130%;
   color: #222222;
`
