import { Route } from 'react-router'
import ClientLayout from '../layouts/ClientLayout'
import { BooksPage } from '../containers/UserInnerPage/BooksPage'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         <Route path="books" element={<BooksPage />} />
         <Route path="/books/:bookId" element={<UserInnerPage />} />
      </Route>
   )
}
