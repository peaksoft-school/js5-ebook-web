import { Outlet } from 'react-router'
// import { useSelector } from 'react-redux'
import Header from './Header'
import AppContainer, { Wrapper } from './AppContainer'
import Logotype from './Logotype'
import IconButton from './IconButton'
import { ReactComponent as Message } from '../assets/icons/header/message.svg'
import { ReactComponent as Heart } from '../assets/icons/header/heart.svg'
import Genre from './Genre'
import Navbar from './Navbar'
import AuthenticationButtons from './AuthenticationButtons'
import Footer from './Footer'
import CardItems from './CardItems'
import SearchInputBlock from './SearchInputBlock'

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
                           <SearchInputBlock />
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
                        <Genre text="Жанры" />
                        <Navbar />
                        <AuthenticationButtons />
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
