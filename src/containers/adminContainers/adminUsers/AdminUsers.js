import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
   cleanUserDel,
   deleteAdminUser,
   getAdminUsers,
} from '../../../store/slices/getAdminUsersSlices'
import UserTable from './UserTable'

const AdminUsers = () => {
   const { users, deleteUser } = useSelector((state) => state.adminUsers)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   const handleOpenDeleteModal = () => setIsOpenDeleteModal(true)
   const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)

   useEffect(() => {
      dispatch(getAdminUsers(users))
      dispatch(cleanUserDel())
   }, [deleteUser])

   const hendleDeleteUser = (id) => {
      dispatch(deleteAdminUser(id))
      handleCloseDeleteModal()
   }

   const handleNavToUserProfile = (id) => {
      navigate(`/users/${id}`)
   }
   return (
      <UserTable
         users={users}
         handleDelete={hendleDeleteUser}
         handleNav={handleNavToUserProfile}
         openDelModal={isOpenDeleteModal}
         handleOpenDelModal={handleOpenDeleteModal}
         handleCloseDelModal={handleCloseDeleteModal}
      />
   )
}

export default AdminUsers
