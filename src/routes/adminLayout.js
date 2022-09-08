import { Navigate, Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'
import AdminApplications from '../containers/adminContainers/admin-applications/AdminApplications'
import AdminBooks from '../containers/Admin/AdminBooks'
import AddBookPage from '../containers/vendorContainers/vendorBookMainPage/AddBookPage'

export default function adminLayout() {
   return (
      <Route path="/" element={<AdminLayout />}>
         <Route path="/" element={<Navigate to="/applications" replace />} />
         <Route path="applications" element={<AdminApplications />} />
         <Route path="/books" element={<AdminBooks />} />
         <Route path="/books/addBook" element={<AddBookPage />} />
         <Route path="/*" element={<div>not found</div>} />
      </Route>
   )
}
