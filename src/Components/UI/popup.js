import styled from '@emotion/styled'
import { Menu } from '@mui/material'

function PopUp({ children, open, anchorEl, close }) {
   return (
      <MenuPopUp open={open} onClose={close} anchorEl={anchorEl}>
         {children}
      </MenuPopUp>
   )
}

export default PopUp

const MenuPopUp = styled(Menu)`
   height: ${(props) => (props.height ? props.height : '')};

   & div {
      border-radius: 0;
      /* margin-top: 5px; */
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
   & div {
      scroll-snap-type: x proximity;
      ::-webkit-scrollbar {
         width: 5px;
      }
      /* Track */
      ::-webkit-scrollbar-track {
         background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
         background: #888;
         border-radius: 10px;
      }
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
         background: #555;
      }
   }
`
