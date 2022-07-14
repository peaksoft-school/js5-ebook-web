import styled from 'styled-components'
import Logotype from '../../Logotype'
import AdminProfile from './AdminProdfile'

function Header() {
   return (
      <HeaderContainer>
         <Logotype />
         <FormSearch>
            <input type="search" />
         </FormSearch>
         <AdminProfile name="Администратор" />
      </HeaderContainer>
   )
}

export default Header

const FormSearch = styled.form`
   & > input {
      width: 100%;
      height: 34px;
   }
   width: 100%;
   padding: 15px 0;
`

const HeaderContainer = styled.div`
   border: 1px solid #000;
   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   & > div {
      flex: 0 0 auto;
   }
`
