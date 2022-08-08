import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { InnerPage } from './Components/UI/UserInnerPage/UserInnerPage'
import { BooksPage } from './Components/UI/UserInnerPage/BooksPage'
import VendorLayout from './layouts/VendorLayout'

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <VendorLayout>
               <Route path="/">
                  <Redirect to="home" />
               </Route>
               <Route exact path="/home">
                  <BooksPage />
               </Route>
               <Route path="/book-detail/:bookId">
                  <InnerPage />
               </Route>
            </VendorLayout>
         </BrowserRouter>
      </div>
   )
}
export default App
