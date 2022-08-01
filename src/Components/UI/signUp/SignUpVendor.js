import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useEffect } from 'react'
import InputMask from 'react-input-mask'
import InputText from '../Inputs/InputText'
import PasswordInput from '../Inputs/PaswordInput'
import Validation from './Validation'
import * as Sign from './SignStyles'
import { func } from '../../../store/slices/uiSlices'

function InputMaskPhone({ value, onChange, onBlur, error }) {
   return (
      <InputMask
         // eslint-disable-next-line no-octal-escape, no-nonoctal-decimal-escape
         mask="+\9\9\6 999 99 99 99"
         value={value}
         onChange={onChange}
         onBlur={onBlur}
         error={error}
      >
         {(inputProps) => (
            <InputText
               {...inputProps}
               type="tel"
               placeholder="+996 557 60 22 24"
            />
         )}
      </InputMask>
   )
}

function SignUpVendor() {
   const dispatch = useDispatch()
   const vendor = useSelector((store) => store.vendor.vendor)
   useEffect(() => {
      if (vendor) {
         localStorage.setItem('token', vendor.jwt)
      }
   }, [vendor])
   const {
      value: name,
      InputChange: InputName,
      isValidValue: isValidName,
      onBlurHandler: onBlurName,
   } = Validation((valueName) => {
      if (valueName.length <= 5) {
         return true
      }
      return false
   })

   const {
      value: lastName,
      InputChange: InputLastName,
      isValidValue: isValidLastName,
      onBlurHandler: onBlurLastName,
   } = Validation((valueName) => {
      if (valueName.length <= 5) {
         return true
      }
      return false
   })

   const {
      value: email,
      InputChange: emailChange,
      isValidValue: isValidEmail,
      onBlurHandler: onBlurEmail,
   } = Validation((email) => {
      if (email.length <= 5 || !email.includes('@')) {
         return true
      }
      return false
   })

   const {
      value: phone,
      InputChange: phoneChangeHandler,
      isValidValue: isValidPhone,
      onBlurHandler: onBlurPhone,
   } = Validation((phone) => {
      if (phone.length <= 5 || phone.includes('_')) {
         return true
      }
      return false
   })

   const {
      value: password,
      InputChange: passwordChangeHandler,
      isValidValue: isValidPassword,
      onBlurHandler: onBlurPassword,
   } = Validation((passwordValue) => {
      if (passwordValue.length <= 5) {
         return true
      }
      return false
   })

   const {
      value: lastPassword,
      InputChange: lastPasswordChangeHandler,
      isValidValue: isValidLastPassword,
      onBlurHandler: onBlurLastPassword,
   } = Validation((passwordValue) => {
      if (passwordValue.length <= 5) {
         return true
      }
      return false
   })

   const onSubmitUser = async (e) => {
      e.preventDefault()
      if (
         name === '' ||
         lastName === '' ||
         phone === '' ||
         email === '' ||
         password === '' ||
         lastPassword === '' ||
         isValidLastPassword ||
         isValidPassword ||
         isValidPhone ||
         isValidEmail ||
         isValidLastName ||
         isValidName
      ) {
         console.log(isValidPhone)
         onBlurLastPassword()
         onBlurPassword()
         onBlurPhone()
         onBlurEmail()
         onBlurLastName()
         onBlurName()
         return
      }
      // console.log('Hello world')
      const user = {
         firstName: name,
         lastName,
         email,
         phoneNumber: phone,
         password,
      }
      dispatch(func(user))
   }

   return (
      <Sign.SignBlock>
         <Sign.ButtonIn>Войти</Sign.ButtonIn>
         <Sign.ButtonUp>Регистрация</Sign.ButtonUp>
         <Sign.Form onSubmit={onSubmitUser}>
            <Sign.InputLabel htmlFor="name">
               <Sign.LabelSpan>
                  Ваше имя<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <InputText
                  placeholder="Напишите ваше имя"
                  id="name"
                  value={name}
                  onChange={InputName}
                  error={isValidName}
                  onBlur={onBlurName}
               />
            </Sign.InputLabel>
            <Sign.InputLabel htmlFor="lastName">
               <Sign.LabelSpan>
                  Ваша фамилия<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <InputText
                  id="lastName"
                  placeholder="Напишите вашу фамилию"
                  value={lastName}
                  onChange={InputLastName}
                  error={isValidLastName}
                  onBlur={onBlurLastName}
               />
            </Sign.InputLabel>
            <Sign.InputLabel htmlFor="phoneNumber">
               <Sign.LabelSpan>
                  Номер вашего телефона<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <InputMaskPhone
                  value={phone}
                  onChange={phoneChangeHandler}
                  onBlur={onBlurPhone}
                  error={isValidPhone}
               />
            </Sign.InputLabel>
            <Sign.InputLabel htmlFor="email">
               <Sign.LabelSpan>
                  E-mail<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <InputText
                  id="email"
                  type="email"
                  placeholder="Напишите ваш email"
                  value={email}
                  onChange={emailChange}
                  error={isValidEmail}
                  onBlur={onBlurEmail}
               />
            </Sign.InputLabel>
            <Sign.InputLabel htmlFor="password">
               <Sign.LabelSpan>
                  Пароль<Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <PasswordInput
                  id="password"
                  placeholder="Напишите ваш пароль"
                  value={password}
                  onChange={passwordChangeHandler}
                  error={isValidPassword}
                  onBlur={onBlurPassword}
               />
            </Sign.InputLabel>
            <Sign.InputLabel htmlFor="lastPassword">
               <Sign.LabelSpan>
                  Подтвердите пароль <Sign.Sup>*</Sign.Sup>
               </Sign.LabelSpan>
               <PasswordInput
                  id="lastPassword"
                  placeholder="Подтвердите пароль"
                  value={lastPassword}
                  onChange={lastPasswordChangeHandler}
                  error={isValidLastPassword}
                  onBlur={onBlurLastPassword}
               />
            </Sign.InputLabel>
            <Sign.ButtonSubmit type="submit">Создать аккаунт</Sign.ButtonSubmit>
         </Sign.Form>
      </Sign.SignBlock>
   )
}

export default SignUpVendor
