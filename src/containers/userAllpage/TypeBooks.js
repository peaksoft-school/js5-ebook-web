import React from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import RadioButton from '../../Components/UI/RadioButton'
import { BookType } from '../../utils/constants/constants'
import { ReactComponent as Icontriangle } from '../../assets/icons/catalog/iconSort.svg'
import { сatalogActions } from '../../store/slices/catalogSlice'

const TypeBooks = ({ onChange, sortMethods }) => {
   const dispatch = useDispatch()
   const [arr, setArr] = React.useState([
      {
         id: 'bookType',
         label: 'Бумажная книга',
         value: BookType.PAPER_BOOK,
         checked: false,
      },
      {
         id: 'bookType',
         label: 'Аудиокнига',
         value: BookType.AUDIO_BOOK,
         checked: false,
      },
      {
         id: 'bookType',
         label: 'Электронная книга',
         value: BookType.ELECTRONIC_BOOK,
         checked: false,
      },
   ])
   React.useEffect(() => {
      const findEl = arr.find((el) => el.checked === true)
      if (findEl) {
         onChange(findEl.id, findEl.value, {
            label: findEl.label,
            closeFunction: cleanRadio,
            type: findEl.id,
         })
      } else {
         onChange('bookType', null)
      }
   }, [arr])
   const cleanRadio = () => {
      setArr((prev) => {
         return prev.map((el) => {
            return {
               ...el,
               checked: false,
            }
         })
      })
      dispatch(сatalogActions.deleteExternal({ key: 'bookType' }))
   }
   const onChangeHandler = (value) => {
      setArr((prev) => {
         return prev.map((el) => {
            if (el.value === value) {
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
   React.useEffect(() => {
      sortMethods((prev) => {
         return { ...prev, typeBookMethod: onChangeHandler }
      })
   }, [])
   return (
      <TypeBlock>
         <Type>
            Тип <Icontriangle />
         </Type>
         <Line />
         <TypeStyles>
            {arr.map((el) => {
               return (
                  <RadioButton
                     key={el.label}
                     label={el.label}
                     id={el.id}
                     value={el.value}
                     isSelect={el.checked}
                     onChange={() => onChangeHandler(el.value)}
                  />
               )
            })}
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
