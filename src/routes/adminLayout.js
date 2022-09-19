import { Navigate, Route } from 'react-router'
import AdminBooks from '../containers/adminContainers/Admin/AdminBooks'
import AdminVendorInnerPage from '../containers/adminContainers/adminVendors/AdminVendorInnerPage'
import AdminVendors from '../containers/adminContainers/adminVendors/AdminVendors'
import { InnerPageAdminApplication } from '../containers/adminContainers/adminInnerPage/InnerPageAdminApplication'
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
         <Route path="/vendors" element={<AdminVendors />} />
         <Route path="/vendors/:vendorId" element={<AdminVendorInnerPage />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
