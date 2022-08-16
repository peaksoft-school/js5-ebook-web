import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import Button from './Button/Button'
import { deleteFromLocaleStorage } from '../../hooks/locale'
import { authSlicesActions } from '../../store/slices/authSlices'
import { EBOOK_AUTH_INFO } from '../../utils/constants/constants'

function ExitApp({ onCloseModal }) {
   const dispatch = useDispatch()
   const onClickExitHandler = () => {
      deleteFromLocaleStorage(EBOOK_AUTH_INFO)
      dispatch(authSlicesActions.exitApp())
      onCloseModal()
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
