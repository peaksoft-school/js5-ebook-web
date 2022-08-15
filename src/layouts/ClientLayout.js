import { Outlet } from 'react-router'
import Header from './Header'
import AppContainer, { Wrapper } from './AppContainer'
import Logotype from './Logotype'
import IconButton from './IconButton'
import { ReactComponent as Message } from '../assets/icons/header/message.svg'
import { ReactComponent as Heart } from '../assets/icons/header/heart.svg'
import Jenre from './Jenre'
import Navbar from './Navbar'
import CominButtons from './AuthenticationButtons'
import Footer from './Footer'
import CardItems from './CardItems'
import SearchInput from '../Components/UI/Inputs/SearchInput'

function ClientLayout() {
   return (
      <Wrapper>
         <AppContainer
            primary
            main={<Outlet />}
            header={
               <Header
                  headerTop={
                     <>
                        <CardItems flexGrow={0} flexShrink={0}>
                           <Logotype />
                        </CardItems>
                        <CardItems flexGrow={1} padding="0 20px">
                           <SearchInput />
                        </CardItems>
                        <CardItems flexGrow={0} flexShrink={0}>
                           <IconButton icon={<Message />} />
                           <IconButton icon={<Heart />} />
                           <IconButton text="Корзина" />
                        </CardItems>
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
            footer={<Footer />}
         />
      </Wrapper>
   )
}

export default ClientLayout
