import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { InnerPage } from './Components/vendor/InnerPage'
import { BooksPage } from './Components/vendor/BooksPage'
import VendorLayout from './layouts/VendorLayout'

function App() {
   return (
      <div>
         <BrowserRouter>
            <VendorLayout>
               <Route exact path="/">
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
