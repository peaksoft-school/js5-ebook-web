import AppContainer from './AppContainer'
import Header from './Header'
import { ReactComponent as AdminIcon } from '../assets/icons/header/admin.svg'
import IconButton from './IconButton'
import SideDrawer from './sideDrawer/SideDrawer'

function AdminLayout() {
   return (
      <AppContainer
         header={
            <Header
               admin
               headerTop={
                  <IconButton
                     icon={<AdminIcon />}
                     label="Администратор"
                  ></IconButton>
               }
            />
         }
         sidebar={<SideDrawer></SideDrawer>}
      />
   )
}

export default AdminLayout
