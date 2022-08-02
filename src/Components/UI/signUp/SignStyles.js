import styled from '@emotion/styled'
import Button from '../Button/Button'

export const ButtonSubmit = ({ children, type }) => {
   return (
      <Button
         margintop="40px"
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

export const ButtonUp = ({ children }) => {
   return (
      <Button
         variant="universal"
         backgroundhover="none"
         colorhover="#292929"
         color="#292929"
         width="40%"
         fontSize="20px"
      >
         {children}
      </Button>
   )
}

export const ButtonIn = ({ children }) => {
   return (
      <Button
         variant="universal"
         color="#969696"
         backgroundhover="none"
         colorhover="#292929"
         coloractive="#292929"
         width="40%"
         fontSize="20px"
         fontWeight="400"
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
`
