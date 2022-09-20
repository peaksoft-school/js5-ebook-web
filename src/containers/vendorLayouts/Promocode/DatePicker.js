/* eslint-disable import/no-unresolved */
import * as React from 'react'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ReactComponent as DateIcon } from '../../../assets/icons/datePicker/suitcase.svg'

function getDateValue(value) {
   const arr = String(value).split('')
   if (arr.length < 2) {
      arr.unshift('0')
   }
   return arr.join('')
}

export default function BasicDatePicker({ onChange }) {
   const [value, setValue] = React.useState(null)
   const [date, setDate] = React.useState({
      year: '',
      month: '',
      day: '',
   })
   React.useEffect(() => {
      if (date.year === '' && date.month === '' && date.day === '') {
         return
      }
      if (onChange) {
         const text = `${date.year}-${getDateValue(date.month)}-${getDateValue(
            date.day
         )}`
         onChange(text)
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
         <DatePicker
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

const TextDate = styled(TextField)`
   & > div {
      border-radius: 0%;
      width: 100%;
   }
   & > div > input {
      padding: 10px 20px;
   }
`
