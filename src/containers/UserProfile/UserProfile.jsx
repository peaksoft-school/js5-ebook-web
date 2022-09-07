import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Components/UI/Button/Button'
import InputText from '../../Components/UI/Inputs/InputText'
import Validation from '../../hooks/Validation'
import PaswordInput from '../../Components/UI/Inputs/PaswordInput'
import {
   getUserprofile,
   putUserPfrofile,
} from '../../store/slices/userProfileSlice'
// import { signUpClient } from '../../store/slices/authSlices'

export const UserProfile = ({ activeBtn }) => {
   const dispatch = useDispatch()
   const id = useSelector((i) => i.auth.user.id)
   const { dataUser } = useSelector((i) => i.userProfile)
   const [name, setName] = useState()
   // const [password, setPassword] = useState()
   // const [newPassword, setNewPassword] = useState()
   const [email, setEmail] = useState()
   const [isShowUp, setIsShowUp] = useState(activeBtn)
   // const [errorValue, setErrorValue] = useState('')
   // const [isValidError, setIsValidError] = useState(false)
   const UserNameHandler = () => {
      setName()
   }
   const UserEmailHandler = (e) => {
      setEmail(e.target.value)
   }
   console.log(email)
   // const UserPasswordHandler = () => {
   //    setPassword()
   // }
   // const UserNewPasswordHandler = () => {
   //    setNewPassword()
   // }
   useEffect(() => {
      dispatch(getUserprofile(id))
      setName(dataUser.name)
   }, [])
   useEffect(() => {
      setName(dataUser.name)
   }, [dataUser.name])

   useEffect(() => {
      dispatch(getUserprofile(id))
      setEmail(dataUser.email)
   }, [])

   useEffect(() => {
      setEmail(dataUser.email)
   }, [dataUser.email])

   const signUpClickHandler = () => {
      setIsShowUp(false)
      const newUser = {
         name,
         email,
         password,
         newPassword,
      }
      dispatch(putUserPfrofile(newUser))
   }
   const { value: password, inputChange: onChangePassword } = Validation(
      (value) => {
         if (value.length <= 5) {
            return true
         }
         return false
      }
   )

   const {
      inputChange: onChangeNewPassword,
      value: newPassword,
      setValue: setPassword,
   } = Validation((value) => {
      if (value.length <= 5) {
         return true
      }
      return false
   })
   useEffect(() => {
      setPassword('Hello world')
   }, [])
   console.log(newPassword)
   const { isValidValue: isNameValue, onBlurHandler: onBlurNameHandler } =
      Validation((value) => {
         if (value.length <= 5) {
            return true
         }
         return false
      })
   const { isValidValue: isEmailValue, onBlurHandler: onBlurEmailHandler } =
      Validation((value) => {
         if (value.length <= 5 || !value.includes('@')) {
            return true
         }
         return false
      })
   const onClientSubmit = (e) => {
      e.preventDefault()
      // if (newPassword !== password) {
      //    setErrorValue('Пароли не совпадают')
      //    setIsValidError(true)
      //    return
      // }
      // setErrorValue('')
      // setIsValidError(false)
      // if (
      //    name === '' ||
      //    email === '' ||
      //    password === '' ||
      // ) {
      //    onBlurNameHandler()
      //    onBlurEmailHandler()
      //    onBlurPasswordHandler()
      //    onBlurLastPasswordHandler()
      //    return
      // }
      // const user = {
      //    firstName: name,
      //    email,
      //    password,
      // }
      // dispatch(signUpClient(user))
   }
   return (
      <DivCont onSubmit={onClientSubmit}>
         <StyledText>
            <h3>Личная информация</h3>
            <h3>Изменить пароль</h3>
         </StyledText>
         <StyledContainer>
            <div>
               <StyledInput>
                  <LabelStyled>Мое имя</LabelStyled>
                  <InputText
                     value={name}
                     placeholder="Напишите ваше имя"
                     onChange={UserNameHandler}
                     error={isNameValue}
                     onBlur={onBlurNameHandler}
                  />
               </StyledInput>
               <StyledInput>
                  <LabelStyled>Email</LabelStyled>
                  <InputText
                     value={email}
                     placeholder="Напишите ваш Email"
                     onChange={UserEmailHandler}
                     error={isEmailValue}
                     onBlur={onBlurEmailHandler}
                  />
               </StyledInput>
            </div>
            <StyledPasswordInput>
               <StyledPasInput>
                  <LabelStyled htmlFor="name">Текущий пароль</LabelStyled>
                  <PaswordInput
                     placeholder="Напишите текущий пароль"
                     value={password}
                     onChange={onChangePassword}
                  />
               </StyledPasInput>
               <StyledPasInput>
                  <LabelStyled htmlFor="name">Новый пароль</LabelStyled>
                  <PaswordInput
                     placeholder="Напишите ваш новый пароль"
                     value={newPassword}
                     onChange={onChangeNewPassword}
                  />
               </StyledPasInput>
               <StyledPasInput>
                  <LabelStyled htmlFor="name">Подтвердите пароль</LabelStyled>
                  <PaswordInput placeholder="Подтвердите пароль" />
               </StyledPasInput>
            </StyledPasswordInput>
            {/* <span>{isValidError && errorValue}</span> */}
         </StyledContainer>
         <DivStyledButton>
            <StyledButton>Удалить профиль?</StyledButton>
            <StyledButton onClick={signUpClickHandler} activeBtn={isShowUp}>
               Сохранить
            </StyledButton>
         </DivStyledButton>
      </DivCont>
   )
}

const StyledInput = styled('div')`
   width: 514px;
   padding-top: 30px;
`
const StyledContainer = styled.div`
   /* margin-top: 40px; */
   display: flex;
   justify-content: space-between;
   width: 100%;
   /* border: 1px solid black; */
`
const StyledButton = styled(Button)`
   width: 100%;
   font-size: 16px;
   height: 21px;
   color: #f10000;
   background-color: transparent;
   &:hover {
      background-color: transparent;
   }
`
const DivCont = styled.div`
   width: 100%;
`
const DivStyledButton = styled.div`
   width: 20%;
   padding: 0;
   border: 1px solid red;
   margin-top: 80px;
`
const StyledPasswordInput = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 15px;
`

const StyledPasInput = styled.div`
   width: 514px;
   padding: 9px 18px;
`
const StyledText = styled.div`
   width: 72%;
   display: flex;
   justify-content: space-between;
   & > h3 {
      font-weight: 600;
      font-size: 18px;
   }
`
const LabelStyled = styled.label`
   color: #969696;
   font-size: 16px;
   font-weight: 600;
`
