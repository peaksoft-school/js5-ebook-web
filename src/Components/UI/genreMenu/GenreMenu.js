import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import GenreItem from './GenreItem'
import { сatalogActions } from '../../../store/slices/catalogSlice'

function GenreMenu({ data, onCloseGenre }) {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const onSelect = (id, label) => {
      dispatch(
         сatalogActions.setExternalSetting({
            key: 'genres',
            value: {
               id,
               label,
            },
         })
      )
      navigate(`main/catalog`)
      onCloseGenre()
   }
   return (
      <MenuContainer>
         <MenuUl>
            {data &&
               data.map((elem) => {
                  return (
                     <GenreItem
                        key={elem.id}
                        name={elem.name}
                        quantity={elem.quantityOfBook}
                        id={elem.id}
                        onSelect={() => onSelect(elem.id, elem.name)}
                     />
                  )
               })}
         </MenuUl>
      </MenuContainer>
   )
}

export default GenreMenu

const MenuUl = styled.ul`
   margin: 0;
   padding: 0;
   padding-right: 30px;
   max-height: 445px;
   display: flex;
   flex-flow: row wrap;
   justify-content: flex-start;
   width: 1150px;
   overflow-y: auto;
   scroll-snap-type: x proximity;
   ::-webkit-scrollbar {
      width: 5px;
   }
   /* Track */
   ::-webkit-scrollbar-track {
      background: #f1f1f1;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
   }
   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
   &:last-child {
      margin-right: 0;
   }
`

const MenuContainer = styled.div`
   padding: 25px 35px;
   background-color: #f8f8f8;
   /* position: absolute; */
   box-sizing: border-box;
   /* top: 36px; */
   /* left: 0px; */
   /* z-index: 10; */
   transition: ease-in-out 1.2s;
   width: auto;
   display: inline-block;
`
