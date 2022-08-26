import { Outlet } from 'react-router'
import { useState } from 'react'
import { MenuItem } from '@mui/material'
import AppContainer from './AppContainer'
import Header from './Header'
import { ReactComponent as AdminIcon } from '../assets/icons/header/admin.svg'
import IconButton from './IconButton'
import SideDrawer from './sideDrawer/SideDrawer'
import CardItems from './CardItems'
import PopUp from '../Components/UI/popup'
import Modal from '../Components/UI/Modal'
import ExitApp from '../Components/UI/ExitApp'
import SearchInputBlock from './SearchInputBlock'

function AdminLayout() {
   const [anchorEl, setAnchorEl] = useState(null)
   const [isShowModal, setIsShowModal] = useState(false)
   const open = Boolean(anchorEl)
   const onClickExitBtn = () => {
      setIsShowModal(true)
      onCloseProfile()
   }
   const onCloseModal = () => {
      setIsShowModal(false)
   }
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
                        <SearchInputBlock admin />
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
                           <MenuItem onClick={onClickExitBtn}>Выйти</MenuItem>
                        </PopUp>
                        <Modal open={isShowModal} onClose={onCloseModal}>
                           <ExitApp onCloseModal={onCloseModal} />
                        </Modal>
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
