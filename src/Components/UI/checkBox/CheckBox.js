import { useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiCheckbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const CheckBox = ({ onChange, label, id, ...props }) => {
   const [checked, setChecked] = useState(false)
   const onChangeHandler = (id, checked, label) => {
      setChecked(!checked)
      onChange(id, !checked, label, onChangeHandler)
   }
   return (
      <FormGroup>
         <FormLabelStyle
            control={
               <ChesckboxStyle
                  onChange={() => onChangeHandler(id, checked, label)}
                  checked={checked}
                  {...props}
               />
            }
            label={label}
         />
      </FormGroup>
   )
}
export default CheckBox

const FormLabelStyle = styled(FormControlLabel)`
   .MuiFormControlLabel-label {
      font-family: 'Open Sans';
      color: black;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
   }
`
const ChesckboxStyle = styled(MuiCheckbox)`
   .MuiSvgIcon-root {
      margin: ${(props) => props.margin || ''};
      width: 26px;
      height: 26px;
   }

   &.Mui-checked {
      color: #f34901;
   }
`
