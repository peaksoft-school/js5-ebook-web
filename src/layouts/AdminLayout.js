import { Outlet } from 'react-router'
import { useState } from 'react'
import { MenuItem } from '@mui/material'
import AppContainer from './AppContainer'
import Header from './Header'
import { ReactComponent as AdminIcon } from '../assets/icons/header/admin.svg'
import IconButton from './IconButton'
import SideDrawer from './sideDrawer/SideDrawer'
import CardItems from './CardItems'
import SearchInput from '../Components/UI/Inputs/SearchInput'
import PopUp from '../Components/UI/popup'

function AdminLayout() {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const onClickPofile = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const onCloseProfile = () => {
      setAnchorEl(null)
   }
   return (
      <AppContainer
         primary
         main={<Outlet />}
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
                           onClick={onClickPofile}
                        />
                        <PopUp
                           anchorEl={anchorEl}
                           open={open}
                           onClose={onCloseProfile}
                        >
                           <MenuItem>Выйти</MenuItem>
                        </PopUp>
                     </CardItems>
                  </>
               }
            />
         }
         sidebar={<SideDrawer />}
      />
   )
}

export default AdminLayout
