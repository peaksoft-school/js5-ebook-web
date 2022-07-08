import Input from "./Components/input/Input";
import InputName from "./Components/input/InputName";
import Search from "./Components/SearchInput/Search";

function App(props) {
  return (
    <div className="App">
      <Search/>
      <InputName onChange={(e) => props.onChange(e.target.value)} value={props.value}/>
      <Input onChange={(e) => props.onChange(e.target.value)} value={props.value}/>
    </div>
  );
}

export default App;

// https://snipp.ru/html-css/show-hide-password 