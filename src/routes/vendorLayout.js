import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import AddBookPage from '../containers/vendorMainPage/AddBookPage'

export default function vendorLayout() {
   return (
      <Route path="*" element={<VendorLayout />}>
         <Route path="addbook" element={<AddBookPage />} />
      </Route>
   )
}
