import styled from 'styled-components'
import AdminProfile from './AdminProdfile'

function Header() {
   return (
      <HeaderContainer>
         <FormSearch>
            <input type="search" />
         </FormSearch>
         <AdminProfile name="Администратор" />
      </HeaderContainer>
   )
}

export default Header

const FormSearch = styled.form`
   /* border: 1px solid red; */
   & > input {
      width: 100%;
      height: 34px;
   }
   width: 100%;
   padding: 15px 0;
`

const HeaderContainer = styled.div`
   /* border: 1px solid #000; */
   padding-left: 20px;
   padding-top: 35px;
   padding-bottom: 50px;
   padding-right: 66px;
   display: flex;
   flex-flow: row nowrap;
   align-items: flex-start;
   align-content: flex-start;
`
