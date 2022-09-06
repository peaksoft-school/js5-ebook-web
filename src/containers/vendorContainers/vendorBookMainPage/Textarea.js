import { styled } from '@mui/material'
import { useState } from 'react'

const Textarea = ({ value, title, name, maxLength, onChange, placeholder }) => {
   const [state, setState] = useState(0)

   const changeHandle = (e) => {
      setState(e.target.value.length)
      onChange(e)
   }

   return (
      <TextArea>
         <Label>
            {title} <strong>*</strong>
         </Label>
         <TextareaStyle
            name={name}
            maxLength={maxLength}
            onChange={changeHandle}
            placeholder={placeholder}
            value={value}
         />
         <CharactersLimit>{`${state}/${maxLength}`}</CharactersLimit>
      </TextArea>
   )
}
export default Textarea

const TextArea = styled('div')`
   margin-top: 30px;
`

const TextareaStyle = styled('textarea')`
   width: 100%;
   height: 199px;
   border: 1px solid #969696;
   margin-top: 6px;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 16px;
   line-height: 20.8px;
   resize: none;
   padding: 10px 16px;
   outline: none;
   background-color: rgba(0, 0, 0, 0);

   ::placeholder {
      color: #969696;
   }

   ::-webkit-scrollbar {
      width: 0 !important;
   }

   &:focus {
      background-color: white;
      border: 1px solid #f34901;
   }
`
const Label = styled('label')`
   font-size: 16px;
   font-size: 16px;
   line-height: 20.8px;
   font-family: 'Open Sans';
   font-weight: 400;
`
const CharactersLimit = styled('div')`
   color: #b5b5b5;
   line-height: 21.82px;
   display: flex;
   justify-content: end;
`
