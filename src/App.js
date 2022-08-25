import MainPage from './containers/clientMainPage/MainPage'
import ClientLayout from './layouts/ClientLayout'
// import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import AppRoutes from './routes/AppRoutes'
// import Spinner from './Components/UI/Spinner'

function App() {
   // const status = useSelector((store) => store.auth.status)
   // console.log(status)
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
         <ClientLayout>
            <MainPage />
         </ClientLayout>
         {/* {showSpinner && <Spinner />}
         <AppRoutes /> */}
      </div>
   )
}

export default App
