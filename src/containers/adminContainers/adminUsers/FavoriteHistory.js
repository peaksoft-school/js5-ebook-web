import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   // TableHead,
   TableRow,
   Paper,
} from '@mui/material'
import styled from '@emotion/styled'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getUserOperationHistory } from '../../../store/slices/getAdminUsersSlices'
import Button from '../../../Components/UI/Button/Button'

const card = 2

const FavoriteHistory = () => {
   const dispatch = useDispatch()
   const { userId } = useParams()
   const { userHistory, totalElements } = useSelector(
      (state) => state.adminUsers
   )
   console.log(userHistory)
   const [nextCart, setNextCart] = useState(card)
   const nextCarthandle = () => {
      setNextCart(card + nextCart)
   }
   const onCloseHandler = () => {
      setNextCart(card)
   }
   useEffect(() => {
      dispatch(getUserOperationHistory(userId, nextCart))
   }, [nextCart])

   return (
      <>
         <StyledTableCont component={Paper}>
            <Table aria-label="simple table">
               {/* <TableHead>
                  <TableRow>
                     <StyledTableCellTitle>Фото</StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        Название/Автор
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        Кол-во
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        Цена
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        Дата
                     </StyledTableCellTitle>
                     <StyledTableCellTitle align="inherit">
                        Состояние
                     </StyledTableCellTitle>
                  </TableRow>
               </TableHead> */}
               <TableBody>
                  {userHistory &&
                     userHistory.map((item) => (
                        <StyledTableRow key={item.bookId}>
                           <StyledTableCell align="inherit">
                              {item.mainImage}
                           </StyledTableCell>
                           <StyledTableCell align="inherit">
                              {item.name.length > 17
                                 ? `${item.name.substring(0, 17)}...`
                                 : `${item.name}`}{' '}
                              {item.author}
                           </StyledTableCell>
                           <StyledTableCell align="inherit">
                              {item.quantityOfBook}
                           </StyledTableCell>
                           <StyledTableCell align="inherit">
                              {item.price - (item.price / 100) * item.promocode}{' '}
                              <br />
                              {item.price} c
                           </StyledTableCell>
                           <StyledTableCell align="inherit">
                              {item.purchaseDate[2]}.{item.purchaseDate[1]}.
                              {item.purchaseDate[0]}
                           </StyledTableCell>
                           <StyledTableCell component="th" scope="row">
                              {item.dateTheBookWasAddedToFavorites}
                           </StyledTableCell>
                        </StyledTableRow>
                     ))}
               </TableBody>
            </Table>
         </StyledTableCont>
         {nextCart < totalElements && (
            <Button onClick={nextCarthandle}>Смотреть больше</Button>
         )}
         {nextCart > card && <Button onClick={onCloseHandler}>Свернуть</Button>}
      </>
   )
}

export default FavoriteHistory

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
