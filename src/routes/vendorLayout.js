import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import { InnerPage } from '../containers/vendorContainers/vendorBookInnerPage/InnerPage'
import AddBookPage from '../containers/vendorContainers/vendorBookMainPage/AddBookPage'
import VendorMainPage from '../containers/vendorContainers/vendorMainPage/VendorMainPage'

export default function vendorLayout() {
   return (
      <Route path="/" element={<VendorLayout />}>
         <Route path="/" element={<VendorMainPage />} />
         <Route path="/:bookId" element={<InnerPage />} />
         <Route path="/addbook" element={<AddBookPage />} />
         <Route path="addbook/:bookId" element={<InnerPage />} />
      </Route>
   )
}
