// import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import AppRoutes from './routes/AppRoutes'
// import Spinner from './Components/UI/Spinner'
import InnerPageAdminApplication from './containers/adminContainers/adminInnerPage/InnerPageAdminApplication'

function App() {
   // const status = useSelector((store) => store.auth.status)
   // const [showSpinner, setShowSpinner] = useState()
   // useEffect(() => {
   //    if (status === 'pending') {
   //       setShowSpinner(true)
   //    } else {
   //       setShowSpinner(false)
   //    }
   // }, [status])
   return (
      <div className="App">
         {/* {showSpinner && <Spinner />}
         <AppRoutes /> */}
         <InnerPageAdminApplication />
      </div>
   )
}

export default App
