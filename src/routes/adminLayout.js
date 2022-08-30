import { Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/admin-applications/AdminApplications'
import AdminBooks from '../containers/adminContainers/books/AdminBooks'
import { InnerPageAdminApplication } from '../containers/adminContainers/admin-applications/InnerPageAdminApplication'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="request" element={<AdminApplications />} />
         <Route path="request/:id" element={<InnerPageAdminApplication />} />
         <Route path="/books" element={<AdminBooks />} />
      </Route>
   )
}
