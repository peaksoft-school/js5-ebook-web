import { Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/admin-applications/AdminApplications'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="request" element={<AdminApplications />} />
      </Route>
   )
}
