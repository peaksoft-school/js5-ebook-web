import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
   getAdminVendors,
   deleteAdminVendor,
   cleanVendorDel,
} from '../../../store/slices/getAdminVendorsSlice'
import Spinner from '../../../Components/UI/Spinner'
import VendorTable from './VendorTable'

export default function AdminVendor() {
   const { vendors, status, deleteVendor } = useSelector(
      (state) => state.adminVendors
   )
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   const handleOpenDeleteModal = () => setIsOpenDeleteModal(true)
   const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)
   const [isShowSpinner, setIsShowSpinner] = useState()

   useEffect(() => {
      if (status === 'pending') {
         setIsShowSpinner(true)
      } else {
         setIsShowSpinner(false)
      }
   }, [status])

   useEffect(() => {
      dispatch(getAdminVendors(vendors))
      dispatch(cleanVendorDel())
   }, [deleteVendor])

   const hendleDeleteVendor = (id) => {
      dispatch(deleteAdminVendor(id))
      handleCloseDeleteModal()
   }

   const handleNavToVendorProfile = (id) => {
      navigate(`/vendors/${id}`)
   }
   const showVendorTable = isShowSpinner ? (
      <Spinner variant="two" />
   ) : (
      <VendorTable
         vendors={vendors}
         handleDelete={hendleDeleteVendor}
         handleNav={handleNavToVendorProfile}
         openDelModal={isOpenDeleteModal}
         handleOpenDelModal={handleOpenDeleteModal}
         handleCloseDelModal={handleCloseDeleteModal}
      />
   )
   return showVendorTable
}
