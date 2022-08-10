import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { books } from './books'

export const BooksPage = () => {
   const navigate = useNavigate()
   const userinnerPage = (id) => {
      navigate(`/home/${id}`)
   }
   return (
      <div>
         <h1>Books</h1>
         <div className="item-container">
            {books.map((item) => (
               // <Link  to={`/book-detail/${item.id}`}>
               <Test
                  className="card"
                  key={item.id}
                  onClick={() => userinnerPage(item.id)}
               >
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.genre}</p>
               </Test>
               // </Link>
            ))}
         </div>
      </div>
   )
}
const Test = styled('div')``
