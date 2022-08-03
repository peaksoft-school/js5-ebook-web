import './App.css'
import { InnerPage } from './Components/UI/UserInnerPage/InnerPage'
import { Route,  Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import {BooksPage} from './Components/UI/UserInnerPage/BooksPage'
import Message from './Components/UI/Message/Message'
function App() {

   return (
      <div className="App">
      {/* <BrowserRouter> */}
            {/* <VendorLayout>
               {/* <Route path="/">
                  <Redirect to="home" />
               </Route>
               <Route exact path="/home">
                  <BooksPage />
               </Route> */}
               {/* <Route path="/book-detail/:bookId">
                  <InnerPage />
               </Route> */}
            {/* </VendorLayout> */}
         {/* </BrowserRouter>  */}
         <Message />
               </div>
   )

}

export default App
