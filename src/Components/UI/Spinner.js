import { CircularProgress } from '@mui/material'
import styled from '@emotion/styled'

export default function Spinner() {
   return (
      <SpinnerBlock>
         <CircularProgress />
      </SpinnerBlock>
   )
}

const SpinnerBlock = styled('div')`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 9990;
   display: flex;
   background-color: rgba(0, 0, 0, 0.5);
   justify-content: center;
   align-items: center;
   padding: 20px 0;
`
