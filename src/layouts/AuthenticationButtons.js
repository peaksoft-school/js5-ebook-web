import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { MenuItem } from '@mui/material'
import styled from '@emotion/styled'
import Button from '../Components/UI/Button/Button'
import Modal from '../Components/UI/Modal'
import SignUp from '../Components/signUp/SignUp'
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg'
import { APP_ROLES } from '../utils/constants/constants'
import PopUp from '../Components/UI/popup'
import ExitApp from '../Components/UI/ExitApp'

function AuthenticationButtons() {
   const [activeBtn, setActivBtn] = useState(false)
   const [isShowModal, setIsShowModal] = useState(false)
   const [userActive, setUserActive] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const user = useSelector((store) => store.auth.user)
   const navigate = useNavigate()
   useEffect(() => {
      if (user.role === APP_ROLES.USER && user.token) {
         setUserActive(true)
         setIsShowModal(false)
      } else {
         setUserActive(false)
         setIsShowModal(false)
      }
   }, [user])
   const signInBtnClickHandler = () => {
      setActivBtn(true)
      setIsShowModal(true)
   }
   const signUpBtnClickHandler = () => {
      setActivBtn(false)
      setIsShowModal(true)
   }
   const closeModal = () => {
      setIsShowModal(false)
   }
   const onClickProfileHandler = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const onCloseProfileHandler = () => {
      setAnchorEl(null)
   }
   const onClickExitBtn = () => {
      setIsShowModal(true)
      onCloseProfileHandler()
   }
   const onClickProfile = () => {
      navigate('/main/profile')
      onCloseProfileHandler()
   }
   const showUser = userActive ? (
      <>
         <Profile onClick={onClickProfileHandler}>
            <ProfileIcon />
            <PofileSpan>{user.firstName}</PofileSpan>
         </Profile>
         <PopUp open={open} onClose={onCloseProfileHandler} anchorEl={anchorEl}>
            <MenuItem onClick={onClickProfile}>Профиль</MenuItem>
            <MenuItem onClick={onClickExitBtn}>Выйти</MenuItem>
         </PopUp>
         <Modal open={isShowModal} onClose={closeModal}>
            <ExitApp onCloseModal={closeModal} />
         </Modal>
      </>
   ) : (
      <>
         <Modal
            open={isShowModal}
            width="500px"
            justifyContent="flex-start"
            onClose={closeModal}
         >
            <SignUp activeBtn={activeBtn} />
         </Modal>
         <Button
            variant="default"
            border="1px solid #000"
            width="auto"
            background={activeBtn ? '#000' : '#fff'}
            color={activeBtn ? '#fff' : '#000'}
            backgroundhover={activeBtn ? '#000' : '#fff'}
            colorhover={activeBtn ? '#fff' : '#000'}
            onClick={signInBtnClickHandler}
            marginright="20px"
         >
            Войти
         </Button>
         <Button
            variant="default"
            border="1px solid #000"
            width="auto"
            background={!activeBtn ? '#000' : '#fff'}
            color={!activeBtn ? '#fff' : '#000'}
            backgroundhover={!activeBtn ? '#000' : '#fff'}
            colorhover={!activeBtn ? '#fff' : '#000'}
            onClick={signUpBtnClickHandler}
         >
            Регистрация
         </Button>
      </>
   )
   return <CominButtonsContainer>{showUser}</CominButtonsContainer>
}

export default AuthenticationButtons

const PofileSpan = styled('span')`
   margin-left: 8px;
`

const Profile = styled('div')`
   border: 1px solid #1c1c1c;
   padding: 10px 20px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   display: flex;
   align-items: center;
   cursor: pointer;
`

const CominButtonsContainer = styled.div`
   /* border: 1px solid red; */
   display: flex;
   flex-flow: row nowrap;
   justify-content: flex-end;
   align-items: center;
   flex-grow: 1;
   flex-shrink: 0;
`
