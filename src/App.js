import { Routes, Route, Navigate } from 'react-router-dom'
// import Adminlayout from './layouts/AdminLayout'
import AdminApplications from './containers/AdminApplications'

import { InnerPageAdminApplication } from './containers/InnerPageAdminApplication'

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Navigate to="/requests" />} />
            <Route path="/requests" element={<AdminApplications />} />
            <Route
               path="/requests/:id/"
               element={<InnerPageAdminApplication />}
            />
         </Routes>
      </div>
   )
}

export default App

// import { Button } from '@mui/material'
// import {
//    Routes,
//    Route,
//    Navigate,
//    useNavigate,
//    useParams,
// } from 'react-router-dom'
// import './App.css'
// import Breadcrumbs from './Components/UI/breadCrumbs/Breadcrumbs'

// function App() {
//    return (
//       <div className="App">
//          {/* <Switch>
//             <Route exact path="/book" component={Test} />
//             <Route exact path="/book/books" component={TestTttt} />
//          </Switch> */}
//          <Routes>
//             Q
//             <Route path="/" element={<Navigate to="/book" />} />{' '}
//             <Route exact path="/book/books/:bookId" element={<TestId />} />
//             <Route path="/book" element={<Test />} />
//             <Route path="/book/books" element={<TestTttt />} />
//          </Routes>
//       </div>
//    )
// }

// export default App

// function Test() {
//    const nav = useNavigate()

//    const pathTranslate = {
//       books: 'Книги',
//       book: 'Книги',
//       // [bookId]: 'ИМя',
//    }
//    console.log(pathTranslate)
//    return (
//       <div>
//          <Breadcrumbs translate={pathTranslate} />

//          <Button onClick={() => nav('/book/books')}>CLick me</Button>
//       </div>
//    )
// }
// function TestTttt() {
//    const nav = useNavigate()

//    const pathTranslate = {
//       books: 'Книги',
//       book: 'Книги',
//       // [bookId]: 'ИМя',
//    }

//    return (
//       <div>
//          <Breadcrumbs translate={pathTranslate} />

//          <Button onClick={() => nav('/book/books/:bookId')}>CLick me</Button>
//       </div>
//    )
// }
// function TestId() {
//    const { bookId } = useParams()
//    console.log(bookId)
//    const nav = useNavigate()

//    const pathTranslate = {
//       books: 'Книги',
//       book: 'Книги',
//       [bookId]: 'Имя',
//    }

//    return (
//       <div>
//          <Breadcrumbs translate={pathTranslate} />
//          <Button onClick={() => nav('/book/books')}>CLick me</Button>
//       </div>
//    )
// }
