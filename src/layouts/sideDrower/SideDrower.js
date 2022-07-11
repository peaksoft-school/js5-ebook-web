import styled from '@emotion/styled'
import Logotype from '../Logotyp'
import SideDrowerMenu from './SideDrowerMenu'

function SideDrower() {
   return (
      <SideDrowerContainer>
         <Logotype />
         <SideDrowerMenu />
      </SideDrowerContainer>
   )
}

export default SideDrower

const SideDrowerContainer = styled.div`
   /* border: 1px solid red; */
   width: 250px;
   height: 100vh;
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
