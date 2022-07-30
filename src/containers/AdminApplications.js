// import MeatBalls from '../admin-applications/AdminApplications'


import ApplicationCard from '../Components/admin-applications/ApplicationCard'
import { styled } from '@mui/material'
import {  useState } from 'react'
import Button from '../Components/UI/Button/Button'

const array = [
   {
      id: '1',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '2',
      name: 'ДЕТСКАЯ ЛИТЕРАТУРА',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '3',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '4',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '5',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '6',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '7',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: 'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '8',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '9',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '10',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '11',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '12',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '13',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '14',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img: 'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '15',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
   {
      id: '16',
      name: 'ИСТОРИЯ КНИГИ',
      date: '20 февраль 2021',
      price: '230c',
      img:  'https://www.moscowbooks.ru/image/book/539/w259/i539650.jpg?cu=20180101000000',
   },
]
const seeMore = 8

const AdminApplications = () => {
   const [books, setBooks] = useState(seeMore)
   const [booksArray, setBooksArray] = useState(array)

  
   const [noSeeArr, setNoSeeArr] = useState(booksArray)

   const moreBooks = () => {
      setBooks(books + seeMore)
   }

   const minusView = (id) => {
      setNoSeeArr((prev) => {
         return prev.filter((elem) => elem.id !== id)
      })
   }

   return (
      <Application>
         <TotalApplication>
            <Total>Всего:{array.length}</Total>
            <Total>
               Непросмотренные: <MinusView>{noSeeArr.length}</MinusView>
            </Total>
         </TotalApplication>
         <Books>
            {booksArray.slice(0, books).map((el) => (
               <ApplicationCard
                  key={el.id}
                  id={el.id}
                  img={el.img}
                  date={el.date}
                  total={el.total}
                  name={el.name}
                  price={el.price}
                  minusView={minusView}
               />
            ))}
            {books < array.length && (
               <SeeMore onClick={moreBooks}>Смотреть больше</SeeMore>
            )}
         </Books>
      </Application>
   )
}

export default AdminApplications
const Application = styled('div')`
   display: flex;
   flex-direction: column;
`
const TotalApplication = styled('div')`
   display: flex;
`
const MinusView = styled('span')`
   color: #ff4c00;
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