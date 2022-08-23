import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { APP_ROLES } from '../utils/constants/constants'
import vendorLayout from './vendorLayout'
import clientLayout from './clientLayout'
import adminLayout from './adminLayout'

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
         {RoutesComponent.ADMIN}
         <Route
            path="*"
            element={
               <div>
                  <h2>not found</h2>
               </div>
            }
         />
      </Routes>
   )
}

export default AppRoutes
