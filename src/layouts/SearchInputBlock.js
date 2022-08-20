import { useRef } from 'react'
import SearchInput from '../Components/UI/Inputs/SearchInput'

function SearchInputBlock({ admin }) {
   const searchRef = useRef()
   const onChangeSearchInput = () => {
      // GET
   }
   return (
      <SearchInput
         ref={searchRef}
         onChange={onChangeSearchInput}
         placeholder="Искать жанр, книги, авторов, издательства..."
         backgroundColor={admin && '#fff'}
      />
   )
}

export default SearchInputBlock
