import { Route, Redirect } from 'react-router-dom'
import { InnerPage } from './Components/UI/UserInnerPage/UserInnerPage'
import { BooksPage } from './Components/UI/UserInnerPage/BooksPage'
import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <div className="App">
         <Route path="/">
            <Redirect to="home" />
         </Route>
         <Route exact path="/home">
            <BooksPage />
         </Route>
         <Route path="/book-detail/:bookId">
            <InnerPage />
         </Route>
         <AppRoutes />
      </div>
   )
}

export default App
