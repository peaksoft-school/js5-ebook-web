import { Outlet } from 'react-router'
// import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Badge, MenuItem } from '@mui/material'
import AppContainer, { Wrapper } from './AppContainer'
import Header from './Header'
import IconButton from './IconButton'
import Logotype from './Logotype'
import { ReactComponent as VendorIcon } from '../assets/icons/header/admin.svg'
import { ReactComponent as MessageIcon } from '../assets/icons/header/message.svg'
import { ReactComponent as NotificatonIcon } from '../assets/icons/header/notification.svg'
import { ReactComponent as Treugolnik } from '../assets/icons/header/treugolnik.svg'
import CardItems from './CardItems'
import Footer from './Footer'
import SearchInputBlock from './SearchInputBlock'
import PopUp from '../Components/UI/popup'
import Modal from '../Components/UI/Modal'
import ExitApp from '../Components/UI/ExitApp'
import Notification from '../Components/UI/notification/Notification'

const Vendor = () => {
   // const { notifications } = useSelector((state) => state.notifications)
   const [anchorEl, setAnchorEl] = useState(null)
   const [isModal, setIsModal] = useState(false)
   const [anchorElNotif, setAnchorElNotif] = useState(null)
   const [isOpenNotif, setIsOpenNotif] = useState(false)
   const open = Boolean(anchorEl)
   const onClickExitBtn = () => {
      setIsModal(true)
      onCloseProfileHandler()
   }
   const onCloseModal = () => {
      setIsModal(false)
   }
   const onClickProfileHandler = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const onCloseProfileHandler = () => {
      setAnchorEl(null)
   }
   const onClickNotifHandler = (e) => {
      setAnchorElNotif(e.currentTarget)
      setIsOpenNotif(true)
   }
   const onCloseNotifHandler = () => {
      setIsOpenNotif(false)
   }

   return (
      <Wrapper>
         <AppContainer
            primary
            main={<Outlet />}
            header={
               <Header
                  headerTop={
                     <>
                        <CardItems flexShrink={0} flexGrow={0}>
                           <Logotype />
                        </CardItems>
                        <CardItems flexGrow={1} padding="0 20px">
                           <SearchInputBlock />
                        </CardItems>
                        <CardItems flexGrow={0} flexShrink={0}>
                           <IconButton icon={<MessageIcon />} />
                           <IconButton
                              icon={
                                 <Badge color="error" variant="dot">
                                    <NotificatonIcon />
                                 </Badge>
                              }
                              onClick={onClickNotifHandler}
                           />
                           <Notification
                              open={isOpenNotif}
                              handleClose={onCloseNotifHandler}
                              anchorEl={anchorElNotif}
                           />
                           <IconButton
                              icon={<VendorIcon />}
                              backgroundColor="#DBDBDB"
                              borderRadius="50%"
                              label={<Treugolnik />}
                              onClick={onClickProfileHandler}
                           />
                           <PopUp
                              onClose={onCloseProfileHandler}
                              open={open}
                              anchorEl={anchorEl}
                           >
                              <MenuItem>Профиль</MenuItem>
                              <MenuItem onClick={onClickExitBtn}>
                                 Выйти
                              </MenuItem>
                           </PopUp>
                           <Modal open={isModal} onClose={onCloseModal}>
                              <ExitApp onCloseModal={onCloseModal} />
                           </Modal>
                        </CardItems>
                     </>
                  }
               />
            }
            footer={<Footer vendor />}
         />
      </Wrapper>
   )
}

export default Vendor
