import styled from 'styled-components'

function getText(text) {
   const arr = text.split('')
   const newArr = []
   if (arr.length > 30) {
      for (let i = 0; i < 30; i + 1) {
         newArr.push(arr[i])
      }
      return `${newArr.join('')}...`
   }
   return text
}

function GenreItem({ name, quantity, id, onSelect }) {
   const clickHandler = () => {
      onSelect(id)
   }
   return (
      <ItemBook onClick={clickHandler}>
         {getText(name)}
         <ItemQuantity>{quantity}</ItemQuantity>
      </ItemBook>
   )
}

export default GenreItem

const ItemQuantity = styled.span`
   font-size: 14px;
   color: #a5a5a5;
`

const ItemBook = styled.li`
   list-style: none;
   width: 327px;
   margin-right: 60px;
   flex-basis: auto;
   flex-grow: 0;
   flex-shrink: 0;
   flex-basis: auto;
   font-family: 'Open Sans';
   font-size: 1rem;
   color: #222222;
   font-weight: 400;
   text-decoration: none;
   display: flex;
   justify-content: space-between;
   padding: 10px 0px;
   cursor: pointer;
   position: relative;
   transition: ease-in 0.2s;
   &:after {
      content: '';
      position: absolute;
      top: 90%;
      left: 50%;
      width: 0;
      transform: translateX(-50%);
      height: 2px;
      background-color: #ff4c00;
      transition: ease-in 0.2s;
   }
   &:nth-child(3n) {
      margin-right: 0;
   }
   &:hover {
      color: #ff4c00;
   }
   &:hover:after {
      width: 100%;
   }
`
