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
import { Link } from 'react-router-dom'
import {
   getAdminVendors,
   deleteAdminVendor,
} from '../../../store/slices/getAdminVendorsSlice'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg'
import Button from '../../../Components/UI/Button/Button'
import Modal from '../../../Components/UI/Modal'
import Spinner from '../../../Components/UI/Spinner'

export default function AdminVendor() {
   const { vendors, status } = useSelector((state) => state.adminVendors)
   const dispatch = useDispatch()

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
   }, [])

   const hendleDeleteVendor = (id) => {
      dispatch(deleteAdminVendor(id))
   }

   const vendorsNum = 1

   return (
      <>
         {isShowSpinner && <Spinner />}
         <StyledTableCont component={Paper}>
            <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <StyledTableCellTitle>№</StyledTableCellTitle>
                     <StyledTableCellTitle align="center">
                        Имя
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="center">
                        Номер телефона
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="center">
                        Почта
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="center">
                        Количество книг
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="center">
                        {' '}
                     </StyledTableCellTitle>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {vendors &&
                     vendors.map((item) => (
                        <StyledTableRow
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
                              {vendorsNum}
                           </StyledTableCell>
                           <StyledLink to={`/vendor/${item.id}`}>
                              <StyledTableCell align="center">
                                 {item.firstName} {item.lastName}
                              </StyledTableCell>
                           </StyledLink>
                           <StyledTableCell align="center">
                              {item.phoneNumber}
                           </StyledTableCell>
                           <StyledTableCell align="center">
                              {item.email}
                           </StyledTableCell>
                           <StyledTableCell align="center">
                              {item.quantityOfBooks}
                           </StyledTableCell>
                           <StyledTableCell align="center">
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
                                       onClick={() =>
                                          hendleDeleteVendor(item.id)
                                       }
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
      </>
   )
}

const StyledLink = styled(Link)`
   text-decoration: none;
   color: #222222;
   padding: 0;
   margin: 0;
   width: 100%;
`
const StyledTableCellTitle = styled(TableCell)`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 700;
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
