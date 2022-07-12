import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material'

const Button = ({ variant, children, onClick, ...props }) => {
   return (
      <ButtonStyle variant={variant} onClick={onClick} {...props}>
         {children}
      </ButtonStyle>
   )
}

export default Button

const ButtonStyle = styled(MuiButton)`
   text-transform: capitalize;
   padding: 8px 40px 8px 40px;
   border: none;
   font-weight: 600;
   font-family: 'Open Sans';
   line-height: 16.8px;
   font-style: normal;
   color: #ffffff;
   line-height: 120%;
   gap: 10px;
   margin-top: 12px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 0px;

   background: ${(props) =>
      props.variant === 'default' ? '#1c1c1c' : '#f34901'};
   width: ${(props) => (props.variant === 'default' ? '99px' : '224px')};
   padding: ${(props) => (props.variant === 'default' ? '10px 24px ' : ' ')};
   height: ${(props) => (props.variant === 'default' ? '42px' : ' 33px')};
   font-size: ${(props) => (props.variant === 'default' ? '16px' : '14px')};

   &:hover {
      background: ${(props) =>
         props.variant === 'default' ? ' #484848' : '#fe6f33'};
   }
   &:active {
      background: ${(props) =>
         props.variant === 'default' ? '#f34901' : '#f34901'};
   }
`
