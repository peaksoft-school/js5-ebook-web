import { CircularProgress } from '@mui/material'
import styled from '@emotion/styled'

export default function Spinner({ variant }) {
   return (
      <SpinnerBlock variant={variant}>
         <CircularProgress />
      </SpinnerBlock>
   )
}

const SpinnerBlock = styled('div')`
   position: ${(props) => (props.variant === 'two' ? 'none' : 'fixed')};
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100%;
   height: ${(props) => (props.variant === 'two' ? '50vh' : '100vh')};
   z-index: 9990;
   display: flex;
   background-color: ${(props) =>
      props.variant === 'two' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)'};
   justify-content: center;
   align-items: center;
   padding: 20px 0;
`
