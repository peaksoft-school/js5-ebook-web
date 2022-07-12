import Input from './Components/UI/Inputs/Input'
import Search from './Components/UI/SeracInput/SerachInput'
import Inputs from './Components/UI/Inputs/Inputs'
import RadioButton from './Components/UI/RadioButton'

function App() {
   return (
      <div className="App">
         <Search placeholder="Искать жанр, книги, авторов, издательства..." />
         <Inputs placeholder="Напишите ваше имя" />
         <Input placeholder="Напишите ваше имя" />
         <RadioButton />
      </div>
   )
}

export default App
