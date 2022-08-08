import React from 'react'
import { styled } from '@mui/material'
import { ReactComponent as ToAccept } from '../../assets/icons/MeatBalls/accept.svg'

const AcceptRequest = ({ name }) => {
   return (
      <Accept>
         <ToAccept />
         <div>
            <NameApplication> {name} </NameApplication>
            <p>был успешно принят!</p>
         </div>
      </Accept>
   )
}

export default AcceptRequest
const Accept = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 20px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 130%;
   text-align: center;
   color: #000000;
`
const NameApplication = styled('h4')`
   margin-bottom: -18px;
`
