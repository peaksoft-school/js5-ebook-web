import { Route } from 'react-router'
import AdminBooks from '../containers/adminContainers/Admin/AdminBooks'
import AdminVendorInnerPage from '../containers/adminContainers/adminVendors/AdminVendorInnerPage'
import AdminVendors from '../containers/adminContainers/adminVendors/AdminVendors'
import AdminLayout from '../layouts/AdminLayout'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="/books" element={<AdminBooks />} />
         <Route path="/vendors" element={<AdminVendors />} />
         <Route path="/vendor/:vendorId" element={<AdminVendorInnerPage />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
