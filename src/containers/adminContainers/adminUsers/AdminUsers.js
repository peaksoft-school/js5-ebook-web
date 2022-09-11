import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   IconButton,
} from '@mui/material'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg'
import Button from '../../../Components/UI/Button/Button'
import Modal from '../../../Components/UI/Modal'
import { getAdminUsers } from '../../../store/slices/getAdminUsersSlices'

const AdminUsers = () => {
   const { users } = useSelector((state) => state.adminUsers)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   const handleOpenDeleteModal = () => setIsOpenDeleteModal(true)
   const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)

   useEffect(() => {
      dispatch(getAdminUsers(users))
   }, [])

   const handleNavToUserProfile = (id) => {
      navigate(`/user/${id}`)
   }
   return (
      <div>
         <StyledTableCont component={Paper}>
            <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <StyledTableCellTitle>№</StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        ФИО
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        Почта
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        {' '}
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        {' '}
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        {' '}
                     </StyledTableCellTitle>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {users &&
                     users.map((item, index) => (
                        <StyledTableRow
                           onClick={() => handleNavToUserProfile(item.id)}
                           sx={{
                              '&.MuiTableRow-hover': {
                                 '&:hover': {
                                    backgroundColor: '#FFEEE6',
                                    cursor: 'pointer',
                                 },
                              },
                           }}
                           hover
                           key={item.id}
                        >
                           <StyledTableCell component="th" scope="row">
                              {index + 1}
                           </StyledTableCell>
                           <StyledTableCell align="inherit">
                              {item.name}
                           </StyledTableCell>
                           <StyledTableCell align="inherit">
                              {item.email}
                           </StyledTableCell>
                           <StyledTableCell align="inherit"> </StyledTableCell>
                           <StyledTableCell align="inherit"> </StyledTableCell>
                           <StyledTableCell align="inherit">
                              <IconButton onClick={handleOpenDeleteModal}>
                                 <DeleteIcon />
                              </IconButton>
                              <Modal
                                 open={isOpenDeleteModal}
                                 onClose={handleCloseDeleteModal}
                                 variant="mini"
                                 width="460px"
                                 height="161px"
                              >
                                 <StyledInfoText>
                                    Вы уверены, что хотите удалить
                                 </StyledInfoText>
                                 <StyledInfoTitle>
                                    “{item.firstName} {item.lastName}” ?
                                 </StyledInfoTitle>
                                 <StyledModalBtnCont>
                                    <Button
                                       variant="default"
                                       background="white"
                                       color="#A3A3A3"
                                       onClick={handleCloseDeleteModal}
                                    >
                                       Отменить
                                    </Button>
                                    <Button
                                       variant="default"
                                       //    onClick={() =>
                                       //       hendleDeleteVendor(item.id)
                                       //    }
                                    >
                                       Удалить
                                    </Button>
                                 </StyledModalBtnCont>
                              </Modal>
                           </StyledTableCell>
                        </StyledTableRow>
                     ))}
               </TableBody>
            </Table>
         </StyledTableCont>
      </div>
   )
}

export default AdminUsers

// const StyledLink = styled(Link)`
//    text-decoration: none;
//    color: #222222;
//    padding: 0;
//    margin: 0;
//    width: 100%;
// `
const StyledTableCellTitle = styled(TableCell)`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 19px;
   color: #222222;
`
const StyledTableCell = styled(TableCell)`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
   border-bottom: none;
`
const StyledTableRow = styled(TableRow)`
   &.MuiTableRow-hover {
      & :hover {
         background: #ffeee6;
         cursor: pointer;
      }
   }
`
const StyledTableCont = styled(TableContainer)`
   border-radius: 0px;
   box-shadow: 0px 0px;
`

const StyledInfoText = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
`
const StyledModalBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
   width: 278px;
   height: 42px;
`
const StyledInfoTitle = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
`
