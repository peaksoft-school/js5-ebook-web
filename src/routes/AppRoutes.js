import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import VendorLayout from '../layouts/VendorLayout'
import ClientLayout from '../layouts/ClientLayout'
import { VENDOR } from '../utils/constants/constants'
import getFromLocaleStorage from '../hooks/getFromLocaleStorage'
import { authSlicesActions } from '../store/slices/authSlices'

function AppRoutes() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      const key = getFromLocaleStorage()
      if (key) {
         dispatch(authSlicesActions.updateСountries(key))
         if (key.role === VENDOR) {
            navigate('/vendor', { replace: true })
         }
      }
   }, [])
   return (
      <Routes>
         <Route path="/" element={<ClientLayout />} />
         <Route path="/vendor" element={<VendorLayout />} />
         <Route path="/admin" element={<AdminLayout />} />
      </Routes>
   )
}

export default AppRoutes
