import styled from 'styled-components'

function Header({ headerTop, headerBottom, admin }) {
   return (
      <HeaderContainer admin={admin}>
         <HeaderTop>{headerTop}</HeaderTop>
         <HeaderBottom>{headerBottom}</HeaderBottom>
      </HeaderContainer>
   )
}

export default Header

const HeaderTop = styled.div`
   /* border: 1px solid red; */
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const HeaderBottom = styled(HeaderTop)`
   padding-top: 20px;
   justify-content: flex-start;
   & > div:nth-child(1) {
      /* border: 1px solid red; */
      flex-grow: 1;
   }
   & > ul {
      /* border: 1px solid red; */
      flex-grow: 9;
   }
`

const HeaderContainer = styled.div`
   /* border: 1px solid #000; */
   display: flex;
   flex-flow: column nowrap;
   padding: ${(props) => (props.admin ? '30px 0px' : 'none')};
`
