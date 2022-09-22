import { useState, useEffect } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiCheckbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { сatalogActions } from '../../../store/slices/catalogSlice'
// import vendorMainPageAction from '../../../store/slices/vendorMainPageSlice'

const CheckBox = ({ onChange, label, id, sortMethods, ...props }) => {
   const [checked, setChecked] = useState(false)
   const [one, setOne] = useState(true)
   const dispatch = useDispatch()
   const onChangeHandler = (id, checked, label) => {
      setChecked((prev) => !prev)
      onChange(id, !checked, label, onChangeHandler)
      dispatch(
         сatalogActions.deleteExternal({
            key: 'genres',
         })
      )
   }
   useEffect(() => {
      if (one) {
         // dispatch(vendorMainPageAction.setBestSellerFunc(onChangeHandler))
         setOne(false)
      }
      if (sortMethods) {
         sortMethods((prev) => {
            return {
               ...prev,
               genresMethods: [
                  ...prev.genresMethods,
                  { id, genreMethod: onChangeHandler },
               ],
            }
         })
      }
   }, [])
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
