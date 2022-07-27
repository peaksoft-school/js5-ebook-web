import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ClientLayout from './layouts/ClientLayout'
import VendorLayout from './layouts/VendorLayout'
import AdminLayout from './layouts/AdminLayout'

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route path="/" exact>
                  <ClientLayout />
               </Route>
               <Route path="/vendor">
                  <VendorLayout />
               </Route>
               <Route path="/admin">
                  <AdminLayout />
               </Route>
            </Switch>
         </BrowserRouter>
      </div>
   )
}

export default App
