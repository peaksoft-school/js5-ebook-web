import * as React from 'react'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ReactComponent as DateIcon } from '../../assets/icons/datePicker/suitcase.svg'
// import DateIcon from '../../assets/icons/datePicker/suitcase.png'
// mainPosition: "bottom",
//   relativePosition: "center",
//   fixMainPosition: false,
//   fixRelativePosition: false,
//   offsetY: 0,
//   offsetX: 0
export default function BasicDatePicker() {
   const [value, setValue] = React.useState(null)
   const year = value?.getFullYear()
   const month = value?.getMonth()
   const day = value?.getDate()
   console.log(`${year}-${month + 1}-${day}`)
   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePickerBlock
            value={value}
            format="mm/dd/yy"
            onChange={(newValue) => {
               setValue(newValue)
            }}
            components={{
               OpenPickerIcon: DateIcon,
            }}
            renderInput={(params) => <TextDate {...params} />}
            calendarPosition="top-end"
            fixMainPosition
            fixRelativePosition
         />
      </LocalizationProvider>
   )
}

const DatePickerBlock = styled(DatePicker)`
   transform: translate(223.667px, 145.667px);
`

const TextDate = styled(TextField)`
   /* width: 30px; */
   & > div {
      /* border: 1px solid red; */
      border-radius: 0%;
      width: 100%;
   }
   & > div > input {
      /* border: 1px solid red; */
      padding: 10px 20px;
   }
`
