import React from 'react'
import AdminVendorProfile from './AdminVendorProfile'
import AdminVendorBooks from './AdminVendorBooks'
import TabPanel from '../../../Components/UI/TabPanel'

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
   return <TabPanel tabsArray={tabsArray} />
}

export default AdminVendorInnerPage
