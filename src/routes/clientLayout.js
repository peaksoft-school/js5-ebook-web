import { Route } from 'react-router'
import ClientLayout from '../layouts/ClientLayout'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'
import UserBsket from '../containers/UserBsket'
import Basket from '../containers/Basket'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/" element={<UserBsket />} />
         {/* <Route path="/basket" element={<Basket />} /> */}
         <Route path="/basket/:id" element={<Basket />} />
         <Route path="/books/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
