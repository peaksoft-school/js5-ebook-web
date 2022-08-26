import { Route } from 'react-router'
import UserBooks from '../containers/userAllpage/UserBooks'
import ClientLayout from '../layouts/ClientLayout'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="/allbooks" element={<UserBooks />} />
      </Route>
   )
}
