import React from 'react'
import { styled } from '@mui/material'
import RadioButton from '../../Components/UI/RadioButton'
import { BookType } from '../../utils/constants/constants'
import { ReactComponent as Icontriangle } from '../../assets/icons/catalog/iconSort.svg'

const TypeBooks = ({ onChange }) => {
   const onChangeHandler = (e) => {
      onChange('bookType', e.target.value)
   }
   return (
      <TypeBlock>
         <Type>
            Тип <Icontriangle />
         </Type>
         <Line />
         <TypeStyles onChange={onChangeHandler}>
            <RadioButton
               id="bookType"
               label="Бумажная книга"
               value={BookType.PAPER_BOOK}
            />
            <RadioButton
               id="bookType"
               label="Аудиокнига"
               value={BookType.AUDIO_BOOK}
            />
            <RadioButton
               id="bookType"
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
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-flow: row nowrap;
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
