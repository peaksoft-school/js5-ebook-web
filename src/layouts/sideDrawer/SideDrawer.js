import styled from '@emotion/styled'
import Logotype from '../Logotype'
import SideDrowerMenu from './SideDrawerMenu'

function SideDrawer() {
   return (
      <SideDrowerContainer>
         <Logotype />
         <SideDrowerMenu />
      </SideDrowerContainer>
   )
}

export default SideDrawer

const SideDrowerContainer = styled.div`
   /* border: 1px solid red; */
   height: 100vh;
   width: 250px;
   position: fixed;
   top: 0;
   left: 0;
   background-color: #f34901;
   display: flex;
   justify-content: center;
   flex-flow: row wrap;
   align-items: flex-start;
   align-content: flex-start;
`
