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
   padding: ${(props) => props.padding || '10px 20px'};
   border: none;
   font-weight: ${(props) => props.fontWeight || '600'};
   font-family: 'Open Sans';
   line-height: 16.8px;
   font-style: normal;
   color: #ffffff;
   line-height: 120%;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 0px;

   background: ${(props) =>
      props.variant === 'default' ? '#1c1c1c' : '#f34901'};
   padding: ${(props) => (props.variant === 'default' ? '10px 24px ' : ' ')};
   font-size: ${(props) => props.fontSize || '16px'};

   &:hover {
      background: ${(props) => props.backgroundhover || '#fe6f33'};
      color: ${(props) => props.colorhover || 'fff'};
   }
   &:active {
      color: ${(props) => props.coloractive};
      background: ${(props) => props.backgroundHover || '#fe6f33'};
      color: #ffffff;
   }

   background: ${(props) => (props.variant === 'universal' ? 'white' : '')};
   background: ${(props) => (props.background ? props.background : '')};
   border: ${(props) => (props.variant === 'universal' ? props.border : '')};
   color: ${(props) => (props.color ? props.color : '')};
   border: ${(props) => (props.border ? props.border : '')};
   border-radius: ${(props) => (props.borderradius ? props.borderradius : '')};
   width: ${(props) => props.width || '100%'};
   padding: ${(props) => props.padding || '10px 24px'};
   font-size: ${(props) => props.fontSize || '16px'};
   font-family: ${(props) => props.fontFamily || 'Open Sans'};
   margin-right: ${(props) => (props.marginright ? props.marginright : '0px')};
   margin-top: ${(props) => props.margintop || '0px'};
   width: ${(props) => props.width || '100%'};
`
