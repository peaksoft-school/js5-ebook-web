import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { сatalogActions } from '../store/slices/catalogSlice'
import { BookType } from '../utils/constants/constants'

const itemBook = [
   {
      name: 'Электронные книги',
      type: BookType.ELECTRONIC_BOOK,
   },
   {
      name: 'Аудиокниги',
      type: BookType.AUDIO_BOOK,
   },
   {
      name: 'Бумажные книги',
      type: BookType.PAPER_BOOK,
   },
]

function Navbar() {
   const dispatch = useDispatch()
   const { externalSetting } = useSelector((store) => store.books)
   const navigate = useNavigate()
   const onClickItem = (type) => {
      dispatch(
         сatalogActions.setExternalSetting({ key: 'bookType', value: type })
      )
      navigate('main/catalog')
   }
   const items = itemBook.map((elem) => {
      return (
         <NavbarItem
            active={externalSetting.bookType === elem.type}
            key={elem.type}
            onClick={() => onClickItem(elem.type)}
         >
            {elem.name}
         </NavbarItem>
      )
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
   flex-grow: 1;
   /* border: 1px solid red; */
`

const NavbarItem = styled.li`
   /* border: 1px solid red; */
   padding: 10px 20px;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 14px;
   line-height: 18.2px;
   color: ${(props) => (props.active ? '#f34901' : '#222222')};
   cursor: pointer;
   position: relative;
   transition: ease-in 0.2s;
   &:after {
      content: '';
      position: absolute;
      top: 85%;
      left: 0;
      width: ${(props) => (props.active ? '100%' : '0%')};
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
