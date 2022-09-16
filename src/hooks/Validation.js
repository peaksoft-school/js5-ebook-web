import { useEffect, useState } from 'react'

function Validation(funcValid) {
   const [value, setValue] = useState('')
   const [isValidValue, setIsValidValue] = useState(false)
   const [isBlur, setIsBlur] = useState(false)

   const bool = funcValid(value)

   useEffect(() => {
      if (bool && isBlur) {
         setIsValidValue(true)
      } else {
         setIsValidValue(false)
      }
   }, [value, bool, isBlur])

   const onBlurHandler = () => {
      setIsBlur(true)
   }

   const inputChange = (e) => {
      setValue(e.target.value)
   }

   return {
      inputChange,
      value,
      isValidValue,
      onBlurHandler,
      setValue,
   }
}

export default Validation
