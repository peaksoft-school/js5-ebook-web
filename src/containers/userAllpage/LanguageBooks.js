import React from 'react'
import { styled } from '@mui/material'
import CheckBox from '../../Components/UI/checkBox/CheckBox'

const languageBooks = [
   { id: 1, name: 'Кыргызский язык' },
   { id: 1, name: 'Русский язык' },
   { id: 1, name: 'Английский язык' },
]
const LanguageBooks = () => {
   return (
      <TypeBlock>
         <Type>Язык издания</Type>
         <Line />
         <TypeStyles>
            {languageBooks.map((el) => (
               <CheckBox key={el.id} id={el.id} label={el.name} />
            ))}
         </TypeStyles>
      </TypeBlock>
   )
}

export default LanguageBooks
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
