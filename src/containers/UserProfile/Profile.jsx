import { useState } from 'react'
import styled from '@emotion/styled'
import BreadCrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'
import Button from '../../Components/UI/Button/Button'
import { UserProfile } from './UserProfile'
import { UserHistory } from './UserHistory'
// import { UserHistory } from './UserHistory'
// import { UserProfile } from './UserProfile'

const profilePages = ['UserProfile', 'UserHistory']

export const Profile = () => {
   const [pages, setPages] = useState(0)

   const UserHistoryNav = () => {
      setPages(1)
   }
   const UserProfileNav = () => {
      setPages(0)
   }
   const pathTranslate = {
      main: 'Главная',
      profile: 'Профиль',
   }
   let showComponent
   if (profilePages[pages] === 'UserProfile') {
      showComponent = <UserProfile />
   }
   if (profilePages[pages] === 'UserHistory') {
      showComponent = <UserHistory />
   }
   return (
      <>
         <BreadBlock>
            <BreadCrumbs translate={pathTranslate} />
         </BreadBlock>
         <DivBlock>
            <ButtonBlock>
               <ButtonStyled
                  onClick={UserProfileNav}
                  primary={profilePages[pages] === `UserProfile`}
               >
                  Личная информация
               </ButtonStyled>
               <ButtonStyled
                  onClick={UserHistoryNav}
                  primary={profilePages[pages] === `UserHistory`}
               >
                  История операций
               </ButtonStyled>
            </ButtonBlock>
            {showComponent}
         </DivBlock>
      </>
   )
}

const BreadBlock = styled.div`
   /* border: 1px solid red; */
   padding: 30px 0;
`
const DivBlock = styled.div``
const ButtonBlock = styled.div`
   /* border: 1px solid red; */
   display: flex;
   width: 50%;
   margin: 20px 0 0 25%;
   justify-content: flex-end;
`
const ButtonStyled = styled(Button)`
   background-color: transparent;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: ${(props) => (props.primary ? '600' : '400')};
   font-size: 16px;
   line-height: 130%;
   color: ${(props) => (props.primary ? '#FF4C00' : '#222222')};
   border-bottom: ${(props) =>
      props.primary ? '3px solid #FF4C00' : '3px solid rgba(0,0,0,0)'};
   &:hover {
      background-color: transparent;
   }
`
