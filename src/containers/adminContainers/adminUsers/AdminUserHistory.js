import { styled } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router'
import BasketHistory from './BasketHistory'
import PurchasedHistory from './PurchasedHistory'
import FavoriteHistory from './FavoriteHistory'
import UserTab from './UserTab'

const AdminUserHistory = () => {
   return (
      <Div>
         <UserTabs>
            <ClearHistory>Очистить историю</ClearHistory>
            <LineHorizontal />
            <UserTab />
         </UserTabs>
         <Line />
         <Panels>
            <Routes>
               <Route
                  path="/"
                  element={<Navigate to="purchasedHistory" replace />}
               />
               <Route path="purchasedHistory" element={<PurchasedHistory />} />
               <Route path="favorite" element={<FavoriteHistory />} />
               <Route path="basket" element={<BasketHistory />} />
            </Routes>
         </Panels>
      </Div>
   )
}

export default AdminUserHistory
const ClearHistory = styled('p')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #545454;
`
const Div = styled('div')`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   margin-top: -120px;
   margin-bottom: 50px;
`
const LineHorizontal = styled('div')`
   border-bottom: 1px solid #c4c4c4;
   width: 180px;
   margin-top: -4px;
`
const Line = styled('div')`
   border-right: 1px solid #c4c4c4;
   margin-top: 46px;
`
const UserTabs = styled('div')`
   width: 20%;
   padding-top: 4px;
`
const Panels = styled('div')`
   width: 80%;
   margin-top: 50px;
   height: 100%;
`
