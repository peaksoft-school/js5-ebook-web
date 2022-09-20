import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import AdminVendorProfile from './AdminVendorProfile'
import AdminVendorBooks from './AdminVendorBooks'
import TabPanel from '../../../Components/UI/TabPanel'
import BreadCrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'

const tabsArray = [
   {
      id: 1,
      label: 'Профиль',
      value: '1',
      Component: <AdminVendorProfile />,
   },
   {
      id: 2,
      label: 'Книги',
      value: '2',
      Component: <AdminVendorBooks />,
   },
]
const AdminVendorInnerPage = () => {
   const params = useParams()
   const { vendor } = useSelector((state) => state.adminVendors)
   const layout = {
      vendors: 'Пользователи',
      [params.vendorId]: vendor.firstName,
   }
   return (
      <div>
         <BreadCrumbs translate={layout} />
         <TabPanel tabsArray={tabsArray} />
      </div>
   )
}

export default AdminVendorInnerPage
