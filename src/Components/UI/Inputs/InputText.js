import React, { useState } from 'react'
import { InputContainer, Input } from './InputStyle'

const InputText = React.forwardRef(
   (
      {
         placeholder,
         value,
         onChange,
         id,
         type,
         pattern,
         error,
         onBlur,
         onFocus,
         focusColor,
         ...props
      },
      ref
   ) => {
      const [isFocus, setIsFocus] = useState(false)

      const onFocusHandleChange = () => {
         setIsFocus(!isFocus)
      }

      const onBlurHandleChange = () => {
         setIsFocus(false)
         if (onBlur) {
            onBlur()
         }
      }

      return (
         <InputContainer focus={isFocus} error={error} focusColor={focusColor}>
            <Input
               placeholder={placeholder}
               type={type || 'text'}
               onFocus={onFocusHandleChange}
               onBlur={onBlurHandleChange}
               ref={ref}
               value={value}
               onChange={onChange}
               id={id}
               pattern={pattern}
               error={error}
               {...props}
            />
         </InputContainer>
      )
   }
)
export default InputText
