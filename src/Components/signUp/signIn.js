import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as Sign from './SignStyles'
import InputText from '../UI/Inputs/InputText'
import PasswordInput from '../UI/Inputs/PaswordInput'
import Validation from '../../hooks/Validation'
import { signIn } from '../../store/slices/authSlices'

function SignIn() {
   const [errorValue, setErrorValue] = useState('')
   const [isValidError, setIsValidError] = useState(false)
   const dispatch = useDispatch()
   const status = useSelector((store) => store.auth.status)
   useEffect(() => {
      if (status === 'rejected') {
         setIsValidError(true)
         setErrorValue('Неправильно указан Email и/или пароль')
      } else {
         setIsValidError(false)
      }
   }, [status])
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
      if (value.length <= 3) {
         return true
      }
      return false
   })
   const signInOnSubmit = (e) => {
      e.preventDefault()
      if (email === '' || password === '' || isEmailValue || isPasswordValue) {
         onBlurEmailHandler()
         onBlurPasswordHandler()
         return
      }
      const user = {
         email,
         password,
      }
      dispatch(signIn(user))
   }
   return (
      <Sign.Form onSubmit={signInOnSubmit}>
         <Sign.InputLabel htmlFor="email">
            <Sign.LabelSpan>
               Email <Sign.Sup>*</Sign.Sup>
            </Sign.LabelSpan>
            <InputText
               id="email"
               type="email"
               placeholder="Напишите email"
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
         <Sign.SpanError>{isValidError && errorValue}</Sign.SpanError>
         <Sign.ButtonSubmit type="submit">Войти</Sign.ButtonSubmit>
      </Sign.Form>
   )
}

export default SignIn
