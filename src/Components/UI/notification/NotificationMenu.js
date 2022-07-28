import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import meatballsIcon from '../../../assets/icons/MeatBalls/meatballsIcon.svg'
import styled from '@emotion/styled'

const NotificationMenu = ({
   anchorEl,
   handleClose,
   open,
   onClick,
   menuItems,
}) => {
   return (
      <StyledMenu
         id="basic-menu"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
      >
         <StyledTitle>
            Ваши уведомления <img src={meatballsIcon} />
         </StyledTitle>

         {menuItems.map((item) => (
            <StyledMenuItem key={item.id}>
               <StyledItem onClick={() => onClick(item.id)}>
                  <StyledImage src={item.image} />
                  <StyledText>
                     <StyledStatus>{item.label}</StyledStatus>
                     <StyledDate>{item.date}</StyledDate>
                  </StyledText>
               </StyledItem>
            </StyledMenuItem>
         ))}
      </StyledMenu>
   )
}

export default NotificationMenu

export const StyledMenu = styled(Menu)`
   .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
      padding: 0px 20px;
      width: 409px;
      height: 754px;
      background: #ffff;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      margin-top: 20px;
   }
`
const StyledTitle = styled.p`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const StyledMenuItem = styled.div`
   display: flex;
   align-items: center;
   width: 409px;
   height: 75px;
`
export const StyledImage = styled.img`
   width: 75px;
   margin-right: 8px;
`
export const StyledText = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 250px;
   height: 42px;
`

export const StyledItem = styled(MenuItem)`
   padding: 0px;
`

export const StyledDate = styled.span`
   width: 99px;
   height: 16px;
   left: 101px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 130%;
   color: #969696;
`
export const StyledStatus = styled.span`
   width: 233px;
   height: 21px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #000000;
`
