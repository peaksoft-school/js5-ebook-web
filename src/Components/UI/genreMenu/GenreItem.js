import styled from 'styled-components'

function GenreItem({ name, quantity, id }) {
   const clickHandler = (e) => {
      e.preventDefault()
   }
   return (
      <ItemBook>
         <ItemLink to={`/${id}`} onClick={clickHandler}>
            {name} <ItemQuantity>{quantity}</ItemQuantity>
         </ItemLink>
      </ItemBook>
   )
}

export default GenreItem

const ItemQuantity = styled.span`
   font-size: 14px;
   color: #a5a5a5;
`

const ItemLink = styled.a`
   font-family: 'Open Sans';
   font-size: 1rem;
   color: #222222;
   font-weight: 400;
   text-decoration: none;
   display: flex;
   justify-content: space-between;
   padding: 10px 20px;
   padding-left: 0;
   padding-right: 0;
   cursor: pointer;
   position: relative;
   &:hover {
      color: #ff4c00;
   }
   &:after {
   }
   &:hover > :after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      bottom: 7px;
      background-color: #ff4c00;
   }
`

const ItemBook = styled.li`
   list-style: none;
   width: 327px;
   margin-right: 40px;
   &:nth-child(3n) {
      margin-right: 0;
   }
`
