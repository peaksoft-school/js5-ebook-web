import { Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         {/* <Route path="request" element={<AdminApplications />} />
         <Route path="request/:id" element={<InnerPageAdminApplication />} />
         <Route path="/books" element={<AdminBooks />} /> */}
      </Route>
   )
}
