import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import * as Sign from './SignStyles'
import InputText from '../UI/Inputs/InputText'
import PasswordInput from '../UI/Inputs/PaswordInput'
import CheckBox from '../UI/checkBox/CheckBox'
import Button from '../UI/Button/Button'
import Validation from '../../hooks/Validation'
import { signUpClient } from '../../store/slices/authSlices'

function SignUpClient({ toggleSignUpVendor }) {
   const [errorValue, setErrorValue] = useState('')
   const [isValidError, setIsValidError] = useState(false)
   const status = useSelector((store) => store.auth.status)
   useEffect(() => {
      if (status === 'rejected') {
         setErrorValue('Такой email уже загеристрирован!')
         setIsValidError(true)
      } else {
         setErrorValue('')
         setIsValidError(false)
      }
   }, [status])
   const dispatch = useDispatch()
   const onClickVendor = () => {
      toggleSignUpVendor(true)
   }
   const {
      value: name,
      inputChange: nameChangeHandler,
      isValidValue: isNameValue,
      onBlurHandler: onBlurNameHandler,
   } = Validation((value) => {
      if (value.length <= 5) {
         return true
      }
      return false
   })
   const {
      value: email,
      inputChange: emailChangeHandler,
      isValidValue: isEmailValue,
      onBlurHandler: onBlurEmailHandler,
   } = Validation((value) => {
      if (value.length <= 5 || !value.includes('@')) {
         return true
      }
      return false
   })
   const {
      value: password,
      inputChange: passwordChangeHandler,
      isValidValue: isPasswordValue,
      onBlurHandler: onBlurPasswordHandler,
   } = Validation((value) => {
      if (value.length <= 5) {
         return true
      }
      return false
   })
   const {
      value: lastPassword,
      inputChange: lastPasswordChangeHandler,
      isValidValue: isLastPasswordValue,
      onBlurHandler: onBlurLastPasswordHandler,
   } = Validation((value) => {
      if (value.length <= 5) {
         return true
      }
      return false
   })
   const onClientSubmit = (e) => {
      e.preventDefault()
      if (lastPassword !== password) {
         setErrorValue('Пароли не совпадают')
         setIsValidError(true)
         return
      }
      setErrorValue('')
      setIsValidError(false)
      if (
         name === '' ||
         email === '' ||
         password === '' ||
         lastPassword === '' ||
         isNameValue ||
         isEmailValue ||
         isPasswordValue ||
         isLastPasswordValue
      ) {
         onBlurNameHandler()
         onBlurEmailHandler()
         onBlurPasswordHandler()
         onBlurLastPasswordHandler()
         return
      }
      const user = {
         firstName: name,
         email,
         password,
      }
      dispatch(signUpClient(user))
   }
   return (
      <>
         <Sign.Form onSubmit={onClientSubmit}>
            <Sign.InputLabel htmlFor="name">
               <Sign.LabelSpan>
                  Ваше имя<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <InputText
                  id="name"
                  placeholder="Напишите ваше имя"
                  value={name}
                  onChange={nameChangeHandler}
                  error={isNameValue}
                  onBlur={onBlurNameHandler}
               />
            </Sign.InputLabel>
            <Sign.InputLabel id="email">
               <Sign.LabelSpan>
                  Email<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <InputText
                  id="email"
                  type="email"
                  placeholder="Напишите ваш email"
                  value={email}
                  onChange={emailChangeHandler}
                  error={isEmailValue}
                  onBlur={onBlurEmailHandler}
               />
            </Sign.InputLabel>
            <Sign.InputLabel htmlFor="password">
               <Sign.LabelSpan>
                  Пароль<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <PasswordInput
                  id="password"
                  placeholder="Напишите пароль"
                  value={password}
                  onChange={passwordChangeHandler}
                  error={isPasswordValue}
                  onBlur={onBlurPasswordHandler}
               />
            </Sign.InputLabel>
            <Sign.InputLabel id="lastPassword">
               <Sign.LabelSpan>
                  Подтвердите пароль<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <PasswordInput
                  id="lastPassword"
                  placeholder="Подтвердите пароль"
                  value={lastPassword}
                  onChange={lastPasswordChangeHandler}
                  error={isLastPasswordValue}
                  onBlur={onBlurLastPasswordHandler}
               />
            </Sign.InputLabel>
            <Sign.SpanError>{isValidError && errorValue}</Sign.SpanError>
            <CheckBoxBlock>
               <CheckBox /> Подпишитесь на рассылку, чтобы получать новости от
               Ebook
            </CheckBoxBlock>
            <Sign.ButtonSubmit type="submit" margintop="15px">
               Создать Аккаунт
            </Sign.ButtonSubmit>
         </Sign.Form>
         <Button
            margintop="20px"
            variant="default"
            background="#fff"
            color="#1C1C1C"
            border="1px solid #1C1C1C"
            backgroundhover="#fff"
            colorhover="#1C1C1C"
            onClick={onClickVendor}
         >
            Стать продавцом на Ebook
         </Button>
      </>
   )
}

export default SignUpClient

const CheckBoxBlock = styled('label')`
   /* border: 1px solid red; */
   margin-top: 15px;
   display: flex;
   align-items: center;
   font-family: 'Open Sans';
   font-size: 12px;
   color: #777777;
   line-height: 16px;
   cursor: pointer;
`
