import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import MeadBalls from '../../../assets/icons/MeatBalls/MeatBall.svg'
import { styled } from '@mui/material'
export default function MeatBalls({ options, func }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   return (
      <Div>
         <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            <img src={MeadBalls} alt="balls" />
         </Button>
         <MenuStyle
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            {options.map((el) => (
               <MenuItemStyles key={el.id} onClick={() => el.clickItem(func)}>
                  {el.icon}
                  {el.title}
               </MenuItemStyles>
            ))}
         </MenuStyle>
      </Div>
   )
}

const MenuItemStyles = styled(MenuItem)`
   display: flex;
   justify-content: space-around;
   border-bottom: 1px solid gray;
   height: 45px;
   width: 150px;
   margin-left: 10px;
`

const Div = styled('div')`
   margin-right: -28px;
`
const MenuStyle = styled(Menu)`
   .MuiMenu-paper {
      margin-left: -140px;
      margin-top: -5px;
      border-radius: 0px;
      width: 173px;
      height: 96px;
      box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
      overflow-y: hidden;
   }
`
