import { useState } from 'react'
import styled from 'styled-components'
import IconButton from '../../IconButton'
import adminIcon from '../../../assets/icons/header/Vector.png'
import message from '../../../assets/icons/header/message.png'
import heart from '../../../assets/icons/header/heart.png'
import Jenre from '../../Jenre'
import Button from '../../../Components/UI/Button/Button'
import GenreMenu from '../../../Components/UI/genreMenu/GenreMenu'

const arr = [
   {
      id: 1,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 2,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 3,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 4,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 5,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 6,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 7,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 8,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 9,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 10,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 11,
      name: 'Литература',
      quantity: 1234,
   },
   {
      id: 12,
      name: 'Литература',
      quantity: 1234,
   },
]

function AdminProfile() {
   const [bool, setBool] = useState(false)
   const func = () => {
      alert('Hello world')
   }
   const menuListHandler = () => {
      setBool(!bool)
   }
   const onSelectHandler = () => {
      setBool(false)
   }
   return (
      <ProfileContainer>
         <Jenre text="Жанры" onClick={menuListHandler}>
            {bool && <GenreMenu data={arr} onSelect={onSelectHandler} />}
         </Jenre>
         <Button variant="default" background="#1C1C1C">
            Войти
         </Button>
         <Button
            variant="default"
            background="none"
            color="#1C1C1C"
            border="1px solid #1C1C1C"
         >
            Регистрация
         </Button>
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
