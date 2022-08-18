import { Route } from 'react-router'
import VendorLayout from '../layouts/VendorLayout'
import { BooksPage } from '../Components/vendor/BooksPage'
import { InnerPage } from '../Components/vendor/InnerPage'

export default function vendorLayout() {
   return (
      <Route path="/" element={<VendorLayout />}>
         <Route path="books" element={<BooksPage />} />
         <Route path="books/:bookId" element={<InnerPage />} />
      </Route>
   )
}
