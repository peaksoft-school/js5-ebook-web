import { useState } from 'react'
import * as Sign from './SignStyles'
import SignUpClient from './SignUpClient'
import SignUpVendor from './SignUpVendor'
import SignInAll from './signInAll'

function SignUp({ activeBtn }) {
   const [isShowUp, setIsShowUp] = useState(activeBtn)
   const [isSignUp, setIsSignUp] = useState(false)
   const signInClickHandler = () => {
      setIsShowUp(true)
   }
   const signUpClickHandler = () => {
      setIsShowUp(false)
   }
   const SignUpComponents = isSignUp ? (
      <SignUpVendor />
   ) : (
      <SignUpClient toggleSignUpVendor={setIsSignUp} />
   )
   return (
      <Sign.SignBlock>
         <Sign.ButtonIn onClick={signInClickHandler} activeBtn={isShowUp}>
            Войти
         </Sign.ButtonIn>
         <Sign.ButtonIn onClick={signUpClickHandler} activeBtn={!isShowUp}>
            Регистрация
         </Sign.ButtonIn>
         {isShowUp ? <SignInAll /> : SignUpComponents}
      </Sign.SignBlock>
   )
}

export default SignUp
