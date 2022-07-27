import styled from 'styled-components'

const itemBook = [
   {
      name: 'Электронные книги',
      id: 1,
   },
   {
      name: 'Аудиокниги',
      id: 2,
   },
   {
      name: 'Начать продавать на eBooK',
      id: 3,
   },
]

function Navbar({ onClick }) {
   const items = itemBook.map((elem) => {
      return <NavbarItem key={elem.id} onClick={onClick}>{elem.name}</NavbarItem>
   })
   return <NavbarList>{items}</NavbarList>
}

export default Navbar

const NavbarList = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`

const NavbarItem = styled.li`
   /* border: 1px solid red; */
   padding: 10px 20px;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 14px;
   line-height: 18.2px;
   color: #222222;
   cursor: pointer;
   position: relative;
   transition: ease-in 0.2s;
   &:active {
      transform: scale(1.1);
   }
   &:after {
      content: '';
      position: absolute;
      top: 85%;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: #f34901;
      transition: ease-in 0.2s;
   }
   &:hover {
      color: #f34901;
   }
   &:hover:after {
      width: 100%;
   }
`
