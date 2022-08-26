import { Route } from 'react-router'
import ClientLayout from '../layouts/ClientLayout'
import MainPage from '../containers/clientMainPage/MainPage'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/" element={<MainPage />} />
      </Route>
   )
}
