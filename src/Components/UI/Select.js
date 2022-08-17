import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { styled } from '@mui/material'

export default function SelectSmall({ arr }) {
   const [age, setAge] = React.useState('')
   console.log(age)

   const handleChange = (event) => {
      setAge(event.target.value)
   }
   if (age.length > 1) {
      console.log('ok')
   } else {
      console.log('no')
   }

   return (
      <FormSelect size="small">
         <InputLabel id="demo-select-small">язык</InputLabel>
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
            {arr.map((el) => (
               <CopyMenuItem key={el.id} value={el.name}>
                  {el.name}
               </CopyMenuItem>
            ))}
         </Select>
      </FormSelect>
   )
}

const FormSelect = styled(FormControl)`
   width: 200px;
   outline: red;
   border: none;
   &:active {
      /* border: 1px solid red; */
   }
`
const CopyMenuItem = styled(MenuItem)`
   border-bottom: 1px solid grey;
   width: 160px;
   margin: auto;
   font-family: 26px;
   background-color: white;
`
