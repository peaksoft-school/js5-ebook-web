import { useDispatch } from 'react-redux'
import * as Sign from './SignStyles'
import InputText from '../UI/Inputs/InputText'
import PasswordInput from '../UI/Inputs/PaswordInput'
import Validation from '../../hooks/Validation'
import { signInAll } from '../../store/slices/authSlices'

function SignInAll() {
   const dispatch = useDispatch()
   const {
      value: email,
      inputChange: emailChangeHandler,
      isValidValue: isEmailValue,
      onBlurHandler: onBlurEmailHandler,
   } = Validation((value) => {
      if (value.length <= 5) {
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
      dispatch(signInAll(user))
   }
   return (
      <Sign.Form onSubmit={signInOnSubmit}>
         <Sign.InputLabel htmlFor="email">
            <Sign.LabelSpan>
               Email <Sign.Sup>*</Sign.Sup>
            </Sign.LabelSpan>
            <InputText
               id="email"
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
         <Sign.ButtonSubmit type="submit">Войти</Sign.ButtonSubmit>
      </Sign.Form>
   )
}

export default SignInAll
