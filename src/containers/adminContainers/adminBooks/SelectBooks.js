import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { MenuItem } from '@mui/material'
import PopUp from '../../../Components/UI/popup'
import arrow from '../../../assets/icons/selectArrow.svg'

export default function SelectBooks({ genres, name, onClick, type, ...props }) {
   const [anChorEl, setAnchorEl] = useState(null)
   const [label, setLabel] = useState({
      name: 'все',
      id: null,
      key: type,
   })
   const open = Boolean(anChorEl)
   const [one, setOne] = useState(true)
   useEffect(() => {
      if (one) {
         setOne(false)
         return
      }
      if (onClick) {
         onClick(label.id, label.key, label.name)
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
         {name && <SelectSpan>{name}:</SelectSpan>}
         <SelectLabel {...props} onClick={handleClickLabel}>
            {label.name} <img src={arrow} alt="icon" />
         </SelectLabel>
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
   font-family: 'Open Sans';
   font-style: normal;
   /* font-weight: 600; */
   font-size: 16px;
   line-height: 120%;
   cursor: pointer;

   border: ${(props) => (props.border ? '1px solid #969696' : '')};
   font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
   padding: ${(props) => (props.padding ? props.padding : '')};
   color: ${(props) => (props.color ? props.color : '')};
   width: ${(props) => (props.width ? props.width : '')};
   &:hover {
      border: ${(props) => (props.hover ? '1px solid red' : '')};
   }
`
const SelectSpan = styled('span')`
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
