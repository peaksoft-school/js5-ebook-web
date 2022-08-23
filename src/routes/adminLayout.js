import { Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/requests/AdminApplications'
import { InnerPageAdminApplication } from '../containers/adminContainers/requests/InnerPageAdminApplication'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="request" element={<AdminApplications />} />
         <Route path="request/:id" element={<InnerPageAdminApplication />} />
      </Route>
   )
}
