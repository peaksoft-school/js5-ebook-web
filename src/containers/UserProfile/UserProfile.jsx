import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Button from '../../Components/UI/Button/Button'
import InputText from '../../Components/UI/Inputs/InputText'
import Validation from '../../hooks/Validation'
import PaswordInput from '../../Components/UI/Inputs/PaswordInput'
import {
   deleteUserProfile,
   getUserprofile,
   PutUserPfrofile,
   userProfileAction,
} from '../../store/slices/userProfileSlice'
import Modal from '../../Components/UI/Modal'
import GetSnackbar from '../../Components/UI/snackbar/GetSnackbar'

export const UserProfile = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { id: userId } = useSelector((store) => store.auth.user)
   const { dataUser, message, status } = useSelector(
      (store) => store.userProfile
   )
   const [errorValue, setErrorValue] = useState('')
   const [isModal, setIsModal] = useState(false)
   const showModal = () => {
      setIsModal(true)
   }
   const onCloseModal = () => {
      setIsModal(false)
   }

   const UsersCardNavHandler = () => {
      navigate('/')
   }
   const deleteHandler = () => {
      dispatch(deleteUserProfile(userId))
      navigate('/')
   }

   const {
      value: name,
      setValue: setName,
      inputChange: UserNameHandler,
      isValidValue: isNameValue,
      onBlurHandler: onBlurNameHandler,
   } = Validation((value) => {
      if (value.length <= 2) {
         return true
      }
      return false
   })

   const {
      value: email,
      inputChange: UserEmailHandler,
      setValue: setEmail,
      isValidValue: isEmailValue,
      onBlurHandler: onBlurEmailHandler,
   } = Validation((value) => {
      if (value.length < 5 || !value.includes('@')) {
         return true
      }
      return false
   })
   const {
      value: password,
      inputChange: onChangePassword,
      isValidValue: isPasswordValue,
      onBlurHandler: onBlurPasswordHandler,
   } = Validation((value) => {
      if (value.length <= 5) {
         return true
      }
      return false
   })

   const {
      value: newPassword,
      inputChange: onChangeNewPassword,
      isValidValue: isLastPasswordValue,
      onBlurHandler: onBlurLastPasswordHandler,
   } = Validation((value) => {
      if (value.length <= 5) {
         return true
      }
      return false
   })
   const {
      value: newPassword2,
      inputChange: onChangeNewPassword2,
      isValidValue: isLastPasswordValue2,
      onBlurHandler: onBlurLastPasswordHandler2,
   } = Validation((value) => {
      if (value.length <= 5) {
         return true
      }
      return false
   })
   useEffect(() => {
      let timerId = null
      if (message) {
         timerId = setTimeout(() => {
            dispatch(userProfileAction.clearMessage())
         }, 3000)
      }
      return () => {
         clearTimeout(timerId)
      }
   }, [message])

   useEffect(() => {
      dispatch(getUserprofile(userId))
   }, [])
   useEffect(() => {
      if (dataUser) {
         setName(dataUser.name)
         setEmail(dataUser.email)
      }
   }, [dataUser])

   const onClientSubmit = (e) => {
      e.preventDefault()
      if (newPassword !== newPassword2) {
         setErrorValue('Пароли не совпадают!')
         return
      }
      if (email === '' || name === '' || password === '') {
         onBlurNameHandler()
         onBlurEmailHandler()
         onBlurPasswordHandler()
         setErrorValue('')
         return
      }
      setErrorValue('')
      const newUser = {
         name,
         email,
         password,
         newPassword,
         newPassword2,
      }
      dispatch(PutUserPfrofile(newUser))
   }

   return (
      <>
         <GetSnackbar open={message} variant={status} message={message} />
         <Modal
            open={isModal}
            justifyContent="flex-start"
            onClose={onCloseModal}
         >
            <ModalBlock>
               <ModalHeader>Вы хотите удалить ?</ModalHeader>
               <StyledButton
                  variant="default"
                  width="50%"
                  onClick={onCloseModal}
               >
                  отменить
               </StyledButton>
               <StyledButton
                  variant="default"
                  width="50%"
                  onClick={deleteHandler}
               >
                  да
               </StyledButton>
            </ModalBlock>
         </Modal>
         <DivCont onSubmit={onClientSubmit}>
            <StyledText>
               <h3>Личная информация</h3>
               <h3>Изменить пароль</h3>
            </StyledText>
            <StyledContainer>
               <div>
                  <StyledInput>
                     <LabelStyled htmlFor="name">Мое имя</LabelStyled>
                     <InputText
                        id="name"
                        value={name}
                        placeholder="Напишите ваше имя"
                        onChange={UserNameHandler}
                        error={isNameValue}
                        onBlur={onBlurNameHandler}
                     />
                  </StyledInput>
                  <StyledInput>
                     <LabelStyled htmlFor="email">Email</LabelStyled>
                     <InputText
                        id="email"
                        type="email"
                        value={email}
                        placeholder="Напишите ваш Email"
                        onChange={UserEmailHandler}
                        error={isEmailValue}
                        onBlur={onBlurEmailHandler}
                     />
                  </StyledInput>
                  <DivStyledButton>
                     <StyledButton1 onClick={showModal}>
                        Удалить профиль?
                     </StyledButton1>
                  </DivStyledButton>
               </div>
               <StyledPasswordInput>
                  <StyledPasInput>
                     <LabelStyled htmlFor="password">
                        Текущий пароль
                     </LabelStyled>
                     <PaswordInput
                        id="password"
                        placeholder="Напишите текущий пароль"
                        value={password}
                        onChange={onChangePassword}
                        error={isPasswordValue}
                        onBlur={onBlurPasswordHandler}
                     />
                  </StyledPasInput>
                  <StyledPasInput>
                     <LabelStyled htmlFor="newPassword">
                        Новый пароль
                     </LabelStyled>
                     <PaswordInput
                        id="newPassword"
                        placeholder="Напишите ваш новый пароль"
                        value={newPassword}
                        onChange={onChangeNewPassword}
                        error={isLastPasswordValue}
                        onBlur={onBlurLastPasswordHandler}
                     />
                  </StyledPasInput>
                  <StyledPasInput>
                     <LabelStyled htmlFor="newPassword2">
                        Подтвердите пароль
                     </LabelStyled>
                     <PaswordInput
                        id="newPassword2"
                        value={newPassword2}
                        onChange={onChangeNewPassword2}
                        placeholder="Подтвердите пароль"
                        error={isLastPasswordValue2}
                        onBlur={onBlurLastPasswordHandler2}
                     />
                     {errorValue && <SpanStyled>{errorValue}</SpanStyled>}
                  </StyledPasInput>
                  <DivStyledButton1>
                     <StyledButton onClick={UsersCardNavHandler}>
                        Отменить
                     </StyledButton>
                     <StyledButton type="submit">Сохранить</StyledButton>
                  </DivStyledButton1>
               </StyledPasswordInput>
            </StyledContainer>
         </DivCont>
      </>
   )
}

const ModalHeader = styled('h2')`
   width: 100%;
   text-align: center;
   margin-bottom: 50px;
`

const ModalBlock = styled('div')`
   display: flex;
   justify-content: center;
   flex-flow: row wrap;
`

const StyledInput = styled('div')`
   width: 514px;
   padding-top: 30px;
`
const StyledContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
`
const StyledButton = styled(Button)`
   font-size: 16px;
   color: #ffffff;
   border: 1px solid blue;
   background-color: transparent;
   width: 135px;
   height: 42px;
   background-color: #1c1c1c;
   margin-right: 10px;
   &:hover {
      background-color: #1c1c1c;
   }
`
const StyledButton1 = styled(Button)`
   font-size: 16px;
   height: 21px;
   color: #f10000;
   padding: 0;
   display: flex;
   justify-content: flex-start;
   background-color: transparent;
   &:hover {
      background-color: transparent;
   }
`
const DivCont = styled.form`
   width: 100%;
   padding-top: 50px;
`
const DivStyledButton = styled.div`
   width: 100%;
   padding: 0;
   margin-top: 10%;
   display: flex;
   justify-content: flex-start;
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
      font-family: 'Open Sans';
      font-style: normal;
      line-height: 130%;
   }
`
const LabelStyled = styled.label`
   color: #969696;
   font-size: 16px;
   font-weight: 600;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: block;
   /* border: 1px solid red; */
   padding-bottom: 10px;
`
const DivStyledButton1 = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   padding-top: 10%;
`
const SpanStyled = styled.span`
   color: red;
`
