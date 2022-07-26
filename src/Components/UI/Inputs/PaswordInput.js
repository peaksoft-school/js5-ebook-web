import { InputContainer, Input, InputBlock, BtnIcon } from './InputStyle'
import React, { useState } from 'react'
import { ReactComponent as ClosedGreyEyes } from '../../../assets/icons/inputs/closedGreyEyes.svg'
import { ReactComponent as GreyEyes } from '../../../assets/icons/inputs/greyEyes.svg'
import { ReactComponent as Eyes } from '../../../assets/icons/inputs/eyes.svg'
import { ReactComponent as ClosedEyes } from '../../../assets/icons/inputs/closedEyes.svg'

const PasswordInput = React.forwardRef(
   ({ value, onChange, placeholder }, ref) => {
      const [isFocus, setIsFocus] = useState(false)
      const [isIcon, setIsIcon] = useState(false)

      const isIconHandleClick = () => {
         setIsIcon(!isIcon)
      }

      const isFocusHandleChange = () => {
         setIsFocus(!isFocus)
      }
      return (
         <InputBlock>
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
         </InputBlock>
      )
   }
)

export default PasswordInput
