import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   getAllNotifications,
   getNotificationWithId,
} from '../../../store/slices/notificationSlice'
import NotificationMenu from './NotificationMenu'
import NotificationDetail from './NotificationDetail'

const Notification = ({ open, anchorEl, handleClose }) => {
   const [toggleNotif, setToggleNotif] = useState(false)
   const { notifications, notification } = useSelector(
      (state) => state.notifications
   )

   const dispatch = useDispatch()

   const closeNotifHandle = () => {
      setToggleNotif(false)
   }

   useEffect(() => {
      dispatch(getAllNotifications(notifications))
   }, [])

   const openNotifHandle = (id) => {
      setToggleNotif(true)
      dispatch(getNotificationWithId(id))
   }

   return (
      <div>
         {toggleNotif ? (
            <NotificationDetail
               onClick={closeNotifHandle}
               item={notification}
               anchorEl={anchorEl}
            />
         ) : (
            <NotificationMenu
               open={open}
               anchorEl={anchorEl}
               handleClose={handleClose}
               onClick={(id) => {
                  openNotifHandle(id)
               }}
               menuItems={notifications}
            />
         )}
      </div>
   )
}

export default Notification
