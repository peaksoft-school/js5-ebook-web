import { useEffect, useState } from 'react'
import styled from 'styled-components'

import application from '../../../assets/icons/sideDrower/State=Application, Fill-color=Default.png'
import applicationOrange from '../../../assets/icons/sideDrower/State=Application, Fill-color=Fill-orange.png'

import books from '../../../assets/icons/sideDrower/State=Books, Fill-color=Default.png'
import booksOrange from '../../../assets/icons/sideDrower/State=Books, Fill-color=Fill-orange.png'

import user from '../../../assets/icons/sideDrower/State=User, Fill-color=Default.png'
import userOrange from '../../../assets/icons/sideDrower/State=User, Fill-color=Fill-orange.png'

import vendor from '../../../assets/icons/sideDrower/State=Vendor, Fill-color=Default.png'
import vendorOrange from '../../../assets/icons/sideDrower/State=Vendor, Fill-color=Fill-orange.png'

const arr = ['Заявки', 'Продавцы', 'Пользователи', 'Книги']

function SideDrowerMenu({ onClick, data }) {
   const [items, setItems] = useState(arr)
   useEffect(() => {
      if (data) {
         setItems(data)
      }
   }, data)
   return (
      <SideDrowerMenuContainer>
         <DrowerList>
            {items.map((elem) => {
               return (
                  <DrowerItem key={elem} onClick={onClick}>
                     {elem}
                  </DrowerItem>
               )
            })}
         </DrowerList>
      </SideDrowerMenuContainer>
   )
}
export default SideDrowerMenu

const DrowerItem = styled.li`
   /* border: 1px solid #000; */
   font-family: 'Open Sans';
   font-size: 1rem;
   font-weight: 600;
   color: #fff;
   text-align: left;
   line-height: 21.79px;
   padding: 20px 41px;
   cursor: pointer;
   padding-left: 74px;
   position: relative;
   transition: ease-in 0.2s;
   &:after {
      content: '';
      position: absolute;
      top: 20px;
      left: 43px;
      width: 18.67px;
      height: 18.67px;
      background-image: url(${application});
      background-position: -1% -4%;
      background-size: auto;
      background-repeat: no-repeat;
      /* border: 1px solid #000; */
   }
   &:nth-child(2)::after {
      background-image: url(${vendor});
   }
   &:nth-child(3)::after {
      background-image: url(${user});
   }
   &:nth-child(4)::after {
      background-image: url(${books});
   }
   &:hover {
      background-color: #fff;
      color: #f34901;
      &:nth-child(1):after {
         background-image: url(${applicationOrange});
      }
      &:nth-child(2)::after {
         background-image: url(${vendorOrange});
      }
      &:nth-child(3)::after {
         background-image: url(${userOrange});
      }
      &:nth-child(4)::after {
         background-image: url(${booksOrange});
      }
   }
`

const DrowerList = styled.ul`
   /* border: 1px solid red; */
   margin: 0;
   padding: 0;
   list-style: none;
`

const SideDrowerMenuContainer = styled.div`
   /* border: 1px solid red; */
   width: 100%;
`
