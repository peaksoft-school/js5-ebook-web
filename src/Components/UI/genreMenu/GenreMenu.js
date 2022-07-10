import styled from 'styled-components'
import GenreItem from './GenreItem'

function GenreMenu({ data }) {
   return (
      <MenuContainer>
         <MenuUl>
            {data.map((elem) => {
               const id = Math.random().toString()
               return (
                  <GenreItem
                     key={id}
                     name={elem.name}
                     quantity={elem.quantity}
                     id={id}
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
   max-height: 436px;
   max-width: 1070px;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: flex-start;
   align-content: flex-start;
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
   padding: 30px 30px;
   background-color: #f8f8f8;
   position: absolute;
`
