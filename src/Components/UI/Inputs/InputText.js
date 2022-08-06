import React, { useState } from 'react'
import { InputContainer, Input } from './InputStyle'

const InputText = React.forwardRef(
   (
      { placeholder, value, name, onChange, width, id, padding, textAlign },
      ref
   ) => {
      const [isFocus, setIsFocus] = useState(false)

      const onFocusHandleChange = () => {
         setIsFocus(!isFocus)
      }

      return (
         <InputContainer focus={isFocus} width={width}>
            <Input
               padding={padding}
               textAlign={textAlign}
               placeholder={placeholder}
               type="text"
               id={id}
               name={name}
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
