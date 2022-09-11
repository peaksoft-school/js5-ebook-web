import React from 'react'
import styled from '@emotion/styled'
import AdminUserProfile from './AdminUserProfile'
import AdminUserHistory from './AdminUserHistory'
import TabPanel from '../../../Components/UI/TabPanel'

const tabsArray = [
   {
      id: 1,
      label: 'Профиль',
      value: '1',
      Component: <AdminUserProfile />,
   },
   {
      id: 2,
      label: 'История операций',
      value: '2',
      Component: <AdminUserHistory />,
   },
]
const AdminUserInnerPage = () => {
   return (
      <StyledTabBlock>
         <TabPanel tabsArray={tabsArray} />
      </StyledTabBlock>
   )
}

export default AdminUserInnerPage

const StyledTabBlock = styled.div`
   /* width: 100%;
   display: flex;
   justify-content: center;
   align-items: center; */
`
