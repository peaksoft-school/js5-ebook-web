import { Route } from 'react-router'
import AdminBooks from '../containers/Admin/AdminBooks'
import AdminLayout from '../layouts/AdminLayout'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="/books" element={<AdminBooks />} />
      </Route>
   )
}
