import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { APP_ROLES } from '../utils/constants/constants'
import vendorLayout from './vendorLayout'
import clientLayout from './clientLayout'
import adminLayout from './adminLayout'

function AppRoutes() {
   const user = useSelector((store) => store.auth.user)
   const [Protect, setProtect] = useState([
      {
         name: APP_ROLES.VENDOR,
         access: false,
      },
      {
         name: APP_ROLES.ADMIN,
         access: false,
      },
      {
         name: APP_ROLES.USER,
         access: true,
      },
   ])
   useEffect(() => {
      if (user) {
         setProtect((prev) => {
            return prev.map((elem) => {
               if (elem.name !== user.role) {
                  return {
                     ...elem,
                     access: false,
                  }
               }
               return {
                  ...elem,
                  access: true,
               }
            })
         })
      }
   }, [user])
   return (
      <Routes>
         {Protect[0].access && vendorLayout()}
         {Protect[1].access && adminLayout()}
         {Protect[2].access && clientLayout()}
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
