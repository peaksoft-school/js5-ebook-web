import { styled } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckBox from '../../Components/UI/checkBox/CheckBox'
import SearchInput from '../../Components/UI/Inputs/SearchInput'
import { ReactComponent as Icontriangle } from '../../assets/icons/catalog/iconSort.svg'
import { updateSortGenres } from '../../store/slices/globalSlices'

const Genres = ({ onChange, sortMethods }) => {
   const { genres, sortGenres } = useSelector((store) => store.globalValues)
   const [choiseGenres, setChoiseGenres] = useState({
      labels: [],
      ids: [],
   })
   const [one, setOne] = useState(true)
   const inputSearchRef = useRef()
   const dispatch = useDispatch()
   useEffect(() => {
      if (one) {
         setOne(false)
         return
      }
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
                     type: 'genre',
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
   const onChangeSearchInput = () => {
      dispatch(updateSortGenres(inputSearchRef.current.value))
   }
   return (
      <>
         <Genre>
            Жанры <Icontriangle />
         </Genre>
         <Line />
         <SearchInput
            placeholder=" Я ищу..."
            onChange={onChangeSearchInput}
            ref={inputSearchRef}
         />
         <FormStyles>
            {sortGenres.length !== 0
               ? sortGenres.map((genres) => (
                    <CheckBox
                       key={genres.id}
                       label={genres.name}
                       id={genres.id}
                       onChange={onChangeCheckBox}
                    />
                 ))
               : genres &&
                 genres.map((genres, index) => (
                    <CheckBox
                       key={genres.id}
                       label={genres.name}
                       id={genres.id}
                       onChange={onChangeCheckBox}
                       index={index}
                       sortMethods={sortMethods}
                    />
                 ))}
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
