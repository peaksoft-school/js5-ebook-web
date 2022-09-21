import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import appFetch from '../../hooks/appFetch'

const initialState = {
   dataUser: null,
   message: null,
}

const VendorProfileSlice = createSlice({
   name: 'vendorProfile',
   initialState,
   reducers: {
      pending: (state) => {
         state.status = 'pending'
      },
      getVendorprofile(state, action) {
         state.dataUser = action.payload
      },
      putVendorPfrofile: (state) => {
         state.message = 'Пользователь успешно сохранен!'
         state.status = 'success'
      },
      clearMessage: (state) => {
         state.message = null
         state.status = null
      },
      error(state) {
         state.message = 'пароль неверен!'
         state.status = 'error'
      },
      deleteUser(state, action) {
         state.message = action.payload.message
         state.status = 'success'
      },
   },
})

export const vendorProfileAction = VendorProfileSlice.actions
export default VendorProfileSlice

export function getVendorprofile(id) {
   return async (dispatch) => {
      const responce = await appFetch({
         url: `/api/vendors/${id}`,
      })
      dispatch(vendorProfileAction.getVendorprofile(responce))
   }
}

export function putVendorProfile(newUser) {
   return async (dispatch) => {
      try {
         dispatch(vendorProfileAction.pending())
         const res = await appFetch({
            method: 'PUT',
            url: `/api/vendors/vendor/`,
            body: newUser,
         })
         dispatch(vendorProfileAction.putVendorPfrofile(res))
      } catch (error) {
         dispatch(vendorProfileAction.error(error))
      }
   }
}

export const deleteVendorProfile = (id, navigate) => {
   return async (dispatch) => {
      try {
         dispatch(vendorProfileAction.pending())
         const deleteuser = await appFetch({
            url: `/api/vendors/${id}`,
            method: 'DELETE',
         })
         dispatch(vendorProfileAction.deleteUser(deleteuser))
         toast.success(deleteuser.message)
         navigate('/')
      } catch (error) {
         toast.error('Не удалось удалить аккаунт')
      }
   }
}
