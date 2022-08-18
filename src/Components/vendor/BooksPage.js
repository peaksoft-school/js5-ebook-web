import React from 'react'
import { Link } from 'react-router-dom'
import { books } from './books'
import '../../App.css'

export const BooksPage = () => {
   return (
      <div>
         <h1>Books</h1>
         <div className="item-container">
            {books.map((item) => (
               <Link key={item.id} to={`/vendor/books/${item.id}`}>
                  <div className="card">
                     <img src={item.images.mainImg} alt="" className="img" />
                     <h3>{item.name}</h3>
                     <p>{item.genre}</p>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   )
}
