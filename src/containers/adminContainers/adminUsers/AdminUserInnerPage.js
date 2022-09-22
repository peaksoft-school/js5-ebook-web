import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import {
   NavLink,
   Navigate,
   Route,
   Routes,
   useParams,
   // Outlet,
} from 'react-router-dom'
import AdminUserProfile from './AdminUserProfile'
import AdminUserHistory from './AdminUserHistory'
import BreadCrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'

const AdminUserInnerPage = () => {
   const { user } = useSelector((state) => state.adminUsers)
   const { userId } = useParams()
   const pathTranslate = {
      users: 'Пользователи',
      [userId]: user.name,
      adminUserProfile: 'Профиль',
      adminUserHistory: 'История оперций',
      purchasedHistory: 'Купленные ',
      favorite: 'В избранном',
      basket: 'В корзине ',
   }
   return (
      <StyledTabBlock>
         <BreadCrumbs translate={pathTranslate} />
         <Div>
            <NavLink to="adminUserProfile">Профиль </NavLink>
            <NavLink to="adminUserHistory">История оперций</NavLink>
         </Div>
         <Routes>
            <Route
               path="/"
               element={<Navigate to="adminUserProfile" replace />}
            />
            <Route path="adminUserProfile" element={<AdminUserProfile />} />
            <Route path="adminUserHistory/*" element={<AdminUserHistory />} />
         </Routes>
      </StyledTabBlock>
   )
}

export default AdminUserInnerPage

const StyledTabBlock = styled.div``
const Div = styled('div')`
   display: flex;
   justify-content: space-evenly;
   height: 185px;
   margin-top: 100px;
   & a {
      text-decoration: none;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #222222;
      .current {
         color: #f34901;
      }
   }
   & a.active {
      color: #f34901;
      text-decoration: underline;
   }
`
