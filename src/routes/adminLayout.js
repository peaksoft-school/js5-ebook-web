import { Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/admin-applications/AdminApplications'
import AdminBooks from '../containers/Admin/AdminBooks'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="applications" element={<AdminApplications />} />
         <Route path="/books" element={<AdminBooks />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
