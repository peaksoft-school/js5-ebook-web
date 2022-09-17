import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import { InnerPage } from '../containers/vendorContainers/vendorBookInnerPage/InnerPage'
import AddBookPage from '../containers/vendorContainers/vendorBookMainPage/AddBookPage'
import CreatePromocode from '../containers/vendorLayouts/Promocode/CreatePromocode'
import VendorMainPage from '../containers/vendorContainers/vendorMainPage/VendorMainPage'
import { VendorProfile } from '../containers/VendorProfile/VendorProfile'

export default function vendorLayout() {
   return (
      <Route path="/" element={<VendorLayout />}>
         <Route path="/" element={<VendorMainPage />} />
         <Route path="/:bookId" element={<InnerPage />} />
         <Route path="/addBook" element={<AddBookPage />} />
         <Route path="/promocode" element={<CreatePromocode />} />
         <Route path="/vendorProfile" element={<VendorProfile />} />
      </Route>
   )
}
