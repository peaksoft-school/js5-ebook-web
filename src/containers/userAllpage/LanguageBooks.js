import React from 'react'
import { styled } from '@mui/material'
// import CheckBox from '../../Components/UI/checkBox/CheckBox'
import { Languages } from '../../utils/constants/constants'
import RadioButton from '../../Components/UI/RadioButton'
import { ReactComponent as Icontriangle } from '../../assets/icons/catalog/iconSort.svg'

const languageBooks = [
   { id: 'languages', name: 'Кыргызский язык', type: Languages.KYRGYZ },
   { id: 'languages', name: 'Русский язык', type: Languages.RUSSIAN },
   { id: 'languages', name: 'Английский язык', type: Languages.ENGLISH },
]

const LanguageBooks = ({ onChange }) => {
   const onChangeItem = (e) => {
      onChange('languages', e.target.value)
   }
   return (
      <TypeBlock>
         <Type>
            Язык издания <Icontriangle />
         </Type>
         <Line />
         <TypeStyles>
            {languageBooks.map((el) => {
               return (
                  <RadioButton
                     key={el.type}
                     id={el.id}
                     label={el.name}
                     value={el.type}
                     onChange={onChangeItem}
                  />
               )
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
   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   justify-content: space-between;
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
