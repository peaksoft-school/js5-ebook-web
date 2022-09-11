import { Navigate, Route } from 'react-router'
import { InnerPageAdminApplication } from '../containers/adminContainers/adminInnerPage/InnerPageAdminApplication'
import AdminBooks from '../containers/adminContainers/AdminBooks'
import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/admin-applications/AdminApplications'
import AdminUsers from '../containers/adminContainers/adminUsers/AdminUsers'
import AdminUserInnerPage from '../containers/adminContainers/adminUsers/AdminUserInnerPage'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="/" element={<Navigate to="/applications" replace />} />
         <Route path="applications" element={<AdminApplications />} />
         <Route
            path="applications/:id"
            element={<InnerPageAdminApplication />}
         />
         <Route path="/users" element={<AdminUsers />} />
         <Route path="/user/:userId" element={<AdminUserInnerPage />} />
         <Route path="/books" element={<AdminBooks />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
