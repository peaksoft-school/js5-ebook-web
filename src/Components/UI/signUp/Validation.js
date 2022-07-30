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

   const InputChange = (e) => {
      setValue(e.target.value)
   }

   return {
      InputChange,
      value,
      isValidValue,
      onBlurHandler,
   }
}

export default Validation
