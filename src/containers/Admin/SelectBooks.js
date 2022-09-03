import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { MenuItem } from '@mui/material'
import PopUp from '../../Components/UI/popup'

export default function SelectBooks({ genres, name, onClick, type }) {
   const [anChorEl, setAnchorEl] = useState(null)
   const [label, setLabel] = useState({
      name: 'все',
      id: null,
      key: type,
   })
   const open = Boolean(anChorEl)
   useEffect(() => {
      if (onClick) {
         onClick(label.id, label.key, label.text)
      }
   }, [label])
   const handleClickLabel = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const onCloseMenu = () => {
      setAnchorEl(null)
   }
   const onSelectItem = (id, name, text) => {
      setLabel((prev) => {
         return {
            ...prev,
            name,
            id,
            text,
         }
      })
      onCloseMenu()
   }
   return (
      <SelectBook>
         {name && <SelectSpan>{name}:</SelectSpan>}
         <SelectLabel onClick={handleClickLabel}>{label.name} </SelectLabel>
         <PopUp open={open} anchorEl={anChorEl} onClose={onCloseMenu}>
            {genres &&
               genres.map((elem) => {
                  return (
                     <PopUpItem
                        key={elem.id}
                        onClick={() =>
                           onSelectItem(elem.id, elem.name, elem.text)
                        }
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
