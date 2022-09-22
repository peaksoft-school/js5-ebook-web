import { styled } from '@mui/material'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function UserTab() {
   const {
      numberOfElements,
      totalElementFavoriteBooks,
      totalElementBasketBooks,
   } = useSelector((state) => state.adminUsers)
   return (
      <Div>
         <NavLink to="purchasedHistory">Купленные ({numberOfElements})</NavLink>
         <NavLink to="favorite">
            В избранном ({totalElementFavoriteBooks})
         </NavLink>
         <NavLink to="basket">В корзине ({totalElementBasketBooks})</NavLink>
      </Div>
   )
}

const Div = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 185px;
   margin-top: 20px;
   & a {
      text-decoration: none;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #222222;
      .current {
         color: #f34901;
      }
   }
   & a.active {
      color: #f34901;
   }
`
