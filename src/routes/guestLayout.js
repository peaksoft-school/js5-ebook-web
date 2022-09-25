import { Route } from 'react-router'
import MainPage from '../containers/clientMainPage/MainPage'
import GuestLayout from '../layouts/GuestLayout'

export default function questLayout() {
   return (
      <Route path="/" element={<GuestLayout />}>
         <Route path="/" element={<MainPage />} />
      </Route>
   )
}
