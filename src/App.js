import Input from './Components/UI/Inputs/Input'
import Search from './Components/UI/SeracInput/SerachInput'
import Inputs from './Components/UI/Inputs/Inputs'

function App() {
   return (
      <div className="App">
         <Search placeholder="Искать жанр, книги, авторов, издательства..." />
         <Inputs placeholder="Напишите ваше имя" />
         <Input placeholder="Напишите ваше имя" />
      </div>
   )
}

export default App
