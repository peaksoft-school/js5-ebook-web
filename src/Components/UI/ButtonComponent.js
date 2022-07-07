import React from 'react'
import  MuiButton  from '@mui/material/Button'
import { styled } from '@mui/material'



const ButtonComponent = ({children, ...props}) => {
  return  <ButtonStyle {...props}>{children}</ButtonStyle>
}

export default ButtonComponent


 
const ButtonStyle = styled(MuiButton)`
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px ;
  line-height: 120%;
  border-radius: 0px;

  &.MuiButton-contained {
    background: #1C1C1C;
    padding: 10px 24px;
    height: 42px;
    width: 99px;
    margin-bottom: 10px;
    &:hover{
      background: #484848;
    }
    &:active{
      background: #F34901;
    }
  }
  &.MuiButton-text{
    background: #F34901;
    width: 242px;
    height: 33px;
    color: #FFFFFF;
    &:hover{
      background: #FE6F33;
    }
    &:active{
      background: #E54400;
    }
  }
 
`
