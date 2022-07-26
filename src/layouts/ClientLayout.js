import Header from './Header'
import AppContainer from './AppContainer'
import Logotype from './Logotype'
import IconButton from './IconButton'
import { ReactComponent as Message } from '../assets/icons/header/message.svg'
import { ReactComponent as Heart } from '../assets/icons/header/heart.svg'
import Jenre from './Jenre'
import Navbar from './Navbar'
import CominButtons from './AuthenticationButtons'
import Footer from './Footer'
import { useState } from 'react'
import GenreMenu from '../Components/UI/genreMenu/GenreMenu'
import CardItems from './CardItems'

const arr = [
   {
      name: 'Литература',
      id: Math.random(),
      quantity: 1234,
   },
   {
      name: 'Художественная литература ауауfjrgrgjrjgri',
      id: Math.random(),
      quantity: 1234,
   },
   {
      name: 'Книги для детей',
      id: Math.random(),
      quantity: 1234,
   },
   {
      name: 'Наука и техника',
      id: Math.random(),
      quantity: 1234,
   },
   {
      name: 'Общество',
      id: Math.random(),
      quantity: 1234,
   },
]

function ClientLayout() {
   const [isShowMenu, setIsShowMenu] = useState(false)
   const showMenu = () => {
      setIsShowMenu(!isShowMenu)
   }
   const func = () => {
      console.log('Hello world')
   }
   return (
      <AppContainer
         primary
         header={
            <Header
               headerTop={
                  <>
                     <CardItems flexGrow={0} flexShrink={0}>
                        <Logotype />
                     </CardItems>
                     <CardItems flexGrow={1}></CardItems>
                     <CardItems flexGrow={0} flexShrink={0}>
                        <IconButton icon={<Message />} />
                        <IconButton icon={<Heart />} />
                        <IconButton text="Корзина" />
                     </CardItems>
                  </>
               }
               headerBottom={
                  <>
                     <Jenre text="Жанры" onClick={showMenu}>
                        {isShowMenu && <GenreMenu data={arr} onSelect={func} />}
                     </Jenre>
                     <Navbar />
                     <CominButtons />
                  </>
               }
            />
         }
         footer={<Footer />}
      ></AppContainer>
   )
}

export default ClientLayout
