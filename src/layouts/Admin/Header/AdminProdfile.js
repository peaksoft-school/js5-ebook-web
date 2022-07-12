import styled from 'styled-components'
import adminIcon from '../../../assets/icons/header/Vector.png'

function AdminProfile({ name }) {
   return (
      <ProfileContainer>
         <ImageIcon />
         <ProfileName>{name}</ProfileName>
      </ProfileContainer>
   )
}

export default AdminProfile

const ProfileName = styled.h2`
   margin: 0;
   padding: 0;
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 1rem;
   cursor: pointer;
`

const ImageIcon = styled.div`
   width: 34px;
   height: 34px;
   border-radius: 50%;
   background-color: #e5e5e5;
   margin-right: 10px;
   background-image: url(${adminIcon});
   background-repeat: no-repeat;
   background-position: 50% 45%;
`

const ProfileContainer = styled.div`
   /* border: 1px solid red; */
   width: 207px;
   margin-left: 20px;
   padding: 15px 0;
   display: flex;
   align-items: center;
   flex-flow: row nowrap;
`
