import { useState } from 'react'
import * as Sign from './SignStyles'
import SignUpVendor from './SignUpVendor'

function SignUp({ activeBtn }) {
   const [isShowUp, setIsShowUp] = useState(activeBtn)
   const signInClickHandler = () => {
      setIsShowUp(true)
   }
   const signUpClickHandler = () => {
      setIsShowUp(false)
   }
   return (
      <Sign.SignBlock>
         <Sign.ButtonIn onClick={signInClickHandler} activeBtn={isShowUp}>
            Войти
         </Sign.ButtonIn>
         <Sign.ButtonIn onClick={signUpClickHandler} activeBtn={!isShowUp}>
            Регистрация
         </Sign.ButtonIn>
         <SignUpVendor />
      </Sign.SignBlock>
   )
}

export default SignUp
