import SearchBar from './Components/UI/SearcInput/SearchInput'
import Test from './test'
import BookData from './Data.json'

function App() {
   return (
      <div className="App">
         <SearchBar data={BookData} />
         <Test />
      </div>
   )
}

export default App
