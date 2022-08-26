import styled from '@emotion/styled'
import { useNavigate } from 'react-router'
import Logotype from '../Logotype'
import SideDrowerMenu from './SideDrawerMenu'

function SideDrawer() {
   const navigate = useNavigate()
   const onClickItem = (nav) => {
      navigate(`/${nav}`)
   }
   return (
      <SideDrowerContainer>
         <Logotype />
         <SideDrowerMenu onClick={onClickItem} />
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
