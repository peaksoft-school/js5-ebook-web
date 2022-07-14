import styled, { css } from 'styled-components'

function Container({ children, variant }) {
   return <AppContainer variant={variant}>{children}</AppContainer>
}

export default Container

const AppContainer = styled.div`
   border: 1px solid #000;
   height: 100vh;
   margin-left: 250px;
   /* padding-left: 20px; */
   /* padding-right: 66px; */
   ${(props) =>
      props.variant &&
      css`
         margin: 0 auto;
         max-width: 1240px;
      `}
`
