import styled from '@emotion/styled'

export default function Button({ children, ...props }) {
   return (
      <ButtonStyle disableRipple {...props}>
         {children}
      </ButtonStyle>
   )
}

const ButtonStyle = styled('button')((props) => ({
   color: props.color || '#ffffff',
   background: props.background || ' #1c1c1c',
   width: props.width || '99px',
   height: props.height || '42px',
   fontFamily: 'Open Sans',
   padding: props.padding || '10px 24px',
   fontSize: props.fontSize || '16px',
   fontWeight: '600',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   border: 'none',
   '&:hover': {
      background: props.hover ? '#FE6F33' : '#484848',
   },
   '&:active': {
      background: props.hover ? '#E54400' : ' #F34901',
   },
}))
