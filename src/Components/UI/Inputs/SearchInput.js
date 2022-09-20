import styled from 'styled-components'
import React, { useState } from 'react'
// import { Menu, MenuItem } from '@mui/material'
import { InputContainer, Input, BtnIcon } from './InputStyle'
import { ReactComponent as OrangeSearchIcon } from '../../../assets/icons/inputs/search.svg'
import { ReactComponent as GreySearchIcon } from '../../../assets/icons/inputs/greySearch.svg'

const SearchInput = React.forwardRef(
   (
      { value, placeholder, onChange, books, ItemOnClick, backgroundColor },
      ref
   ) => {
      const [isFocus, setIsFocus] = useState(false)

      const IsFocusHandleChange = () => {
         setIsFocus(!isFocus)
      }

      // console.log

      return (
         <InputContainer
            borderColor={isFocus ? '#F34901' : ''}
            focus={isFocus}
            backgroundColor={backgroundColor}
         >
            <Input
               type="search"
               value={value}
               placeholder={placeholder}
               onChange={onChange}
               ref={ref}
               fontSize="14px"
               onFocus={IsFocusHandleChange}
               onBlur={IsFocusHandleChange}
               paddingRight="0"
            />
            <BtnIcon>
               {isFocus ? <GreySearchIcon /> : <OrangeSearchIcon />}
            </BtnIcon>
            {books && (
               <ItemBlock>
                  {books.map((elem) => {
                     return (
                        <Item
                           key={elem.id}
                           onClick={() =>
                              ItemOnClick(elem.id, elem.search, elem.searchType)
                           }
                        >
                           {elem.search}
                        </Item>
                     )
                  })}
               </ItemBlock>
            )}
         </InputContainer>
      )
   }
)
export default SearchInput

const ItemBlock = styled('ui')`
   list-style: none;
   margin: 0;
   padding: 0;
   position: absolute;
   top: calc(100% + 10px);
   left: 0;
   right: 0;
   background: #fff;
   z-index: 10;
   border-radius: 3px;
   overflow: hidden;
   /* box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
      0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%); */
`

const Item = styled('li')`
   font-family: 'Open Sans';
   font-size: 1rem;
   font-weight: 400;
   line-height: 21.79px;
   padding: 10px 20px;
   color: #222222;
   border-bottom: 1px solid #eeeeee;
   transition: ease-in 0.2s;
   cursor: pointer;
   &:hover {
      background-color: #ffede5;
   }
`
