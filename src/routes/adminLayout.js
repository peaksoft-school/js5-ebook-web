import { Navigate, Route } from 'react-router'
import { InnerPageAdminApplication } from '../containers/adminContainers/adminInnerPage/InnerPageAdminApplication'

import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/admin-applications/AdminApplications'
import AddBookPage from '../containers/vendorContainers/vendorBookMainPage/AddBookPage'
import AdminBooks from '../containers/adminContainers/AdminBooks'

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
         <Route path="/books/addBook" element={<AddBookPage />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
