import { useDispatch, useSelector } from 'react-redux/es/exports'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import InputText from '../Inputs/InputText'
import PasswordInput from '../Inputs/PaswordInput'
import Validation from './Validation'
import * as Sign from './SignStyles'
import { signUpVendor } from '../../../store/slices/authSlices'
import { EBOOK_AUTH_INFO } from '../../../utils/constants/constants'

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
   const [errorValue, setErrorValue] = useState('')
   const [isValidError, setIsValidError] = useState(false)
   const AUTH_INFO = useSelector((store) => store.vendor[EBOOK_AUTH_INFO])
   const dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      if (AUTH_INFO.role === 'VENDOR') {
         navigate('/vendor', { replace: true })
      }
   }, [AUTH_INFO])

   const {
      value: name,
      InputChange: onChangeInputName,
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
      InputChange: onChangeLastName,
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
      InputChange: onChangeEmail,
      isValidValue: isValidemail,
      onBlurHandler: onBluremail,
   } = Validation((email) => {
      if (email.length <= 5 || !email.includes('@')) {
         return true
      }
      return false
   })

   const {
      value: phone,
      InputChange: onChangeInputPhone,
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
      InputChange: onChangePassword,
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
      InputChange: onChangeLastPassword,
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
      if (lastPassword !== password) {
         setErrorValue('Пароли не совпадают')
         setIsValidError(true)
         return
      }
      setErrorValue('')
      setIsValidError(false)

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
         isValidemail ||
         isValidLastName ||
         isValidName
      ) {
         onBlurLastPassword()
         onBlurPassword()
         onBlurPhone()
         onBluremail()
         onBlurLastName()
         onBlurName()
         return
      }
      const user = {
         firstName: name,
         lastName,
         email,
         phoneNumber: phone,
         password,
      }
      dispatch(signUpVendor(user))
   }

   return (
      <Sign.Form onSubmit={onSubmitUser}>
         <Sign.InputLabel htmlFor="name">
            <Sign.LabelSpan>
               Ваше имя<Sign.Sup>*</Sign.Sup>
            </Sign.LabelSpan>
            <InputText
               placeholder="Напишите ваше имя"
               id="name"
               value={name}
               onChange={onChangeInputName}
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
               onChange={onChangeLastName}
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
               onChange={onChangeInputPhone}
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
               onChange={onChangeEmail}
               error={isValidemail}
               onBlur={onBluremail}
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
               onChange={onChangePassword}
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
               onChange={onChangeLastPassword}
               error={isValidLastPassword}
               onBlur={onBlurLastPassword}
            />
         </Sign.InputLabel>
         <Sign.SpanError>{isValidError && errorValue}</Sign.SpanError>
         <Sign.ButtonSubmit type="submit" margintop="15px">
            Создать аккаунт
         </Sign.ButtonSubmit>
      </Sign.Form>
   )
}

export default SignUpVendor
