import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const initialState = {
   notifications: [],
   notification: {},
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
   }
}

export const getNotificationWithId = (id) => {
   return async (dispatch) => {
      const getData = await appFetch({
         url: `/api/notifications/${id}`,
      })
      dispatch(notificationAction.setNotification(getData))
      console.log(getData)
   }
}
