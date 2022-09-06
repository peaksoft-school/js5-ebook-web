import { Route } from 'react-router'
import UserBooks from '../containers/userAllpage/UserBooks'
import ClientLayout from '../layouts/ClientLayout'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/allBooks" element={<UserBooks />} />
         <Route path="/allBooks/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
