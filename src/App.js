// import AppRoutes from './routes/AppRoutes'

import MainPage from './containers/clientMainPage/MainPage'
import ClientLayout from './layouts/ClientLayout'

function App() {
   return (
      <div className="App">
         {/* <AppRoutes /> */}
         <ClientLayout>
            <MainPage />
         </ClientLayout>
      </div>
   )
}

export default App
