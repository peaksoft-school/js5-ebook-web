import styled from '@emotion/styled'
import { MenuItem } from '@mui/material'
import React from 'react'
import { ReactComponent as Icontriangle } from '../../assets/icons/catalog/iconSort.svg'
import PopUp from '../../Components/UI/popup'
import { SortBy } from '../../utils/constants/constants'

const Sorting = ({ onChange, sortMethods }) => {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const [state, setState] = React.useState('Сортировка')
   const open = Boolean(anchorEl)
   const onClickSortHandler = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const onClosePopUp = () => {
      setAnchorEl(null)
   }
   const onClickItemHandler = (value, label) => {
      onChange('sortBy', value)
      setState(label)
      onClosePopUp()
   }
   React.useEffect(() => {
      sortMethods((prev) => {
         return { ...prev, sortByMethod: onClickItemHandler }
      })
   }, [])
   return (
      <div>
         <SortingButton onClick={onClickSortHandler}>
            {state} <Icontriangle />
         </SortingButton>
         <PopUp open={open} onClose={onClosePopUp} anchorEl={anchorEl}>
            <MenuItem onClick={() => onClickItemHandler(SortBy.NEW, 'Новинки')}>
               Новинки
            </MenuItem>
            <MenuItem
               onClick={() =>
                  onClickItemHandler(SortBy.BESTSELLER, 'Бестселлеры')
               }
            >
               Бестселлеры
            </MenuItem>
         </PopUp>
      </div>
   )
}

export default Sorting

const SortingButton = styled('div')`
   /* border: 1px solid red; */
   padding: 10px;
   cursor: pointer;
`
