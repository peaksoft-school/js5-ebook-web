// import styled from '@emotion/styled'
import Header from './Header/Header'
import SideDrower from './sideDrower/SideDrower'
import AppContainer from '../AppContainer'

function Admin() {
   return (
      <>
         <SideDrower />
         <AppContainer>
            <Header />
         </AppContainer>
      </>
   )
}

export default Admin
