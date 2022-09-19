import { Route, Navigate } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import { InnerPage } from '../containers/vendorContainers/vendorBookInnerPage/InnerPage'
import AddBookPage from '../containers/vendorContainers/vendorBookMainPage/AddBookPage'
import VendorMainPage from '../containers/vendorContainers/vendorMainPage/VendorMainPage'
import { VendorProfile } from '../containers/VendorProfile/VendorProfile'

export default function vendorLayout() {
   return (
      <Route path="/" element={<VendorLayout />}>
         <Route path="/" element={<Navigate to="/main" replace />} />
         <Route path="main" element={<VendorMainPage />} />
         <Route path="main/addbook" element={<AddBookPage />} />
         <Route path="main/:bookId" element={<InnerPage />} />
         <Route path="/vendorProfile" element={<VendorProfile />} />
      </Route>
   )
}
