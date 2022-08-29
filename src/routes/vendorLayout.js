import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import { InnerPage } from '../Components/vendor/InnerPage'
import AddBookPage from '../containers/vendorMainPage/AddBookPage'

export default function vendorLayout() {
   return (
      <Route path="/" element={<VendorLayout />}>
         <Route path="books/:bookId" element={<InnerPage />} />
         <Route path="/addbook" element={<AddBookPage />} />
      </Route>
   )
}
