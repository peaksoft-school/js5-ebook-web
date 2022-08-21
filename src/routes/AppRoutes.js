import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { APP_ROLES } from '../utils/constants/constants'
import vendorLayout from './vendorLayout'
import clientLayout from './clientLayout'
import adminLayout from './adminLayout'
import AddBookPage from '../containers/vendorMainPage/AddBookPage'

function AppRoutes() {
   const user = useSelector((store) => store.auth.user)
   const RoutesComponent = useMemo(() => {
      return {
         [APP_ROLES.ADMIN]: adminLayout(),
         [APP_ROLES.VENDOR]: vendorLayout(),
         [APP_ROLES.USER]: clientLayout(),
      }
   }, [])

   return (
      <Routes>
         {RoutesComponent[user.role]}
         <Route path="/" element={<AddBookPage />} />
      </Routes>
   )
}
export default AppRoutes
