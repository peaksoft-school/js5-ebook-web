import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router'

import { ReactComponent as Application } from '../../assets/icons/sideDrower/State=Application, Fill-color=Default.svg'
import { ReactComponent as ApplicationOrange } from '../../assets/icons/sideDrower/State=Application, Fill-color=Fill-orange.svg'

import { ReactComponent as Books } from '../../assets/icons/sideDrower/State=Books, Fill-color=Default.svg'
import { ReactComponent as BooksOrange } from '../../assets/icons/sideDrower/State=Books, Fill-color=Fill-orange.svg'

import { ReactComponent as User } from '../../assets/icons/sideDrower/State=User, Fill-color=Default.svg'
import { ReactComponent as UserOrange } from '../../assets/icons/sideDrower/State=User, Fill-color=Fill-orange.svg'

import { ReactComponent as Vendor } from '../../assets/icons/sideDrower/State=Vendor, Fill-color=Default.svg'
import { ReactComponent as VendorOrange } from '../../assets/icons/sideDrower/State=Vendor, Fill-color=Fill-orange.svg'

const items = [
   {
      name: 'Заявки',
      icon: {
         0: <Application />,
         1: <ApplicationOrange />,
      },
      link: 'applications',
      navigate: 'applications',
   },
   {
      name: 'Продавцы',
      icon: {
         0: <Vendor />,
         1: <VendorOrange />,
      },

      link: 'request',
      navigate: 'vendors',
   },
   {
      name: 'Пользователи',
      icon: {
         0: <User />,
         1: <UserOrange />,
      },

      link: 'request',

      navigate: 'users',
   },
   {
      name: 'Книги',
      icon: {
         0: <Books />,
         1: <BooksOrange />,
      },

      link: 'books',
      navigate: 'books',
   },
]

function SideDrawerMenu() {
   const navigate = useNavigate()
   const location = useLocation()
   const onClickItem = (nav) => {
      navigate(`/${nav}`)
   }
   const layout = location.pathname.split('/')[1]
   return (
      <SideDrowerMenuContainer>
         <DrowerList>
            {items.map((elem) => {
               return (
                  <DrowerItem
                     key={elem.name}
                     onClick={() => onClickItem(elem.navigate)}
                     name={elem.name}
                     icon={elem.icon}
                     active={layout === elem.navigate}
                  />
               )
            })}
         </DrowerList>
      </SideDrowerMenuContainer>
   )
}
export default SideDrawerMenu

function DrowerItem({ name, icon, onClick, active }) {
   return (
      <DrowerItemBlock onClick={onClick} active={active}>
         <span>{name}</span>
         <span>{active ? icon[1] : icon[0]}</span>
      </DrowerItemBlock>
   )
}

const DrowerItemBlock = styled.li`
   /* border: 1px solid #000; */
   font-family: 'Open Sans';
   font-size: 1rem;
   font-weight: 400;
   text-align: left;
   line-height: 21.79px;
   padding: 20px 41px;
   cursor: pointer;
   transition: ease-in 0.2s;
   display: flex;
   align-items: center;
   background-color: ${(props) => (props.active ? '#fff' : 'rgba(0,0,0,0)')};
   color: ${(props) => (props.active ? '#f34901' : '#fff')};
   & > span:nth-child(2) {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      margin-right: 15px;
      order: -1;
   }
   /* &:hover {
      background-color: #fff;
      color: #f34901;
   } */
`

const DrowerList = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
`

const SideDrowerMenuContainer = styled.div`
   width: 100%;
   margin-top: 74px;
`
