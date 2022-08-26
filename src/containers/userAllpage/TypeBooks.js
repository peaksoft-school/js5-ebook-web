import React from 'react'
import { styled } from '@mui/material'
import RadioButton from '../../Components/UI/RadioButton'

const typBooks = [
   { id: 1, name: 'Бумажная книга' },
   { id: 1, name: 'Аудиокнига' },
   { id: 1, name: 'Электронная книга' },
]
const TypeBooks = () => {
   return (
      <TypeBlock>
         <Type>Тип</Type>
         <Line />
         <TypeStyles>
            {typBooks.map((el) => (
               <RadioButton key={el.id} id={el.id} label={el.name} />
            ))}
         </TypeStyles>
      </TypeBlock>
   )
}

export default TypeBooks

const TypeBlock = styled('div')`
   font-family: 'Open Sans';
`
const Type = styled('div')`
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
   margin-bottom: 10px;
`
const Line = styled('div')`
   border-bottom: 1px solid gray;
   margin-bottom: 14px;
`
const TypeStyles = styled('div')`
   width: 266px;
   margin-top: 19px;
   margin-left: 4px;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
`
