import ButtonComponent from "./Components/UI/ButtonComponent";
import './App.css'
function App() {
  return (
    <div className="App">
      <ButtonComponent variant="contained">
        Войти
      </ButtonComponent>
      <ButtonComponent variant="text">
        Добавить в корзину
      </ButtonComponent>
    </div>
  );
}

export default App;
