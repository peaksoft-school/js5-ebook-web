import React from 'react'
import { styled } from '@mui/material'
import CheckBox from '../../Components/UI/checkBox/CheckBox'
import { Languages } from '../../utils/constants/constants'

const languageBooks = [
   { id: 1, name: 'Кыргызский язык', type: Languages.KYRGYZ },
   { id: 2, name: 'Русский язык', type: Languages.RUSSIAN },
   { id: 3, name: 'Английский язык', type: Languages.ENGLISH },
]

const LanguageBooks = () => {
   return (
      <TypeBlock>
         <Type>Язык издания</Type>
         <Line />
         <TypeStyles>
            {languageBooks.map((el) => {
               return <CheckBox key={el.id} id={el.type} label={el.name} />
            })}
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
