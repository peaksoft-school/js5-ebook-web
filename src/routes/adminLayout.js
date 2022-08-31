import { Route } from 'react-router'
import { InnerPageAdminApplication } from '../containers/adminContainers/adminInnerPage/InnerPageAdminApplication'
import AdminBooks from '../containers/adminContainers/AdminBooks'
import AdminLayout from '../layouts/AdminLayout'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="request/:id" element={<InnerPageAdminApplication />} />
         <Route path="/books" element={<AdminBooks />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
