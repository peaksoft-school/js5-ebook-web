import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CheckBox from '../../Components/UI/checkBox/CheckBox'
import SearchInput from '../../Components/UI/Inputs/SearchInput'
import { ReactComponent as Icontriangle } from '../../assets/icons/catalog/iconSort.svg'

const Genres = ({ onChange }) => {
   const { genres } = useSelector((store) => store.globalValues)
   const [choiseGenres, setChoiseGenres] = useState({
      labels: [],
      ids: [],
   })
   useEffect(() => {
      onChange(choiseGenres)
   }, [choiseGenres])
   const onChangeCheckBox = (id, checked, label, setCheckedFunc) => {
      setChoiseGenres((prev) => {
         if (checked) {
            return {
               ...prev,
               labels: [
                  ...prev.labels,
                  {
                     label,
                     setCheckedFunc,
                     id,
                  },
               ],
               ids: [...prev.ids, id],
            }
         }
         return {
            ...prev,
            labels: prev.labels.filter((el) => el.label !== label),
            ids: prev.ids.filter((el) => el !== id),
         }
      })
   }
   return (
      <>
         <Genre>
            Жанры <Icontriangle />
         </Genre>
         <Line />
         <SearchInput placeholder=" Я ищу..." />
         <FormStyles>
            {genres &&
               genres.map((genres) => {
                  return (
                     <CheckBox
                        key={genres.id}
                        label={genres.name}
                        id={genres.id}
                        onChange={onChangeCheckBox}
                     />
                  )
               })}
         </FormStyles>
      </>
   )
}

export default Genres

const FormStyles = styled('div')`
   /* border: 1px solid red; */
   height: 278px;
   margin-top: 19px;
   overflow-y: scroll;
   ::-webkit-scrollbar {
      width: 7px;
   }

   ::-webkit-scrollbar-thumb {
      background: gray;
      border-radius: 10px;
   }
`
const Genre = styled('h1')`
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
   margin-bottom: 10px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
   align-items: center;
`
const Line = styled('div')`
   border-bottom: 1px solid gray;
   margin-bottom: 14px;
`
