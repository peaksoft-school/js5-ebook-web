import React from 'react';
import { ReactComponent as ToAccept } from '../../assets/icons/MeatBalls/accept.svg'
import { styled } from '@mui/material'
// POST
const AcceptRequest = ({name}) => {
    return (
        <Accept>
           
               <ToAccept/>
               <div>
               <h4>"{name}"</h4>
               <p>был успешно принят!</p>
               </div>
            
        </Accept>
    );
};

export default AcceptRequest;
const Accept=styled("div")`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 130%;
text-align: center;
color: #000000;
`