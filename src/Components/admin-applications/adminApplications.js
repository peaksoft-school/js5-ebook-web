// import MeatBalls from '../admin-applications/AdminApplications'
import { ReactComponent as Book } from '../../assets/images/book.svg'

import ApplicationItems from './ApplicationItems'
import { styled } from '@mui/material'
import { useState } from 'react'
import Button from '../UI/Button/Button'

const array = [
   {
      id: '1',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '2',
      name: 'ДЕТСКАЯ ЛИТЕРАТУРА',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '3',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '4',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '5',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '6',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '7',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '8',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '9',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '10',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '11',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '12',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '13',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '14',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '15',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
   {
      id: '16',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: <Book />,
   },
]
const seeMore = 8

const AdminApplications = () => {
   const [books, setBooks] = useState(seeMore)
   const moreBooks = () => {
      setBooks(books + seeMore)
   }
 
   return (
      <Application>
            <Total>Всего:{array.length}</Total>
            {/* <p>Непросмотренные:</p> */}
         <Books>
            {array.slice(0, books).map((el) => (
               <ApplicationItems
                  key={el.id}
                  id={el.id}
                  img={el.img}
                  date={el.date}
                  name={el.name}
                  price={el.price}
                  altogether={el.altogether}
                  total={el.total}
               />
            ))}
            {books < array.length && (
               <SeeMore  onClick={moreBooks}>Смотреть больше</SeeMore>
            )}
         </Books>
      </Application>
   )
}

export default AdminApplications
const Application=styled("div")`
display: flex;
flex-direction: column;

`
const Books = styled('div')`
   padding: 20px;
   display: flex;
   justify-content: space-between;
   width: 1130px;
   flex-wrap: wrap;
`
const Total = styled('p')`
   font-size: 16px;
   font-family: 'Open Sans';
   font-weight: 400;
   color: #b5b5b5; 
   margin-left: 20px;
   margin-bottom: -20px;
`
const SeeMore = styled(Button)`
   border: 1px solid #c4c4c4;
   background: #f8f8f8;
   width: 1130px;
   text-align: center;
   padding: 10px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   margin-top: 80px;
   color: gray;
`

