import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import CheckBox from '../../Components/UI/checkBox/CheckBox'
import { URL } from '../../utils/constants/constants'
import SearchInput from '../../Components/UI/Inputs/SearchInput'

const Genres = () => {
   const [books, setBooks] = useState([])
   async function booksUser() {
      const response = await fetch(`${URL}/api/genres`)
      const userBooks = await response.json()
      setBooks(userBooks)
   }
   useEffect(() => {
      booksUser()
   }, [])
   // const checkBoxHandler = (id) => {
   //    console.log(id)
   // }

   return (
      <>
         <Genre>Жанры</Genre>
         <Line />
         <SearchInput placeholder=" Я ищу..." />
         <FormStyles>
            {books.map((genres) => {
               return (
                  <CheckBox
                     // checkBoxHandler={checkBoxHandler}
                     key={genres.id}
                     // id={genres.id}
                     label={genres.name}
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
