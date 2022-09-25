import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const initialState = {
   notifications: [],
   notification: {},
   read: false,
}

export const notificationsSlise = createSlice({
   name: 'getNotif',
   initialState,
   reducers: {
      setNotifications(state, action) {
         state.notifications = action.payload
      },
      setNotification(state, action) {
         state.notification = action.payload
      },
      readNotification(state) {
         state.read = !state.read
      },
   },
})

const notificationAction = notificationsSlise.actions
export default notificationAction

export const getAllNotifications = () => {
   return async (dispatch) => {
      const getData = await appFetch({
         url: '/api/notifications',
      })
      dispatch(notificationAction.setNotifications(getData))
      dispatch(getAllNotifications())
   }
}

export const getNotificationWithId = (id) => {
   return async (dispatch) => {
      const getData = await appFetch({
         url: `/api/notifications/${id}`,
      })
      dispatch(notificationAction.setNotification(getData))
   }
}

export const readNotification = () => {
   return async (dispatch) => {
      const putData = await appFetch({
         url: '/api/notifications/markAsRead',
         method: 'PUT',
      })
      dispatch(notificationAction.readNotification(putData))
      dispatch(getAllNotifications())
   }
}
