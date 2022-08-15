import styled from 'styled-components'
import './App.css'
import { BooksCard } from './containers/BookCard'
import { books } from './containers/books'

function App() {
   return (
      <div className="App">
         <Div>
            {books.map((elem) => {
               return <BooksCard book={elem} />
            })}
         </Div>
      </div>
   )
}

export default App

const Div = styled('div')`
   border: 1px solid red;
   max-width: calc(1240px - 282px);
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
`
