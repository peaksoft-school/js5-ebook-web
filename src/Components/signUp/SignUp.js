import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Sign from './SignStyles'
import SignUpClient from './SignUpClient'
import { authSlicesActions } from '../../store/slices/authSlices'
import SignUpVendor from './SignUpVendor'
import SignIn from './signIn'

function SignUp({ activeBtn }) {
   const [opacity, setOpactity] = useState(1)
   const [isShowUp, setIsShowUp] = useState(activeBtn)
   const [isSignUp, setIsSignUp] = useState(false)
   const { status } = useSelector((store) => store.auth)
   const dispatch = useDispatch()
   useEffect(() => {
      if (status === 'pending') {
         setOpactity(0.5)
      } else {
         setOpactity(1)
      }
   }, [status])
   useEffect(() => {
      if (status) {
         dispatch(authSlicesActions.cleanStatus())
      }
   }, [isShowUp, isSignUp])
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
      <Sign.SignBlock opacity={opacity}>
         <Sign.ButtonIn onClick={signInClickHandler} activeBtn={isShowUp}>
            Войти
         </Sign.ButtonIn>
         <Sign.ButtonIn onClick={signUpClickHandler} activeBtn={!isShowUp}>
            Регистрация
         </Sign.ButtonIn>
         {isShowUp ? <SignIn /> : SignUpComponents}
      </Sign.SignBlock>
   )
}

export default SignUp
