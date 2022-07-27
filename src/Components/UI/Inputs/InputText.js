import React, { useState } from 'react'
import { InputContainer, Input } from './InputStyle'

const InputText = React.forwardRef(({ placeholder, value, onChange }, ref) => {
   const [isFocus, setIsFocus] = useState(false)

   const onFocusHandleChange = () => {
      setIsFocus(!isFocus)
   }

   return (
      <InputContainer focus={isFocus}>
         <Input
            placeholder={placeholder}
            type="text"
            onFocus={onFocusHandleChange}
            onBlur={onFocusHandleChange}
            ref={ref}
            value={value}
            onChange={onChange}
         />
      </InputContainer>
   )
})
export default InputText
