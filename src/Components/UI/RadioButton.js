import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { styled } from '@mui/material'

function RadioButton({ onChange, label, id, isSelect, value }) {
   return (
      <FormControl>
         <FormLabel id="demo-radio-buttons-group-label" />
         <Group
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
         >
            <FormControlLabel
               value={label}
               control={
                  <InputRadio
                     checked={isSelect}
                     type="radio"
                     name={id}
                     onChange={onChange}
                     value={value}
                  />
               }
               label={label}
            />
         </Group>
      </FormControl>
   )
}

export default RadioButton

const InputRadio = styled('input')`
   width: 26px;
   height: 26px;
   cursor: pointer;
`

const Group = styled('div')`
   width: 100%;
   display: flex;
   accent-color: #f34901;
   & > label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > span {
         display: inline-block;
         font-family: 'Open Sans';
         font-weight: 400;
         font-size: 1rem;
         height: inherit;
         margin-left: 10px;
      }
   }
`
