// import MeatBalls from '../admin-applications/AdminApplications'

import ApplicationCard from '../Components/admin-applications/ApplicationCard'
import { styled } from '@mui/material'
import { useState } from 'react'
import Button from '../Components/UI/Button/Button'


const seeMore = 8

const AdminApplications = () => {
   const [books, setBooks] = useState(seeMore)
   // const [booksArray, setBooksArray] = useState(array)

   const [noSeeArr, setNoSeeArr] = useState(array)

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
            {array.slice(0, books).map((el) => (
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
   margin-left: -20px;
`
const MinusView = styled('span')`
   color: #ff4c00;
`
const Books = styled('div')`
   padding-top: 22px;
   display: flex;
   justify-content: space-between;
   width: 954px;
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
   width: 100%;
   text-align: center;
   padding: 10px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   margin-top: 80px;
   color: gray;
`
