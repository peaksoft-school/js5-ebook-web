import AppContainer from './AppContainer'
import Header from './Header'
import { ReactComponent as AdminIcon } from '../assets/icons/header/admin.svg'
import IconButton from './IconButton'
import SideDrower from './sideDrower/SideDrower'

function Admin() {
   return (
      <AppContainer
         header={
            <Header
               admin
               headerTop={
                  <>
                     <input
                        style={{ width: '100%', marginRight: '20px' }}
                     ></input>
                     <IconButton
                        icon={<AdminIcon />}
                        label="Администратор"
                     ></IconButton>
                  </>
               }
            />
         }
         sidebar={<SideDrower></SideDrower>}
      />
   )
}

export default Admin
