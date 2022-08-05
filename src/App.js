import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import { SignActions } from './store/slices/SignSlices'

function App() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      const key = JSON.parse(localStorage.getItem('token'))
      if (key) {
         dispatch(SignActions.updateСountries(key))
         if (key.role === 'VENDOR') {
            navigate('/vendor', { replace: true })
         }
      }
   }, [])
   return (
      <div className="App">
         <AppRoutes />
      </div>
   )
}
export default App
