import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { styled } from '@mui/material'

export default function SelectSmall({ title, onChange, variant }) {
   const [age, setAge] = React.useState('')

   React.useEffect(() => {
      onChange(age)
   }, [age])

   const handleChange = (event) => {
      setAge(event.target.value)
   }

   return (
      <FormSelect size="small">
         <InputLabel>язык</InputLabel>
         <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
         >
            {/* <MenuItem value="">
               <em>None</em>
            </MenuItem> */}

            {variant
               ? title.map((el) => (
                    <CopyMenuItem key={el.id} value={el.id}>
                       {el.name}
                    </CopyMenuItem>
                 ))
               : title.map((el) => (
                    <CopyMenuItem key={el.id} value={el.name}>
                       {el.name}
                    </CopyMenuItem>
                 ))}
         </Select>
      </FormSelect>
   )
}

const FormSelect = styled(FormControl)`
   width: 100%;
   outline: red;
   border: none;
   &:active {
      /* border: 1px solid red; */
   }
`
const CopyMenuItem = styled(MenuItem)`
   border-bottom: 1px solid grey;
   width: 90%;
   margin: auto;
   font-family: 26px;
   background-color: white;
`
