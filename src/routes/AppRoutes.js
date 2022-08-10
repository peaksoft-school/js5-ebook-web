import { Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import VendorLayout from '../layouts/VendorLayout'
import ClientLayout from '../layouts/ClientLayout'
import { APP_ROLES } from '../utils/constants/constants'
import { BooksPage } from '../containers/UserInnerPage/BooksPage'
import { UserInnerPage } from '../containers/UserInnerPage/UserInnerPage'

function AppRoutes() {
   const user = useSelector((store) => store.auth.user)
   const navigate = useNavigate()
   useEffect(() => {
      if (user) {
         if (user.role === APP_ROLES.VENDOR) {
            navigate(`/vendor`, { replace: true })
         }
      }
   }, [])
   return (
      <Routes>
         <Route path="/" element={<ClientLayout />} />
         <Route path="/vendor" element={<VendorLayout />} />
         <Route path="/admin" element={<AdminLayout />} />
         <Route path="/home" element={<BooksPage />} />
         <Route path="/home/:bookId" element={<UserInnerPage />} />
      </Routes>
   )
}

export default AppRoutes
