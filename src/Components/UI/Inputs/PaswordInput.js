/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { InputContainer, Input, BtnIcon } from './InputStyle'
import { ReactComponent as ClosedGreyEyes } from '../../../assets/icons/inputs/closedGreyEyes.svg'
import { ReactComponent as GreyEyes } from '../../../assets/icons/inputs/greyEyes.svg'
import { ReactComponent as Eyes } from '../../../assets/icons/inputs/eyes.svg'
import { ReactComponent as ClosedEyes } from '../../../assets/icons/inputs/closedEyes.svg'

const PasswordInput = React.forwardRef(
   ({ value, onChange, placeholder, id, onBlur, error, name }, ref) => {
      const [isFocus, setIsFocus] = useState(false)
      const [isIcon, setIsIcon] = useState(false)

      const isIconHandleClick = (e) => {
         e.preventDefault()
         setIsIcon(!isIcon)
      }

      const isFocusHandleChange = () => {
         setIsFocus(true)
      }

      const onBlurHandleChange = () => {
         setIsFocus(false)
         if (onBlur) {
            onBlur()
         }
      }
      return (
         <InputContainer focus={isFocus} error={error}>
            <Input
               type={isIcon ? 'text' : 'password'}
               value={value}
               onChange={onChange}
               ref={ref}
               onFocus={isFocusHandleChange}
               onBlur={onBlurHandleChange}
               placeholder={placeholder}
               paddingRight="0"
               id={id}
               name={name}
               error={error}
            />
            <BtnIcon onClick={isIconHandleClick}>
               {isFocus ? (
                  isIcon ? (
                     <Eyes />
                  ) : (
                     <ClosedEyes />
                  )
               ) : isIcon ? (
                  <GreyEyes />
               ) : (
                  <ClosedGreyEyes />
               )}
            </BtnIcon>
         </InputContainer>
      )
   }
)

export default PasswordInput
