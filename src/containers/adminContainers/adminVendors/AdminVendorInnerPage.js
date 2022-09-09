import React from 'react'
import styled from '@emotion/styled'
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
   return (
      <StyledTabBlock>
         <TabPanel tabsArray={tabsArray} />
      </StyledTabBlock>
   )
}

export default AdminVendorInnerPage

const StyledTabBlock = styled.div`
   /* width: 100%;
   display: flex;
   justify-content: center;
   align-items: center; */
`
