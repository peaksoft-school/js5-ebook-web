import { Routes, Route } from 'react-router-dom'

// import Breadcrumbs from './Components/UI/breadCrumbs/Breadcrumbs'
// import Adminlayout from './layouts/AdminLayout'
import AdminApplications from './containers/AdminApplications'

import { InnerPageAdminApplication } from './containers/InnerPageAdminApplication'

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<AdminApplications />} />
            <Route
               path="/request/:id"
               element={<InnerPageAdminApplication />}
            />
         </Routes>
      </div>
   )
}

export default App
