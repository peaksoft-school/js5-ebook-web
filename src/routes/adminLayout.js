import { Navigate, Route } from 'react-router'
import AdminBooks from '../containers/adminContainers/adminBooks/AdminBooks'
import AdminVendorInnerPage from '../containers/adminContainers/adminVendors/AdminVendorInnerPage'
import AdminVendors from '../containers/adminContainers/adminVendors/AdminVendors'
import { InnerPageAdminApplication } from '../containers/adminContainers/adminInnerPage/InnerPageAdminApplication'
import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/admin-applications/AdminApplications'
import { InnerPageAdminInnerBook } from '../containers/adminContainers/adminBooks/InnerPageAdminBooks'
import AdminUsers from '../containers/adminContainers/adminUsers/AdminUsers'
import AdminUserInnerPage from '../containers/adminContainers/adminUsers/AdminUserInnerPage'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route
            path="/main"
            element={<Navigate to="/applications" replace />}
         />
         <Route
            path="/main/catalog"
            element={<Navigate to="/applications" replace />}
         />
         <Route path="applications" element={<AdminApplications />} />
         <Route
            path="applications/:id"
            element={<InnerPageAdminApplication />}
         />
         <Route path="/users" element={<AdminUsers />} />
         <Route path="/users/:userId/*" element={<AdminUserInnerPage />} />
         <Route path="/books" element={<AdminBooks />} />
         <Route path="/books/:id" element={<InnerPageAdminInnerBook />} />
         <Route path="/vendors" element={<AdminVendors />} />
         <Route path="/vendors/:vendorId" element={<AdminVendorInnerPage />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
