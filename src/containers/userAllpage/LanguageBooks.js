import React from 'react'
import { styled } from '@mui/material'
// import CheckBox from '../../Components/UI/checkBox/CheckBox'
import { Languages } from '../../utils/constants/constants'
import RadioButton from '../../Components/UI/RadioButton'
import { ReactComponent as Icontriangle } from '../../assets/icons/catalog/iconSort.svg'

const languageBooks = [
   {
      id: 'languages',
      name: 'Кыргызский язык',
      type: Languages.KYRGYZ,
      checked: false,
   },
   {
      id: 'languages',
      name: 'Русский язык',
      type: Languages.RUSSIAN,
      checked: false,
   },
   {
      id: 'languages',
      name: 'Английский язык',
      type: Languages.ENGLISH,
      checked: false,
   },
]

const LanguageBooks = ({ onChange, sortMethods }) => {
   const [languages, setLenguages] = React.useState(languageBooks)
   React.useEffect(() => {
      const findEl = languages.find((el) => el.checked === true)
      if (findEl) {
         onChange(findEl.id, findEl.type, {
            label: findEl.name,
            closeFunction: cleanRadio,
            type: findEl.id,
         })
      } else {
         onChange('languages', null)
      }
   }, [languages])
   const cleanRadio = () => {
      setLenguages((prev) => {
         return prev.map((el) => {
            return {
               ...el,
               checked: false,
            }
         })
      })
   }
   const onChangeItem = (type) => {
      setLenguages((prev) => {
         return prev.map((el) => {
            if (el.type === type) {
               return {
                  ...el,
                  checked: true,
               }
            }
            return {
               ...el,
               checked: false,
            }
         })
      })
   }
   // console.log(onChangeItem)
   React.useEffect(() => {
      sortMethods((prev) => {
         return {
            ...prev,
            onChangeLanguages: onChangeItem,
         }
      })
   }, [])
   return (
      <TypeBlock>
         <Type>
            Язык издания <Icontriangle />
         </Type>
         <Line />
         <TypeStyles>
            {languages.map((el) => {
               return (
                  <RadioButton
                     key={el.type}
                     id={el.id}
                     label={el.name}
                     value={el.type}
                     onChange={() => onChangeItem(el.type)}
                     isSelect={el.checked}
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
