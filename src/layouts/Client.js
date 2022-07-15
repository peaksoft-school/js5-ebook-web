import Header from './Header'
import AppContainer from './AppContainer'
import Logotype from './Logotype'
import IconButton from './IconButton'
import message from '../assets/icons/header/message.png'
import heart from '../assets/icons/header/heart.png'
import Jenre from './Jenre'
import Navbar from './Navbar'
import CominButtons from './CominButtons'

function Client() {
   return (
      <AppContainer
         primary
         header={
            <Header
               headerTop={
                  <>
                     <Logotype />
                     <IconButton icon={message} />
                     <IconButton icon={heart} />
                     <IconButton text="Корзина" />
                  </>
               }
               headerBottom={
                  <>
                     <Jenre text="Жанры" />
                     <Navbar />
                     <CominButtons />
                  </>
               }
            />
         }
         footer="footer"
      ></AppContainer>
   )
}

export default Client
