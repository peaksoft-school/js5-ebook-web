import { Outlet } from 'react-router'
import AppContainer, { Wrapper } from './AppContainer'
import Header from './Header'
import IconButton from './IconButton'
import Logotype from './Logotype'
import { ReactComponent as VendorIcon } from '../assets/icons/header/admin.svg'
import { ReactComponent as MessageIcon } from '../assets/icons/header/message.svg'
import { ReactComponent as NotificatonIcon } from '../assets/icons/header/notification.svg'
import { ReactComponent as Treugolnik } from '../assets/icons/header/treugolnik.svg'
import CardItems from './CardItems'
import Footer from './Footer'
// import Outlet from 'react-router-dom'
import SearchInput from '../Components/UI/Inputs/SearchInput'
// import AddBookPage from '../containers/vendorMainPage/AddBookPage'

function Vendor() {
   return (
      <Wrapper>
         <AppContainer
            primary
            main={<Outlet />}
            header={
               <Header
                  headerTop={
                     <>
                        <CardItems flexShrink={0} flexGrow={0}>
                           <Logotype />
                        </CardItems>
                        <CardItems flexGrow={1} padding="0 20px">
                           <SearchInput />
                        </CardItems>
                        <CardItems flexGrow={0} flexShrink={0}>
                           <IconButton icon={<MessageIcon />} />
                           <IconButton icon={<NotificatonIcon />} />
                           <IconButton
                              icon={<VendorIcon />}
                              backgroundColor="#DBDBDB"
                              borderRadius="50%"
                              label={<Treugolnik />}
                           />
                        </CardItems>
                     </>
                  }
               />
            }
            footer={<Footer vendor />}
         />
      </Wrapper>
   )
}

export default Vendor
