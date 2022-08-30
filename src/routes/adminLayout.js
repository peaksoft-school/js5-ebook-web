import { Route } from 'react-router'
import { InnerPageAdminApplication } from '../containers/adminContainers/adminInnerPage/InnerPageAdminApplication'
import AdminLayout from '../layouts/AdminLayout'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="innerpage" element={<InnerPageAdminApplication />} />
      </Route>
   )
}
