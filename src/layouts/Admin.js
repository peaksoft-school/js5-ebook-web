import AppContainer from './AppContainer'
import Header from './Header'
import admin from '../assets/icons/header/admin.png'
import IconButton from './IconButton'
import SideDrower from './sideDrower/SideDrower'

function Admin() {
   return (
      <AppContainer
         header={
            <Header
               admin
               headerTop={
                  <IconButton icon={admin} label="Администратор"></IconButton>
               }
            />
         }
         sidebar={<SideDrower></SideDrower>}
      />
   )
}

export default Admin
