import Header from './Header'
import AppContainer from './AppContainer'
import Logotype from './Logotype'
import IconButton from './IconButton'
import { ReactComponent as Message } from '../assets/icons/header/message.svg'
import { ReactComponent as Heart } from '../assets/icons/header/heart.svg'
import Jenre from './Jenre'
import Navbar from './Navbar'
import CominButtons from './CominButtons'
import Footer from './Footer'
import { useState } from 'react'
import GenreMenu from '../Components/UI/genreMenu/GenreMenu'

const arr = [
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Художественная литература ауауfjrgrgjrjgri',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Книги для детей',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Наука и техника',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Общество',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Деловая литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Красота. Здоровье. Спорт',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Увлечения',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Психология',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
   {
      name: 'Литература',
      id: Math.random().toFixed(),
      quantity: 1234
   },
]

function Client() {
   const [isShowMenu, setIsShowMenu] = useState(false)
   const showMenu = () => {
      setIsShowMenu(!isShowMenu)
   }
   return (
      <AppContainer
         primary
         header={
            <Header
               headerTop={
                  <>
                     <Logotype />
                     <input style={{ width: '100%' }}></input>
                     <IconButton icon={<Message />} />
                     <IconButton icon={<Heart />} />
                     <IconButton text="Корзина" />
                  </>
               }
               headerBottom={
                  <>
                     <Jenre text="Жанры" onClick={showMenu}>
                        {isShowMenu && <GenreMenu data={arr} />}
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

export default Client
