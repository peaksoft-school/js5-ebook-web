import styled from '@emotion/styled'
import Header from './Header/Header'
import SideDrower from './sideDrower/SideDrower'

function Admin() {
   return (
      <>
         <SideDrower />
         <AdminContainer>
            <Header />
         </AdminContainer>
      </>
   )
}

export default Admin

const AdminContainer = styled.div`
   height: 10000px;
   margin-left: 250px;
`
