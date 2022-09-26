import { Navigate, Route } from 'react-router'
import UserBooks from '../containers/userAllpage/UserBooks'
import ClientLayout from '../layouts/ClientLayout'
import MainPage from '../containers/clientMainPage/MainPage'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'
import { Profile } from '../containers/UserProfile/Profile'
import WishList from '../containers/userAllpage/wishList/WishList'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/" element={<Navigate to="/main" replace />} />
         <Route path="/main" element={<MainPage />} />
         <Route path="/main/catalog" element={<UserBooks />} />
         <Route path="/main/catalog/:bookId" element={<UserInnerPage />} />
         <Route path="/main/profile" element={<Profile />} />
         <Route path="/main/favorite" element={<WishList />} />
         <Route path="/main/favorite/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
