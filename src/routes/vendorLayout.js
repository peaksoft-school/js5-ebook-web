import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import { InnerPage } from '../containers/vendorContainers/vendorBookInnerPage/InnerPage'
import AddBookPage from '../containers/vendorContainers/vendorBookMainPage/AddBookPage'

export default function vendorLayout() {
   return (
      <Route path="/" element={<VendorLayout />}>
         <Route path="books/:bookId" element={<InnerPage />} />
         <Route path="/addBook" element={<AddBookPage />} />
      </Route>
   )
}
