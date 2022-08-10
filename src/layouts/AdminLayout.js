import AppContainer from './AppContainer'
import Header from './Header'
import { ReactComponent as AdminIcon } from '../assets/icons/header/admin.svg'
import IconButton from './IconButton'
import SideDrawer from './sideDrawer/SideDrawer'
import CardItems from './CardItems'
import SearchInput from '../Components/UI/Inputs/SearchInput'

function AdminLayout({ children }) {
   return (
      <AppContainer
         header={
            <Header
               admin
               headerTop={
                  <>
                     <CardItems flexGrow="1" padding="0 15px 0 0">
                        <SearchInput backgroundColor="#fff" />
                     </CardItems>
                     <CardItems flexShrink="0" flexGrow="0">
                        <IconButton
                           icon={<AdminIcon />}
                           label="Администратор"
                        />
                     </CardItems>
                  </>
               }
            />
         }
         sidebar={<SideDrawer />}
<<<<<<< HEAD
         main={children}
=======
>>>>>>> 7ab4d325a79de30deaf003ce9bcbc53f3401de84
      />
   )
}

export default AdminLayout
