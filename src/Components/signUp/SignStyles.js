import styled from '@emotion/styled'
import Button from '../UI/Button/Button'

export const ButtonSubmit = ({ children, type, margintop }) => {
   return (
      <Button
         margintop={margintop || '40px'}
         variant="universal"
         background="#000"
         backgroundhover="#000"
         padding="10px 20px"
         type={type}
      >
         {children}
      </Button>
   )
}

export const ButtonUp = ({ children, ...props }) => {
   return (
      <Button
         variant="universal"
         backgroundhover="none"
         colorhover="#292929"
         color="#292929"
         width="40%"
         fontSize="20px"
         {...props}
      >
         {children}
      </Button>
   )
}

export const ButtonIn = ({ children, activeBtn, ...props }) => {
   return (
      <Button
         variant="universal"
         color={activeBtn ? '#292929' : '#969696'}
         backgroundhover="none"
         colorhover={activeBtn ? '#292929' : '#969696'}
         coloractive={activeBtn ? '#292929' : '#969696'}
         width="40%"
         fontSize="20px"
         fontWeight="600"
         {...props}
      >
         {children}
      </Button>
   )
}

export const Sup = styled('span')`
   color: red;
   font-size: 1rem;
`

export const InputLabel = styled('label')`
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 14px;
   display: flex;
   flex-direction: column;
   cursor: pointer;
`
export const LabelSpan = styled('span')`
   padding: 12px 0;
`

export const Form = styled('form')`
   width: 100%;
   padding-top: 10px;
`

export const SignBlock = styled('div')`
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   opacity: ${(props) => props.opacity || 1};
`
export const SpanError = styled('span')`
   width: 100%;
   display: flex;
   margin-top: 20px;
   font-family: 'Open Sans';
   justify-content: center;
   font-size: 14px;
   color: red;
`
