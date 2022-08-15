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
         ...props
      },
      ref
   ) => {
      const [isFocus, setIsFocus] = useState(false)

      const onFocusHandleChange = () => {
         setIsFocus(true)
         if (onFocus) {
            onFocus()
         }
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
