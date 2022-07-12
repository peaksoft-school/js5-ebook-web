import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Admin from './containers/Admin/Admin'
import Client from './containers/Client/Client'
import Vendor from './containers/Vendor/Vendor'
import SideDrower from './containers/Admin/sideDrower/SideDrower'

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route path="/" exact>
                  <SideDrower />
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
