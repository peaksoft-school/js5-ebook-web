import styled from '@emotion/styled'
import { Outlet, useNavigate, useLocation } from 'react-router'
import BreadCrumbs from '../../Components/UI/breadCrumbs/Breadcrumbs'
import Button from '../../Components/UI/Button/Button'
// import { UserHistory } from './UserHistory'
// import { UserProfile } from './UserProfile'

export const Profile = () => {
   const navigate = useNavigate()
   const location = useLocation()

   const UserHistoryNav = () => {
      navigate(`/main/profile/UserHistory`)
   }
   const UserProfileNav = () => {
      navigate(`/main/profile/UserProfile`)
   }
   const pathTranslate = {
      profile: 'Профиль',
      userProfile: 'Личная информация',
   }
   return (
      <>
         <BreadCrumbs translate={pathTranslate} />
         <DivBlock>
            <ButtonBlock>
               <ButtonStyled
                  onClick={UserProfileNav}
                  primary={location.pathname === `/main/profile/UserProfile`}
               >
                  Личная информация
               </ButtonStyled>
               <ButtonStyled
                  onClick={UserHistoryNav}
                  primary={location.pathname === `/main/profile/UserHistory`}
               >
                  История операций
               </ButtonStyled>
            </ButtonBlock>
            <Outlet />
         </DivBlock>
      </>
   )
}

const DivBlock = styled.div``
const ButtonBlock = styled.div`
   display: flex;
   width: 50%;
   margin: 20px 0 0 25%;
   justify-content: flex-end;
`
const ButtonStyled = styled(Button)`
   background-color: transparent;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: ${(props) => (props.primary ? 'red' : '#222222')};
   border-bottom: ${(props) => (props.primary ? '2px solid #FF4C00' : 'none')};
   &:hover {
      background-color: transparent;
   }
`
