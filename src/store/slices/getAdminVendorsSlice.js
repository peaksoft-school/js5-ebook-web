import { createSlice } from '@reduxjs/toolkit'
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
   deleteVendor: false,
   status: null,
   error: null,
}
export const getAdminVendorsSlice = createSlice({
   name: 'getVendor',
   initialState,
   reducers: {
      getAllVendors(state, action) {
         state.status = 'fulfilled'
         state.vendors = action.payload
      },
      getVendorWithId(state, action) {
         state.status = 'fulfilled'
         state.vendor = action.payload
      },
      getVendorBooks(state, action) {
         state.status = 'fulfilled'
         state.vendorBooks.books = action.payload.content
         state.vendorBooks.totalElements = action.payload.totalElements
         state.vendorBooks.totalPages = action.payload.totalPages
      },
      pending: (state) => {
         state.status = 'pending'
      },
      rejected: (state, action) => {
         state.status = 'rejected'
         state.error = action.payload
      },
      deleteVendor(state) {
         state.deleteVendor = !state.deleteVendor
      },
   },
})

const adminVendorsAction = getAdminVendorsSlice.actions
export default adminVendorsAction

export const getAdminVendors = () => {
   return async (dispatch) => {
      try {
         dispatch(adminVendorsAction.pending())
         const getData = await appFetch({
            url: '/api/admin/vendors',
         })
         dispatch(adminVendorsAction.getAllVendors(getData))
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
         dispatch(adminVendorsAction.getVendorWithId(getData))
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
         dispatch(adminVendorsAction.getVendorBooks(getData))
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
         dispatch(adminVendorsAction.deleteVendor(removeData))
      } catch (error) {
         dispatch(adminVendorsAction.rejected(error))
      }
   }
}
