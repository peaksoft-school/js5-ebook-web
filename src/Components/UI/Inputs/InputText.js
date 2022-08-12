import React, { useState } from 'react'
import { InputContainer, Input } from './InputStyle'

const InputText = React.forwardRef(
   (
      { placeholder, width, position, left, type, value, onChange, name },
      ref
   ) => {
      const [isFocus, setIsFocus] = useState(false)

      const onFocusHandleChange = () => {
         setIsFocus(!isFocus)
      }

      return (
         <InputContainer focus={isFocus}>
            <Input
               placeholder={placeholder}
               position={position}
               left={left}
               width={width}
               // type="text"
               name={name}
               type={type}
               onFocus={onFocusHandleChange}
               onBlur={onFocusHandleChange}
               ref={ref}
               value={value}
               onChange={onChange}
            />
         </InputContainer>
      )
   }
)
export default InputText
