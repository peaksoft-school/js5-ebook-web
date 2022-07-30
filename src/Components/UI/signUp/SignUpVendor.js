import styled from '@emotion/styled'
import Button from '../Button/Button'
import InputText from '../Inputs/InputText'
import PasswordInput from '../Inputs/PaswordInput'
import Validation from './Validation'
import InputMask from 'react-input-mask'
import { useState } from 'react'

function InputMaskPhone({ value, onChange }) {
   return (
      // eslint-disable-next-line no-octal-escape
      <InputMask mask="+\9\9\6 999 99 99 99">
         {(inputProps) => (
            <InputText
               {...inputProps}
               type="tel"
               placeholder="+996 557 60 22 24"
               value={value}
               onChange={onChange}
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

   return (
      <SignUpBlock>
         <Button
            variant="universal"
            color="#969696"
            backgroundhover="none"
            colorhover="#292929"
            coloractive="#292929"
            width="40%"
            fontSize="20px"
            fontWeight="400"
         >
            Войти
         </Button>
         <Button
            variant="universal"
            backgroundhover="none"
            colorhover="#292929"
            color="#292929"
            width="40%"
            fontSize="20px"
         >
            Регистрация
         </Button>
         <Form>
            <InputLabel htmlFor="name">
               <LabelSpan>
                  Ваше имя<Sup>*</Sup>
               </LabelSpan>
               <InputText
                  placeholder="Напишите ваше имя"
                  id="name"
                  value={name}
                  onChange={InputName}
                  error={isValidName}
                  onBlur={onBlurName}
               />
            </InputLabel>
            <InputLabel htmlFor="lastName">
               <LabelSpan>
                  Ваша фамилия<Sup>*</Sup>
               </LabelSpan>
               <InputText
                  id="lastName"
                  placeholder="Напишите вашу фамилию"
                  value={lastName}
                  onChange={InputLastName}
                  error={isValidLastName}
                  onBlur={onBlurLastName}
               />
            </InputLabel>
            <InputLabel htmlFor="phoneNumber">
               <LabelSpan>
                  Номер вашего телефона<Sup>*</Sup>
               </LabelSpan>
            </InputLabel>
            <InputLabel htmlFor="email">
               <LabelSpan>
                  E-mail<Sup>*</Sup>
               </LabelSpan>
               <InputText
                  id="email"
                  type="email"
                  placeholder="Напишите ваш email"
               />
            </InputLabel>
            <InputLabel htmlFor="password">
               <LabelSpan>
                  Пароль<Sup>*</Sup>
               </LabelSpan>
               <PasswordInput id="password" placeholder="Напишите ваш пароль" />
            </InputLabel>
            <InputLabel htmlFor="lastPassword">
               <LabelSpan>
                  Подтвердите пароль <Sup>*</Sup>
               </LabelSpan>
               <PasswordInput
                  id="lastPassword"
                  placeholder="Подтвердите пароль"
               />
            </InputLabel>
            <Button
               margintop="30px"  
               variant="universal"
               background="#000"
               backgroundhover="#000"
               padding="10px 20px"
            >
               Создать аккаунт
            </Button>
            <Button
               margintop="30px"  
               variant="universal"
               background="#000"
               backgroundhover="#000"
               padding="10px 20px"
            >
               Создать аккаунт
            </Button>
            <Button
               margintop="30px"  
               variant="universal"
               background="#000"
               backgroundhover="#000"
               padding="10px 20px"
            >
               Создать аккаунт
            </Button>
            <Button
               margintop="30px"  
               variant="universal"
               background="#000"
               backgroundhover="#000"
               padding="10px 20px"
            >
               Создать аккаунт
            </Button>
         </Form>
      </SignUpBlock>
   )
}

export default SignUpVendor

const Sup = styled('span')`
   color: red;
   font-size: 1rem;
`

const InputLabel = styled('label')`
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 14px;
   display: flex;
   flex-direction: column;
   cursor: pointer;
`
const LabelSpan = styled('span')`
   padding: 12px 0;
`

const Form = styled('form')`
   width: 100%;
   padding-top: 10px;
`

const SignUpBlock = styled('div')`
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
`
