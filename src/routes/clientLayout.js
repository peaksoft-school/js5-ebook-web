import { Route } from 'react-router'
import ClientLayout from '../layouts/ClientLayout'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'
import UserBooks from '../containers/userAllpage/UserBooks'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/books/:bookId" element={<UserInnerPage />} />
         <Route path="/allBooks" element={<UserBooks />} />
         <Route path="/allBooks/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
