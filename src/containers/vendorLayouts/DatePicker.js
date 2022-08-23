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
export default function BasicDatePicker({ onChange }) {
   const [value, setValue] = React.useState(null)
   const [date, setDate] = React.useState({
      year: '',
      month: '',
      day: '',
   })
   React.useEffect(() => {
      if (onChange) {
         onChange(date)
      }
   }, [date])
   React.useEffect(() => {
      if (value) {
         setDate(() => {
            const m = value.getMonth()
            return {
               year: value.getFullYear(),
               month: m + 1,
               day: value.getDate(),
            }
         })
      }
   }, [value])

   const onChangeDateHandler = (newValue) => {
      setValue(newValue)
   }

   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePickerBlock
            value={value}
            format="mm/dd/yy"
            onChange={onChangeDateHandler}
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
