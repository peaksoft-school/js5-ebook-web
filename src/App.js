import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import ClientLayout from './layouts/ClientLayout'
import VendorLayout from './layouts/VendorLayout'

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route path="/" exact>
                  <Redirect to="/Client" />
               </Route>
               <Route path="/Admin">
                  <AdminLayout />
               </Route>
               <Route path="/Vendor">
                  <VendorLayout />
               </Route>
               <Route path="/Client">
                  <ClientLayout />
               </Route>
            </Switch>
         </BrowserRouter>
      </div>
   )
}

export default App
