import React from 'react'
import { Link } from 'react-router-dom'
import { books } from './books'

export const BooksPage = () => {
   return (
      <div>
         <h1>Books</h1>
         <div className="item-container">
            {books.map((item) => (
               <Link key={item.id} to={`/books/${item.id}`}>
                  <div className="card">
                     <img src={item.images.mainImg} alt="" />
                     <h3>{item.name}</h3>
                     <p>{item.genre}</p>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   )
}
