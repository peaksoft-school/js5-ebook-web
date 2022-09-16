import { Route } from 'react-router'
import ClientLayout from '../layouts/ClientLayout'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'
import { UserProfile } from '../containers/UserProfile/UserProfile'
import UserBooks from '../containers/userAllpage/UserBooks'
import { UserHistory } from '../containers/UserProfile/UserHistory'
import { Profile } from '../containers/UserProfile/Profile'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/books/:bookId" element={<UserInnerPage />} />
         <Route path="/profile" element={<Profile />}>
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="userHistory" element={<UserHistory />} />
         </Route>
         <Route path="/allBooks" element={<UserBooks />} />
         <Route path="/allBooks/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
