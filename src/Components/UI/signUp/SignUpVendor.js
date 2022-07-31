import InputText from '../Inputs/InputText'
import PasswordInput from '../Inputs/PaswordInput'
import Validation from './Validation'
import InputMask from 'react-input-mask'
import * as Sign from './SignStyles'
import Fetch from '../../../hooks/Fetch'

function InputMaskPhone(props) {
   return (
      <InputMask
         // eslint-disable-next-line no-octal-escape
         mask="+\9\9\6 999 99 99 99"
         value={props.value}
         onChange={props.onChange}
         onBlur={props.onBlur}
         error={props.error}
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
         onBlurLastPassword()
         onBlurPassword()
         onBlurPhone()
         onBlurEmail()
         onBlurLastName()
         onBlurName()
         return
      }
      const user = {
         firstName: name,
         lastName: lastName,
         email: email,
         phoneNumber: phone,
         password: password,
      }
      let result = null
      try {
         result = await Fetch(
            'https://jsonplaceholder.typicode.com/posts',
            'POST',
            user
         )
         console.log(result)
      } catch (error) {
         console.log('Eto oshibka' + error)
      }
   }

   // otvet: {
   //    id: 4
   //    jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY1OTI3Nzc4NiwiaWF0IjoxNjU5Mjc0MTg2LCJ1c2VybmFtZSI6InpoeXJnYWxiZWsua2FtYWxvdkBnbWFpbC5jb20ifQ.L7dKGUaP2NqkvIEEpfUO1KnRadxofowSa93bhPVwLk0'
   //    role: 'VENDOR'
   // }

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
