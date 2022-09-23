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
import logo from '../../../assets/images/logo.svg'

const NotificationDetail = ({ onClick, anchorEl, item }) => {
   const statusOfBook =
      item.bookStatus === 'ACCEPTED'
         ? 'Ваша заявка .... была принята'
         : 'Ваша заявка .... была отклонена'
   const causeOfBook =
      item.bookStatus === 'ACCEPTED' ? 'Причина принятия' : 'Причина отклонения'

   const description = item.description ? (
      item.description
   ) : (
      <StyledEmptyCauseText>Причины нет</StyledEmptyCauseText>
   )
   return (
      <StyledMenu id="basic-menu" anchorEl={anchorEl} open={onClick}>
         <StyledTitle onClick={onClick}>
            <img src={backArrowIcon} alt="" /> Назад
         </StyledTitle>
         <StyledMenuItem key={item.id}>
            <StyledItem>
               <StyledImage src={logo} />
               <StyledText>
                  <StyledStatus>{statusOfBook}</StyledStatus>
                  <StyledDate>{item.dateOfStatus}</StyledDate>
               </StyledText>
            </StyledItem>
         </StyledMenuItem>
         <div>
            <StyledCauseTitle>{causeOfBook}</StyledCauseTitle>
            <StyledCauseText>{description}</StyledCauseText>
         </div>
      </StyledMenu>
   )
}

export default NotificationDetail

const StyledMenu = styled(Menu)`
   .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
      padding: 0px 20px;
      background: #ffff;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #000000;
      width: 409px;
   }
`
const StyledTitle = styled.p`
   width: 65px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
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
const StyledEmptyCauseText = styled.p`
   width: 369px;
   // height: 54px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #969696;
`
const StyledCauseText = styled.p`
   width: 369px;
   // height: 54px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #000000;
`
