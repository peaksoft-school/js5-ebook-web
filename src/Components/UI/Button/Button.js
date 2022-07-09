import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material'

const ButtonComponent = ({ children, ...props }) => {
   return <ButtonStyle {...props}>{children}</ButtonStyle>
}

export default ButtonComponent

const ButtonStyle = styled(MuiButton)`
   box-shadow: none;
   border-radius: 0px;
   font-weight: 600;
   font-family: open sans-serif;
   font-style: normal;

   &.MuiButton-backgroundblack {
      padding: 10px, 24px, 10px, 24px;
      background: #1c1c1c;
      padding: 10px 24px;
      height: 42px;
      width: 99px;
      color: #ffffff;
      font-size: 16px;
      &:hover {
         background: #484848;
      }
      &:active {
         background: #f34901;
      }
   }
   &.MuiButton-backgroundred {
      background: #f34901;
      width: 242px;
      height: 33px;
      padding: 8px, 40px, 8px, 40px;
      color: #ffffff;
      font-size: 14px;
      &:hover {
         background: #fe6f33;
      }
      &:active {
         background: #e54400;
      }
   }
   &.MuiButton-default {
      padding: 10px, 16px, 10px, 16px;
      background: grey;
      padding: 10px 24px;
      height: 39px;
      width: 153px;
      color: #c4c4c4;
      font-size: 14px;
   }
   &:hover {
      background: #fe6f33;
   }
   &:active {
      background: #e54400;
   }
`
