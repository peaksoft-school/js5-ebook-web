import styled from '@emotion/styled'
import { Menu } from '@mui/material'
import backArrowIcon from '../../../assets/icons/backArrow.svg'
import {
   StyledMenuItem,
   StyledDate,
   StyledImage,
   StyledStatus,
   StyledText,
   StyledItem,
} from './NotificationMenu'

export const NotificationDetail = ({ onClick, anchorEl, item }) => {
   console.log(item)
   return (
      <StyledMenu id="basic-menu" anchorEl={anchorEl} open={onClick}>
         <StyledTitle onClick={onClick}>
            <img src={backArrowIcon} alt="" /> Назад
         </StyledTitle>
         <StyledMenuItem key={item.id}>
            <StyledItem>
               <StyledImage src={item.image} />
               <StyledText>
                  <StyledStatus>{item.label}</StyledStatus>
                  <StyledDate>{item.date}</StyledDate>
               </StyledText>
            </StyledItem>
         </StyledMenuItem>
         <div>
            <StyledCauseTitle>Причина отклонения</StyledCauseTitle>
            <StyledCauseText>{item.text}</StyledCauseText>
         </div>
      </StyledMenu>
   )
}

const StyledMenu = styled(Menu)`
   .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
      padding: 0px 20px;
      width: 409px;
      height: 754px;
      background: #ffff;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #000000;
      margin-top: 20px;
   }
`
const StyledTitle = styled.p`
   width: 65px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const StyledCauseTitle = styled.p`
   width: 126px;
   height: 16px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 130%;
   color: #000000;
`
const StyledCauseText = styled.p`
   width: 369px;
   height: 54px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #000000;
`
