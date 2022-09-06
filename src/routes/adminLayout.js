import { Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'
import AdminBooks from '../containers/Admin/AdminBooks'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="/books" element={<AdminBooks />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
