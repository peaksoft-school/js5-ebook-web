import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import VendorLayout from '../layouts/VendorLayout'
import ClientLayout from '../layouts/ClientLayout'

function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<ClientLayout />} />
         <Route path="/vendor" element={<VendorLayout />} />
         <Route path="/admin" element={<AdminLayout />} />
      </Routes>
   )
}

export default AppRoutes
