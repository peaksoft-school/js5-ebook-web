import styled from 'styled-components'
import GenreItem from './GenreItem'

const arr = [
   {
      name: 'Образование',
      quantity: 1244,
   },
   {
      name: 'Художественная литература',
      quantity: 3453,
   },
   {
      name: 'Книги для детей',
      quantity: 3453,
   },
   {
      name: 'Наука и техника',
      quantity: 3453,
   },
   {
      name: 'Общество',
      quantity: 435,
   },
   {
      name: 'Деловая литература',
      quantity: 435,
   },
   {
      name: 'Красота. Здоровье. Спорт',
      quantity: 435,
   },
   {
      name: 'Увлечения',
      quantity: 435,
   },
   {
      name: 'Психология',
      quantity: 435,
   },
   {
      name: 'Образование',
      quantity: 1244,
   },
   {
      name: 'Художественная литература',
      quantity: 3453,
   },
   {
      name: 'Книги для детей',
      quantity: 3453,
   },
   {
      name: 'Наука и техника',
      quantity: 3453,
   },
   {
      name: 'Общество',
      quantity: 435,
   },
   {
      name: 'Деловая литература',
      quantity: 435,
   },
   {
      name: 'Красота. Здоровье. Спорт',
      quantity: 435,
   },
   {
      name: 'Увлечения',
      quantity: 435,
   },
   {
      name: 'Психология',
      quantity: 435,
   },
]

function GenreMenu() {
   return (
      <MenuContainer>
         <MenuUl>
            {arr.map((elem) => {
               const id = Math.random().toString()
               return (
                  <GenreItem
                     key={id}
                     name={elem.name}
                     quantity={elem.quantity}
                  />
               )
            })}
         </MenuUl>
         <MenuUl>
            {arr.map((elem) => {
               const id = Math.random().toString()
               return (
                  <GenreItem
                     key={id}
                     name={elem.name}
                     quantity={elem.quantity}
                  />
               )
            })}
         </MenuUl>
         <MenuUl>
            {arr.map((elem) => {
               const id = Math.random().toString()
               return (
                  <GenreItem
                     key={id}
                     name={elem.name}
                     quantity={elem.quantity}
                  />
               )
            })}
         </MenuUl>
      </MenuContainer>
   )
}

export default GenreMenu

const MenuUl = styled.ul`
   /* border: 1px solid red; */
   margin: 0;
   padding: 0;
   width: 327px;
   margin-right: 90px;
   &:last-child {
      margin-right: 0;
   }
`

const MenuContainer = styled.div`
   /* border: 1px solid red; */
   /* width: 922px; */
   padding: 30px 30px;
   background-color: #f8f8f8;
   display: flex;
   max-height: 436px;
   max-width: 1200px;
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
`
