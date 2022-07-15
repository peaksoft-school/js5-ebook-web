import styled from 'styled-components'
import Button from '../Components/UI/Button/Button'

function CominButtons() {
   return (
      <CominButtonsContainer>
         <Button variant="default" marginright="20px">
            Войти
         </Button>
         <Button variant="default" background="#fff" color="#1C1C1C" border="1px solid #1C1C1C">
            Регистрация
         </Button>
      </CominButtonsContainer>
   )
}

export default CominButtons

const CominButtonsContainer = styled.div`
   /* border: 1px solid red; */
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
   align-items: center;
   /* height: 100px; */
`
