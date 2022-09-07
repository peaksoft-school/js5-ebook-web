import { Navigate, Route } from 'react-router'
import { InnerPageAdminApplication } from '../containers/adminContainers/adminInnerPage/InnerPageAdminApplication'
import AdminBooks from '../containers/adminContainers/AdminBooks'
import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/admin-applications/AdminApplications'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="/" element={<Navigate to="/applications" replace />} />
         <Route path="applications" element={<AdminApplications />} />
         <Route
            path="applications/:id"
            element={<InnerPageAdminApplication />}
         />
         <Route path="/books" element={<AdminBooks />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
