import React from 'react'
import { styled } from '@mui/material'
import RadioButton from '../../Components/UI/RadioButton'
import { BookType } from '../../utils/constants/constants'

const TypeBooks = ({ onChange }) => {
   const onChangeHandler = (e) => {
      onChange(e.target.value)
   }
   return (
      <TypeBlock>
         <Type>Тип</Type>
         <Line />
         <TypeStyles onChange={onChangeHandler}>
            <RadioButton
               id="1"
               label="Бумажная книга"
               value={BookType.PAPER_BOOK}
            />
            <RadioButton
               id="1"
               label="Аудиокнига"
               value={BookType.AUDIO_BOOK}
            />
            <RadioButton
               id="1"
               label="Электронная книга"
               value={BookType.ELECTRONIC_BOOK}
            />
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
