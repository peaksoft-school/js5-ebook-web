import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiCheckbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const BestsellerCheckBox = ({ onChange, checked, label, ...props }) => {
   return (
      <FormGroup>
         <FormLabelStyle
            control={
               <ChesckboxStyle
                  onChange={(e) => onChange(e)}
                  checked={checked}
                  {...props}
               />
            }
            label={label}
         />
      </FormGroup>
   )
}
export default BestsellerCheckBox

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
