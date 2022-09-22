import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import {
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Paper,
   styled,
} from '@mui/material'
import { format } from 'date-fns'
import { getUserOperationHistory } from '../../../store/slices/getAdminUsersSlices'
import Button from '../../../Components/UI/Button/Button'

const card = 2
const FavoriteHistory = () => {
   const dispatch = useDispatch()
   const { userId } = useParams()
   const { favoriteBooks, totalElementFavoriteBooks } = useSelector(
      (state) => state.adminUsers
   )

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

   const getFormatedDate = (date) => {
      return date ? format(new Date(date), 'dd MM yyyy') : ''
   }
   return (
      <Div>
         <NameBlock>
            <NameColumn>
               <p>Фото</p>
               <p>Название/Автор</p>
            </NameColumn>
            <NameColumn2>
               <PriceName>Цена</PriceName>
               <DateName>Дата</DateName>
            </NameColumn2>
         </NameBlock>
         <LineHorizontal />
         <StyledTableCont component={Paper}>
            <TableBody>
               {favoriteBooks &&
                  favoriteBooks.slice(0, nextCart).map((item) => (
                     <StyledTableRow key={item.bookId}>
                        <StyledTableCell align="inherit">
                           <Image>
                              <Img src={item.mainImage} alt="p" />
                           </Image>
                        </StyledTableCell>
                        <StyledTableCell align="inherit">
                           <Names>
                              <BookName>
                                 {item.name.length > 17
                                    ? `${item.name.substring(0, 17)}...`
                                    : `${item.name}`}{' '}
                              </BookName>
                              <NameAuthor>{item.author}</NameAuthor>
                           </Names>
                        </StyledTableCell>
                        <TwoColumn>
                           <StyledTableCell align="inherit">
                              {item.promocode !== 0 ? (
                                 <Promocode>
                                    Промокод {item.promocode}%
                                 </Promocode>
                              ) : (
                                 ''
                              )}
                              <Prices>
                                 {item.promocode !== 0 && (
                                    <PricePromocode>
                                       {item.price -
                                          (item.price / 100) *
                                             item.promocode}{' '}
                                       c
                                    </PricePromocode>
                                 )}

                                 <Price>{item.price} c</Price>
                              </Prices>
                           </StyledTableCell>
                           <StyledTableCell align="inherit">
                              {getFormatedDate(
                                 item.dateTheBookWasAddedToFavorites
                              )}
                           </StyledTableCell>
                        </TwoColumn>
                     </StyledTableRow>
                  ))}
            </TableBody>
         </StyledTableCont>
         <Buttons>
            {nextCart < totalElementFavoriteBooks && (
               <Button onClick={nextCarthandle}>Смотреть больше</Button>
            )}
            {nextCart > card && (
               <Button onClick={onCloseHandler}>Свернуть</Button>
            )}
         </Buttons>
      </Div>
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
const PriceName = styled('p')`
   margin-left: -20px;
`
const StyledTableCont = styled(TableContainer)`
   border-radius: 0px;
   box-shadow: 0px 0px;
   height: 100%;
`
const Image = styled('div')`
   width: 82px;
   height: 132px;
`
const Div = styled('div')`
   width: 100%;
   height: 100%;
`
const Buttons = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
   width: 100%;
   height: 90px;
   margin-left: 15px;
   margin-top: 20px;
`

const Img = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const Names = styled('div')`
   display: flex;
   flex-direction: column;
`
const Prices = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 115px;
`
const BookName = styled('p')`
   font-size: 18px;
`
const NameAuthor = styled('p')`
   font-size: 14px;
   color: #969696;
   margin-top: -10px;
`
const Promocode = styled('p')`
   color: #f10000;
   margin-bottom: -2px;
`
const PricePromocode = styled('p')`
   font-size: 16px;
   text-decoration-line: line-through;
   color: #969696;
`
const Price = styled('p')`
   font-size: 20px;
`
const DateName = styled('p')`
   margin-left: 120px;
`

const LineHorizontal = styled('div')`
   border-top: 1px solid #c4c4c4;
   width: 100%;
   margin-top: -4px;
`
const TwoColumn = styled('div')`
   margin-left: 79px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 85%;
`
const NameColumn = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 30%;
   margin-left: -1px;
`
const NameColumn2 = styled('div')`
   display: flex;
   justify-content: flex-start;
   width: 47.5%;
`
const NameBlock = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 100%;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
   margin-left: 20px;
   margin-top: -46px;
`
