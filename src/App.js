import check_icon from "./assets/.gitignore.svg";
import BasicModal from "./Components/UI/modal/Modal";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

function App() {

  return (
    <div className="App">
     

      <BasicModal>
        <p>Вы уверены, что хотите выйти?</p>
        <div>
          <StyledButton variant="text" primary={true}>
            Отменить
          </StyledButton>
          <StyledButton variant="contained" primary={false}>
            Выйти
          </StyledButton>
        </div>
      </BasicModal>

      <BasicModal>
        <img src={check_icon} />
        <span>Промокод “KSKSD” успешно активирован!</span>
        <span>Размер скидки 15%</span>
      </BasicModal>

      <BasicModal>
        <p>Введены неверные символы в коде купона</p>
        <StyledButton variant="text" primary={true}>
          Ок
        </StyledButton>
      </BasicModal>

      <BasicModal>
        <img src={check_icon} />
        <p>Ваш заказ успешно оформлен!</p>
        <StyledButton variant="text" primary={true}>
          Продолжить покупки
        </StyledButton>
      </BasicModal>

      <BasicModal>
        <img src={check_icon} />
        <p>Промокод успешно создан!</p>
      </BasicModal>

      <BasicModal>
        <span>Вы уверены, что хотите удалить?</span>
        <h4>"Гарри Потер и Тайная комната?"</h4>
        <div>
          <StyledButton variant="text" primary={false}>
            Отменить
          </StyledButton>
          <StyledButton variant="contained" primary={true}>
            Выйти
          </StyledButton>
        </div>
      </BasicModal>

      <BasicModal>
        <img src={check_icon} />
        <p>Ваш запрос был успешно отправлен!</p>
      </BasicModal>

      <BasicModal>
        <img src={check_icon} />
        <h4>"Гарри Потер и Тайная комната?"</h4>
        <span>был успешно принят!</span>
      </BasicModal>

      <BasicModal>
        <span>Вы уверены, что хотите удалить?</span>
        <h4>Мыктыбук Мыктыбеков?</h4>
        <div>
          <StyledButton variant="text" primary={false}>
            Отменить
          </StyledButton>
          <StyledButton variant="contained" primary={true}>
            Выйти
          </StyledButton>
        </div>
      </BasicModal>

      <BasicModal>
        <span>Вы уверены, что хотите удалить профиль?</span>
        <div>
          <StyledButton variant="text" primary={false}>
            Отменить
          </StyledButton>
          <StyledButton variant="contained" primary={true}>
            Выйти
          </StyledButton>
        </div>
      </BasicModal>
    </div>
  );
}

export default App;

const StyledButton = styled(Button)`
  border-radius: 0px;
  background-color: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "gray")};

  :hover{
    background-color: ${(props) => (props.primary ? "black" : "white")};
  }
`;
