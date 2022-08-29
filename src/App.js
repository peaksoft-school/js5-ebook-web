import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from './Components/UI/Spinner'
import AppRoutes from './routes/appRoutes'

function App() {
   const status = useSelector((store) => store.auth.status)
   const [showSpinner, setShowSpinner] = useState()
   useEffect(() => {
      if (status === 'pending') {
         setShowSpinner(true)
      } else {
         setShowSpinner(false)
      }
   }, [status])
   return (
      <div className="App">
         {showSpinner && <Spinner />}
         <AppRoutes />
      </div>
   )
}

export default App
