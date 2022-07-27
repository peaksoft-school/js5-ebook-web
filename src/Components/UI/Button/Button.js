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
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 0px;

   background: ${(props) => props.variant === 'default' ? '#1c1c1c' : '#f34901'};
   padding: ${(props) => (props.variant === 'default' ? '10px 24px ' : ' ')};
   height: ${(props) => (props.variant === 'default' ? '42px' : ' 33px')};
   font-size: ${(props) => (props.variant === 'default' ? '16px' : '14px')};

   &:hover {
      background: ${(props) =>
         props.variant === 'default' ? ' #484848' : '#fe6f33'};
      color: #ffffff;
   }

   background: ${(props) => (props.variant === 'universal' ? 'white' : '')};
   background: ${(props) => (props.background ? props.background : '')};
   border: ${(props) => (props.variant === 'universal' ? props.border : '')};
   color: ${(props) => (props.color ? props.color : '')};
   border: ${(props) => (props.border ? props.border : '')};
   border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
   margin-right: ${(props) => (props.marginright ? props.marginright : '0px')};
`
