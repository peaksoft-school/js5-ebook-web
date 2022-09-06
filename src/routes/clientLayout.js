import { Route } from 'react-router'
import UserBooks from '../containers/userAllpage/UserBooks'
import ClientLayout from '../layouts/ClientLayout'
import MainPage from '../containers/clientMainPage/MainPage'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/" element={<MainPage />} />
         <Route path="/allBooks" element={<UserBooks />} />
         <Route path="/allBooks/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
