import { Navigate, Route } from 'react-router'
import UserBooks from '../containers/userAllpage/UserBooks'
import ClientLayout from '../layouts/ClientLayout'
import MainPage from '../containers/clientMainPage/MainPage'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'
import { UserHistory } from '../containers/UserProfile/UserHistory'
import { Profile } from '../containers/UserProfile/Profile'
import { UserProfile } from '../containers/UserProfile/UserProfile'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/" element={<Navigate to="/main" replace />} />
         <Route path="/main" element={<MainPage />} />
         <Route path="/main/catalog" element={<UserBooks />} />
         <Route path="/main/catalog/:bookId" element={<UserInnerPage />} />
         <Route path="/main/profile" element={<Profile />}>
            <Route
               path="/main/profile"
               element={<Navigate to="/main/profile/userProfile" replace />}
            />
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="userHistory" element={<UserHistory />} />
         </Route>
      </Route>
   )
}
