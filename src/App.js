import './App.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { InnerPage } from './Components/vendor/InnerPage'
import VendorLayout from './layouts/VendorLayout'
import { BooksPage } from './Components/vendor/BooksPage'

function App() {
   return (
      <div>
         <BrowserRouter>
            <VendorLayout>
               <Route path="/">
                  <Redirect to="home" />
               </Route>
               <Route exact path="/home">
                  <BooksPage />
               </Route>
               <Route path="/books/:bookId">
                  <InnerPage />
               </Route>
            </VendorLayout>
         </BrowserRouter>
      </div>
   )
}

export default App
