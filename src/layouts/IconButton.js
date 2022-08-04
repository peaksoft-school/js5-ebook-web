import styled, { css } from 'styled-components'
// import heart from '../assets/icons/header/heart.png'

function IconButton({
   icon,
   onClick,
   backgroundColor,
   borderRadius,
   text,
   label,
}) {
   return (
      <Label>
         <CommunicationIcon
            icon={icon}
            onClick={onClick}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            text={text}
         >
            {icon}
            {text}
         </CommunicationIcon>
         {label}
      </Label>
   )
}

export default IconButton

const Label = styled.label`
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 1rem;
   line-height: 21.79px;
   cursor: pointer;
   display: flex;
   align-items: center;
`

const CommunicationIcon = styled.button`
   width: 34px;
   height: 34px;
   border-radius: ${(props) => props.borderRadius || 'none'};
   background-color: ${(props) => props.backgroundColor || 'rgba(0, 0, 0, 0)'};
   margin-right: 10px;
   background-repeat: no-repeat;
   background-position: 50% 50%;
   border: none;
   cursor: pointer;
   font-family: 'Open Sans';
   font-size: 1rem;
   font-weight: 400;
   line-height: 18px;
   transition: ease-in 0.2s;
   &:active {
      transform: scale(1.1);
   }
   /* ${(props) =>
      props.icon &&
      css`
         background-image: url(${props.icon});
      `} */
   ${(props) =>
      props.text &&
      css`
         width: auto;
         height: auto;
      `}
`
