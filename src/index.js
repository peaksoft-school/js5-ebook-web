import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './store/index'
import { injectStore } from './hooks/AppFetch'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <BrowserRouter>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </BrowserRouter>
   </Provider>
)
