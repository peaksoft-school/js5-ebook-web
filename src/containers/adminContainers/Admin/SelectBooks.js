import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { MenuItem } from '@mui/material'
import PopUp from '../../../Components/UI/popup'
import arrow from '../../../assets/icons/selectArrow.svg'

export default function SelectBooks({ genres, name, onClick, type, variant }) {
   const [anChorEl, setAnchorEl] = useState(null)
   const [label, setLabel] = useState({
      name: 'Все',
      id: variant ? 'ALL' : null,
      key: type,
   })
   const open = Boolean(anChorEl)
   useEffect(() => {
      if (onClick) {
         onClick(label.id, 'aboutBooks', label.name)
      }
   }, [label])
   const handleClickLabel = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const onCloseMenu = () => {
      setAnchorEl(null)
   }
   const onSelectItem = (id, name) => {
      setLabel((prev) => {
         return {
            ...prev,
            name,
            id,
         }
      })
      onCloseMenu()
   }
   return (
      <SelectBook>
         <SelectSpan>{name}</SelectSpan>
         <SelectLabel onClick={handleClickLabel}>{label.name} </SelectLabel>
         <img src={arrow} alt="icon" />
         <PopUp open={open} anchorEl={anChorEl} onClose={onCloseMenu}>
            {genres &&
               genres.map((elem) => {
                  return (
                     <PopUpItem
                        key={elem.id}
                        onClick={() => onSelectItem(elem.id, elem.name)}
                     >
                        {elem.name}
                     </PopUpItem>
                  )
               })}
         </PopUp>
      </SelectBook>
   )
}
const PopUpItem = styled(MenuItem)`
   padding: 10px;
`
const SelectLabel = styled('div')`
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
   cursor: pointer;
`
const SelectSpan = styled('span')`
   /* border: 1px solid red; */
   color: #b5b5b5;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   padding-right: 10px;
`
const SelectBook = styled('div')`
   /* border: 1px solid red; */
   display: flex;
   justify-content: flex-start;
   /* max-width: 180px; */
   flex-grow: 2;
`
