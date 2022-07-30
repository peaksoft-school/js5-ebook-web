import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { InnerPage } from './Components/vendor/InnerPage'
import { BooksPage } from './Components/vendor/BooksPage'
import About from './Components/vendor/About'
import BookFragment from './Components/vendor/BookFragment'

function App() {
   return (
      <div>
      <BrowserRouter>
      {/* <Switch> */}
      <Route exact path='/'>
        <BooksPage/>
      </Route>
      <Route path='/book-detail/:bookId'>
        <InnerPage/>
      </Route>
         <Route path="/about">
            <About />
         </Route>
         <Route path="/fragment">
            <BookFragment />
         </Route>
      {/* </Switch> */}
      </BrowserRouter>
    </div>
   )
}

export default App
