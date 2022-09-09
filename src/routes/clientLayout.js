import { Navigate, Route } from 'react-router'
import UserBooks from '../containers/userAllpage/UserBooks'
import ClientLayout from '../layouts/ClientLayout'
import MainPage from '../containers/clientMainPage/MainPage'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/" element={<Navigate to="/main" replace />} />
         <Route path="/main" element={<MainPage />} />
         <Route path="/main/:bookId" element={<UserInnerPage />} />
         <Route path="/catalog" element={<UserBooks />} />
         <Route path="/catalog/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
