import styled, { css } from 'styled-components'

function Container({ header, main, footer, sidebar, primary }) {
   return (
      <>
         <AppContainer primary={primary}>
            <Item maxWidth={sidebar}>
               <Header>{header}</Header>
               <Main>{main}</Main>
            </Item>
            {sidebar && <Item>{sidebar}</Item>}
         </AppContainer>
         {footer && (
            <Footer>
               <AppContainer primary>{footer}</AppContainer>
            </Footer>
         )}
      </>
   )
}

export default Container

export const Wrapper = styled('div')`
   background-color: #f8f8f8;
`

const Header = styled.div`
   min-height: 100px;
   flex-grow: 0;
   flex-shrink: 0;
`
const Footer = styled(Header)`
   background: #1c1c1c;
   position: relative;
`

const Main = styled(Header)`
   flex-basis: auto;
   min-height: 100vh;
   flex-grow: 1;
   justify-content: flex-start;
   flex-flow: column nowrap;
   align-items: flex-start;
`

const Item = styled.div`
   min-width: 240px;
   flex-grow: 1;
   flex-shrink: 0;
   max-width: 100%;
   display: flex;
   flex-flow: column;
   height: auto;
   /* max-width: 1280px; */
   max-width: 100%;
   ${(props) =>
      props.maxWidth &&
      css`
         max-width: 900px;
      `}
   &:nth-child(2) {
      flex-grow: 0;
      flex-shrink: 0;
      order: -1;
   }
`
const AppContainer = styled.div`
   /* border: 1px solid red; */
   padding: 0 20px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: flex-start;
   ${(props) =>
      props.primary &&
      css`
         max-width: 1280px;
         margin: 0 auto;
      `}
`
