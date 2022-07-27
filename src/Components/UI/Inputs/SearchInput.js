import React, { useState } from 'react'
import { InputContainer, Input, BtnIcon } from './InputStyle'
import { ReactComponent as OrangeSearchIcon } from '../../../assets/icons/inputs/search.svg'
import { ReactComponent as GreySearchIcon } from '../../../assets/icons/inputs/greySearch.svg'
import styled from 'styled-components'

const SearchInput = React.forwardRef(
   ({ value, placeholder, onChange, books, ItemOnClick }, ref) => {
      const [isFocus, setIsFocus] = useState(false)

      const IsFocusHandleChange = () => {
         setIsFocus(!isFocus)
      }

      return (
         <>
            <InputContainer
               borderColor={isFocus ? '#F34901' : ''}
               focus={isFocus}
               backgroundColor="#fff"
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
            </InputContainer>
            <ItemBlock>
               {books &&
                  books.map((elem) => {
                     return (
                        <Item
                           key={elem.id}
                           onClick={() => ItemOnClick(elem.name)}
                        >
                           {elem.name}
                        </Item>
                     )
                  })}
            </ItemBlock>
         </>
      )
   }
)
export default SearchInput

const ItemBlock = styled('ul')`
   list-style: none;
   margin: 0;
   padding: 0;
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
