import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { styled } from '@mui/material'

function RadioItem({ ...props }) {
   return (
      <FormControl>
         <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
         <Group
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
         >
            <FormControlLabel
               value={props.label}
               control={
                  <Radio
                     type="radio"
                     name="radio"
                     onChange={props.onChange}
                     checked={props.checked}
                  />
               }
               label={props.label}
            />
         </Group>
      </FormControl>
   )
}

export default RadioItem

const Group = styled('div')`
   width: 100%;
   display: flex;
   accent-color: #f34901;
`

