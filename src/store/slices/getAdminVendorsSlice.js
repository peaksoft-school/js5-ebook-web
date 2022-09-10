import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   vendors: [],
   vendor: {},
   vendorBooks: {
      books: [],
      totalElements: '',
      totalPages: '',
   },
   deleteVendor: null,
   status: null,
   error: null,
}
export const getAdminVendorsSlice = createSlice({
   name: 'getVendor',
   initialState,
   reducers: {
      setAllVendors(state, action) {
         state.status = 'fulfilled'
         state.vendors = action.payload
      },
      setVendorWithId(state, action) {
         state.status = 'fulfilled'
         state.vendor = action.payload
      },
      setVendorBooks(state, action) {
         state.vendorBooks.books = action.payload.content
         state.vendorBooks.totalElements = action.payload.totalElements
         state.vendorBooks.totalPages = action.payload.totalPages
      },
      pending: (state) => {
         state.status = 'pending'
      },
      success: (state) => {
         state.status = 'fulfilled'
      },
      rejected: (state, action) => {
         state.status = 'rejected'
         state.error = action.payload
      },
      deleteVendor(state, action) {
         state.deleteVendor = action.payload
         state.status = 'fulfilled'
      },
      cleanVendorDel: (state) => {
         state.deleteVendor = null
      },
   },
})

const adminVendorsAction = getAdminVendorsSlice.actions
export default adminVendorsAction

export const cleanVendorDel = () => {
   return (dispatch) => {
      const time = setTimeout(() => {
         dispatch(adminVendorsAction.cleanVendorDel())
         clearTimeout(time)
      }, 1000)
   }
}

export const getAdminVendors = () => {
   return async (dispatch) => {
      try {
         dispatch(adminVendorsAction.pending())
         const getData = await appFetch({
            url: '/api/admin/vendors',
         })
         dispatch(adminVendorsAction.setAllVendors(getData))
      } catch (error) {
         dispatch(adminVendorsAction.rejected(error))
      }
   }
}

export const getAdminVendorWithId = (vendorId) => {
   return async (dispatch) => {
      try {
         dispatch(adminVendorsAction.pending())
         const getData = await appFetch({
            url: `/api/vendors/${vendorId}`,
         })
         dispatch(adminVendorsAction.setVendorWithId(getData))
      } catch (error) {
         dispatch(adminVendorsAction.rejected(error))
      }
   }
}

export const getAdminVendorBooks = (vendorId, filterBooks) => {
   return async (dispatch) => {
      try {
         dispatch(adminVendorsAction.pending())
         const getData = await appFetch({
            url: `/api/vendors/${vendorId}/books${sortRequestApplic(
               filterBooks
            )}`,
         })
         dispatch(adminVendorsAction.setVendorBooks(getData))
      } catch (error) {
         dispatch(adminVendorsAction.rejected(error))
      }
   }
}

export const deleteAdminVendor = (vendorId) => {
   return async (dispatch) => {
      try {
         dispatch(adminVendorsAction.pending())
         const removeData = await appFetch({
            url: `/api/vendors/${vendorId}`,
            method: 'DELETE',
         })
         dispatch(adminVendorsAction.deleteVendor(removeData.message))
         toast.success(removeData.message)
      } catch (error) {
         dispatch(adminVendorsAction.rejected(error))
         toast.error('Не удалось удалить аккаунт!')
      }
   }
}
