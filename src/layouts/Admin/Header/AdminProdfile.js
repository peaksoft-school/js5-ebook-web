import styled from 'styled-components'
import IconButton from '../../IconButton'
import adminIcon from '../../../assets/icons/header/Vector.png'
import message from '../../../assets/icons/header/message.png'
import heart from '../../../assets/icons/header/heart.png'
import Jenre from '../../Jenre'

function AdminProfile() {
   const func = () => {
      alert('Hello world')
   }
   return (
      <ProfileContainer>
         <Jenre text="Жанры" onClick={func} />
         <IconButton icon={message} />
         <IconButton icon={heart} />
         <IconButton
            icon={adminIcon}
            backgroundColor="#E5E5E5"
            borderRadius="50%"
            label="Администратор"
            onClick={func}
         />
         <IconButton text="Корзинка" />
         {/* <ProfileName>{name}</ProfileName> */}
      </ProfileContainer>
   )
}

export default AdminProfile

const ProfileContainer = styled.div`
   /* border: 1px solid red; */
   /* width: 207px; */
   /* margin-left: 20px; */
   padding: 15px 0;
   display: flex;
   align-items: center;
   flex-flow: row nowrap;
`
