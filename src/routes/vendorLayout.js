import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import { InnerPage } from '../containers/vendorContainers/vendorBookInnerPage/InnerPage'
import AddBookPage from '../containers/vendorContainers/vendorBookMainPage/AddBookPage'
import CreatePromocode from '../containers/vendorLayouts/Promocode/CreatePromocode'

export default function vendorLayout() {
   return (
      <Route path="/" element={<VendorLayout />}>
         <Route path="/addbook" element={<AddBookPage />} />
         <Route path="books/:bookId" element={<InnerPage />} />
         <Route path="/addBook" element={<AddBookPage />} />
         <Route path="/promocode" element={<CreatePromocode />} />
      </Route>
   )
}
