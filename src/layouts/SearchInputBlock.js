import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import SearchInput from '../Components/UI/Inputs/SearchInput'
import { getGlobalSearch } from '../store/slices/globalSlices'
import { сatalogActions } from '../store/slices/catalogSlice'

// const books = [{ id: 1, name: 'Hello world' }]

function SearchInputBlock({ admin }) {
   const { globalSearch } = useSelector((store) => store.globalValues)
   const { role } = useSelector((store) => store.auth.user)
   const searchRef = useRef()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const onChangeSearchInput = () => {
      dispatch(getGlobalSearch(searchRef.current.value))
   }
   const onClickItem = (id, name, type) => {
      if (role === 'USER') {
         if (type === 'BOOK') {
            navigate(`main/catalog/${id}`)
         }
         if (type === 'GENRE') {
            dispatch(
               сatalogActions.setExternalSetting({
                  key: 'genres',
                  value: { id, label: name },
               })
            )
            navigate('main/catalog')
         }
      }
      dispatch(getGlobalSearch(''))
   }
   return (
      <SearchInput
         ref={searchRef}
         onChange={onChangeSearchInput}
         placeholder="Искать жанр, книги, авторов, издательства..."
         backgroundColor={admin && '#fff'}
         books={globalSearch}
         ItemOnClick={onClickItem}
      />
   )
}

export default SearchInputBlock
