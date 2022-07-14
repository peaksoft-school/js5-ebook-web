import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Admin from './layouts/Admin/Admin'
import Client from './layouts/Client/Client'
import Vendor from './containers/Vendor/Vendor'

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route path="/" exact>
                  <Redirect to="/Client" />
               </Route>
               <Route path="/Admin">
                  <Admin />
               </Route>
               <Route path="/Vendor">
                  <Vendor />
               </Route>
               <Route path="/Client">
                  <Client />
               </Route>
            </Switch>
         </BrowserRouter>
      </div>
   )
}

export default App
