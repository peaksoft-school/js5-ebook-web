import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcons from '../../../assets/icons/SerachIcons.png'

function SearchBar({ placeholder, data, type }) {
   const [filteredData, setFilteredData] = useState([])
   const [someState, setSomeState] = useState('')

   const onChangeHandler = (event) => {
      const searchWord = event.target.value
      setSomeState(searchWord)
      const newFilter = data.filter((value) => {
         return value.title.toLowerCase().includes(searchWord.toLowerCase())
      })

      if (searchWord === '') {
         setFilteredData([])
      } else {
         setFilteredData(newFilter)
      }
   }

   return (
      <div>
         <div>
            <InputSerach
               type={type}
               placeholder={placeholder}
               value={someState}
               onChange={onChangeHandler}
            />
         </div>
         <Div>
            <ButtonIconsSerach>
               <ImgSerachIcons src={SearchIcons} />
            </ButtonIconsSerach>
         </Div>
         {filteredData.length !== 0 && (
            <div>
               {filteredData.slice(0, 15).map((value) => {
                  return <p> {value.title} </p>
               })}
            </div>
         )}
      </div>
   )
}

export default SearchBar

const Div = styled.div`
   width: 900px;
   display: flex;
   justify-content: flex-end;
   margin-top: -4.6rem;
`

const InputSerach = styled.input`
   width: 895px;
   height: 40px;
   border: 1px solid #c4c4c4;
   margin-top: 10px;
   &::placeholder {
      padding: 18px;
      width: 306px;
      height: 18px;
      color: #969696;
      font-family: Open Sans;
      font-style: Regular;
      font-size: 14px;
      line-height: 18px;
      line-height: 130%;
      vertical-align: top;
   }
   &:hover {
      outline: none;
      border: 1px solid blue;
   }
   &:active,
   :focus {
      outline: none;
      outline-offset: 0;
      border-color: #f34901;
      color: black;
   }

   &:active::-webkit-input-placeholder {
      color: transparent;
   }
`

const ButtonIconsSerach = styled.button`
   outline: none;
   border: none;
   margin: 2.4rem 10px 10px;
   cursor: pointer;
   background: transparent;
   color: #969696;
   &:active {
      outline: none;
      color: #f34901;
   }
`

const ImgSerachIcons = styled.img`
   width: 20.31px;
   height: 20.31px;
   &:active {
      border: none;
      outline: none;
      filter: invert(0%) sepia(98%) saturate(500%) brightness(98%)
         contrast(102%);
      background: white;
   }
`
