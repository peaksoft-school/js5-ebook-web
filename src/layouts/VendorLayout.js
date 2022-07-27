import AppContainer from './AppContainer'
import Header from './Header'
import IconButton from './IconButton'
import Logotype from './Logotype'
import { ReactComponent as VendorIcon } from '../assets/icons/header/admin.svg'
import { ReactComponent as MessageIcon } from '../assets/icons/header/message.svg'
import { ReactComponent as NotificatonIcon } from '../assets/icons/header/notification.svg'
import { ReactComponent as Treugolnik } from '../assets/icons/header/treugolnik.svg'
import CardItems from './CardItems'
import Footer from './Footer'

function Vendor() {
   return (
      <AppContainer
         header={
            <Header
               headerTop={
                  <>
                     <CardItems flexShrink={0} flexGrow={0}>
                        <Logotype />
                     </CardItems>
                     <CardItems flexGrow={1}></CardItems>
                     <CardItems flexGrow={0}>
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
      ></AppContainer>
   )
}

export default Vendor
