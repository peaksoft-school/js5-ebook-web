import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiCheckbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const CheckBox = (props) => {
   return (
      <FormGroup>
         <FormLabelStyle control={<ChesckboxStyle />} label={props} />
      </FormGroup>
   )
}

export default CheckBox

const FormLabelStyle = styled(FormControlLabel)`
   .MuiFormControlLabel-label {
      color: black;
      font-size: 16px;
   }
`
const ChesckboxStyle = styled(MuiCheckbox)`
   .MuiSvgIcon-root {
      width: 26px;
      height: 26px;
   }

   &.Mui-checked {
      color: #f34901;
   }
`
