import { Route } from 'react-router'
import ClientLayout from '../layouts/ClientLayout'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'
import { UserProfile } from '../containers/UserProfile/UserProfile'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/books/:bookId" element={<UserInnerPage />} />
         <Route path="/userProfile" element={<UserProfile />} />
      </Route>
   )
}
