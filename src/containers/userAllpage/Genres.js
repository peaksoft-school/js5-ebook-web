import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import CheckBox from '../../Components/UI/checkBox/CheckBox'
import SearchInput from '../../Components/UI/Inputs/SearchInput'
// import appFetch from '../../hooks/appFetch'
import { URL } from '../../utils/constants/constants'

const Genres = ({ onChange }) => {
   const [books, setBooks] = useState([])
   const [choiseGenres, setChoiseGenres] = useState({
      labels: [],
      ids: [],
   })
   useEffect(() => {
      onChange(choiseGenres)
   }, [choiseGenres])
   async function booksUser() {
      const userBooks = await fetch(`${URL}/api/genres`)
      const data = await userBooks.json()
      setBooks(data)
   }
   useEffect(() => {
      booksUser()
   }, [])
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
         <Genre>Жанры</Genre>
         <Line />
         <SearchInput placeholder=" Я ищу..." />
         <FormStyles>
            {books &&
               books.map((genres) => {
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
   height: 278px;
   width: 266px;
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
`
const Line = styled('div')`
   border-bottom: 1px solid gray;
   margin-bottom: 14px;
`
