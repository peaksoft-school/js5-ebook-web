import React from 'react'
import styled from 'styled-components'
import Button from '../../Components/UI/Button/Button'
import InputText from '../../Components/UI/Inputs/InputText'

const MainFooter = () => {
   return (
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
   )
}

export default MainFooter

const StyledMainFooter = styled.div`
   padding: 60px 0px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`
const StyledMailingCont = styled.div`
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
const StyledSocialMedia = styled.div`
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
