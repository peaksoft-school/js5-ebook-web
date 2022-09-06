import { Route } from 'react-router'
import ClientLayout from '../layouts/ClientLayout'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/books/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
