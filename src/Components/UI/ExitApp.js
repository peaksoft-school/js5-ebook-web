import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router'
import Button from './Button/Button'
import { exitApp } from '../../store/slices/authSlices'

function ExitApp({ onCloseModal }) {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const onClickExitHandler = () => {
      dispatch(exitApp())
      onCloseModal()
      navigate('/')
   }
   return (
      <ExitContainer>
         <ExitText>Вы уверены что хотите выйти?</ExitText>
         <ExitButton onClick={onCloseModal}>Отменить</ExitButton>
         <ExitButton onClick={onClickExitHandler}>Выйти</ExitButton>
      </ExitContainer>
   )
}

export default ExitApp

const ExitButton = styled(Button)`
   width: 50%;
   color: #a3a3a3;
   background-color: rgba(0, 0, 0, 0);
   &:hover {
      background-color: rgba(0, 0, 0);
      color: #fff;
   }
`

const ExitText = styled('h2')`
   font-family: 'Open Sans';
   font-size: 18px;
   font-weight: 400;
   width: 100%;
   text-align: center;
   margin: 0;
   margin-bottom: 40px;
`
const ExitContainer = styled('div')`
   display: flex;
   max-width: 350px;
   margin: 0 50px;
   flex-wrap: wrap;
`
