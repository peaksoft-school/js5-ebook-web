import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'

export default function vendorLayout() {
   return <Route path="/" element={<VendorLayout />} />
}
