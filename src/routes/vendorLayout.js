import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import AddBookPage from '../containers/vendorMainPage/AddBookPage'
import CreatePromocode from '../containers/vendorLayouts/Promocode/CreatePromocode'

export default function vendorLayout() {
   return (
      <Route path="/" element={<VendorLayout />}>
         <Route path="/addbook" element={<AddBookPage />} />
         <Route path="/promocode" element={<CreatePromocode />} />
      </Route>
   )
}
