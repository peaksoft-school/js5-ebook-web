import { InputContainer, Input, BtnIcon } from './InputStyle'
import React, { useState } from 'react'
import { ReactComponent as ClosedGreyEyes } from '../../../assets/icons/inputs/closedGreyEyes.svg'
import { ReactComponent as GreyEyes } from '../../../assets/icons/inputs/greyEyes.svg'
import { ReactComponent as Eyes } from '../../../assets/icons/inputs/eyes.svg'
import { ReactComponent as ClosedEyes } from '../../../assets/icons/inputs/closedEyes.svg'

const PasswordInput = React.forwardRef(
   ({ value, onChange, placeholder, id }, ref) => {
      const [isFocus, setIsFocus] = useState(false)
      const [isIcon, setIsIcon] = useState(false)

      const isIconHandleClick = (e) => {
         e.preventDefault()
         setIsIcon(!isIcon)
      }

      const isFocusHandleChange = () => {
         setIsFocus(!isFocus)
      }
      return (
         <InputContainer focus={isFocus}>
            <Input
               type={isIcon ? 'text' : 'password'}
               value={value}
               onChange={onChange}
               ref={ref}
               onFocus={isFocusHandleChange}
               onBlur={isFocusHandleChange}
               placeholder={placeholder}
               paddingRight="0"
               id={id}
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
