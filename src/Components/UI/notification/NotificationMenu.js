import Menu from '@mui/material/Menu'
import styled from '@emotion/styled'
import { Divider } from '@mui/material'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { useDispatch } from 'react-redux'
import { ReactComponent as Meatballls } from '../../../assets/icons/MeatBalls/meatballsIcon.svg'
import logo from '../../../assets/images/logo.svg'
import PopUp from '../popup'
import { readNotification } from '../../../store/slices/notificationSlice'

const NotificationMenu = ({
   anchorEl,
   handleClose,
   open,
   menuItems,
   onClick,
}) => {
   const [isOpenPopup, setIsOpenPopup] = useState(false)
   const [anchorElPopup, setAnchorElPopup] = useState(null)
   const dispatch = useDispatch()

   const handleOpenPopup = (e) => {
      setAnchorElPopup(e.currentTarget)
      setIsOpenPopup(true)
   }
   const handleClosePopup = () => {
      setIsOpenPopup(false)
   }
   const handleReadNotif = () => {
      dispatch(readNotification())
      handleClosePopup()
   }
   return (
      <StyledMenu
         id="basic-menu"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
      >
         <PopUp
            open={isOpenPopup}
            close={handleClosePopup}
            anchorEl={anchorElPopup}
         >
            <StyledPopupText onClick={handleReadNotif}>
               Отметить как прочитанное
            </StyledPopupText>
         </PopUp>
         <StyledTitle>
            Ваши уведомления{' '}
            <Meatballls onClick={handleOpenPopup} anchorEl={anchorElPopup} />
         </StyledTitle>

         {menuItems.map((item) => (
            <>
               <StyledMenuItem
                  key={item.id}
                  onClick={() => onClick(item.id)}
                  primary={item.read}
               >
                  <StyledItem>
                     <StyledImage src={logo} />
                     <StyledText>
                        <StyledStatus>
                           {item.bookStatus === 'ACCEPTED'
                              ? 'Ваша заявка .... была принята'
                              : 'Ваша заявка .... была отклонена'}
                        </StyledStatus>
                        <StyledDate>
                           {`${item.dateOfStatus[2]}.${item.dateOfStatus[1]}.${item.dateOfStatus[0]}`}
                        </StyledDate>
                     </StyledText>
                  </StyledItem>
               </StyledMenuItem>
               <Divider />
            </>
         ))}
      </StyledMenu>
   )
}

export default NotificationMenu

export const StyledMenu = styled(Menu)`
   .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
      padding: 0px 20px;
      width: 409px;
      background: #ffff;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      ::-webkit-scrollbar {
         width: 5px;
      }
      ::-webkit-scrollbar-track {
         background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
         background: #888;
         border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
         background: #555;
      }
   }
`
const StyledTitle = styled.p`
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
`
export const StyledMenuItem = styled.div`
   display: flex;
   align-items: center;
   width: 409px;
   height: 75px;
   background: ${(props) => (!props.primary ? '#F0F0F0' : '#ffff')};
`
export const StyledImage = styled.img`
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
   width: 340px;
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
const StyledPopupText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   cursor: pointer;
`
