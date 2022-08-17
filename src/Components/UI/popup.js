import styled from '@emotion/styled'
import { Menu } from '@mui/material'

function PopUp({ children, ...props }) {
   return <MenuPopUp {...props}>{children}</MenuPopUp>
}

export default PopUp

const MenuPopUp = styled(Menu)`
   & div {
      border-radius: 0;
      margin-top: 5px;
   }
   & ul {
      padding: 15px 20px;
   }
   & li {
      border-bottom: 1px solid #c4c4c4;
      padding-left: 0;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 14px;
      color: #222222;
      min-width: 100px;
   }
   & li:last-child {
      border-bottom: none;
   }
`
