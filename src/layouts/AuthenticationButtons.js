import { useState } from 'react'
import styled from 'styled-components'
import Button from '../Components/UI/Button/Button'
import Modal from '../Components/UI/Modal'
import SignUp from '../Components/UI/signUp/SignUp'

function AuthenticationButtons() {
   const [activeBtn, setActivBtn] = useState(false)
   const [isShowModal, setIsShowModal] = useState(false)
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
   return (
      <CominButtonsContainer>
         <Modal
            open={isShowModal}
            width="500px"
            height="70vh"
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
         >
            Войти
         </Button>
         <Button
            variant="default"
<<<<<<< HEAD
            background="#fff"
            color="#1C1C1C"
            border="1px solid #1C1C1C"
=======
            border="1px solid #000"
            width="auto"
            background={!activeBtn ? '#000' : '#fff'}
            color={!activeBtn ? '#fff' : '#000'}
            backgroundhover={!activeBtn ? '#000' : '#fff'}
            colorhover={!activeBtn ? '#fff' : '#000'}
            onClick={signUpBtnClickHandler}
>>>>>>> 7ab4d325a79de30deaf003ce9bcbc53f3401de84
         >
            Регистрация
         </Button>
      </CominButtonsContainer>
   )
}

export default AuthenticationButtons

const CominButtonsContainer = styled.div`
   /* border: 1px solid red; */
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
   align-items: center;
   flex-grow: 1;
   flex-shrink: 0;
`
