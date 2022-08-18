import { Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import VendorLayout from '../layouts/VendorLayout'
import ClientLayout from '../layouts/ClientLayout'
import { APP_ROLES } from '../utils/constants/constants'
import { BooksPage } from '../Components/vendor/BooksPage'
import { InnerPage } from '../Components/vendor/InnerPage'

function AppRoutes() {
   const user = useSelector((store) => store.auth.user)
   const navigate = useNavigate()
   useEffect(() => {
      if (user) {
         if (user.role === APP_ROLES.VENDOR) {
            navigate(`/vendor`, { replace: true })
         }
      }
   }, [user])
   return (
      <Routes>
         <Route path="/" element={<ClientLayout />} />
         <Route path="/vendor" element={<VendorLayout />}>
            <Route path="books" element={<BooksPage />} />
            <Route path="books/:bookId" element={<InnerPage />} />
         </Route>
         <Route path="/admin" element={<AdminLayout />} />
      </Routes>
   )
}

export default AppRoutes
