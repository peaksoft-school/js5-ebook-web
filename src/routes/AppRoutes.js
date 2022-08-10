import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
// import AdminLayout from '../layouts/AdminLayout'
import VendorLayout from '../layouts/VendorLayout'
// import ClientLayout from '../layouts/ClientLayout'
import { APP_ROLES } from '../utils/constants/constants'
import AddAbook from '../containers/vendorMainPage/AddBookPage'

function AppRoutes() {
   const user = useSelector((store) => store.auth.user)
   // const navigate = useNavigate()
   useEffect(() => {
      if (user) {
         if (user.role === APP_ROLES.VENDOR) {
            // navigate(`/vendor`, { replace: true })
         }
      }
   }, [])
   return (
      // <Route path="/" element={<ClientLayout />} />
      <Route path="/vendor" element={<VendorLayout />}>
         <Route path="/addbook" element={<AddAbook />} />
      </Route>
      // <Route path="/admin" element={<AdminLayout />} />
   )
}

export default AppRoutes
