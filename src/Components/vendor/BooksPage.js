import React from 'react'
import { books } from './books'
import { Link } from 'react-router-dom'

export const BooksPage = () => {
  return (
    <div>
      <h1>Books</h1>
      <div className='item-container'>
        {books.map((item) => (
          <Link key={item.id} to={`/book-detail/${item.id}`}>
          <div className='card' >
            <img src={item.image} alt='' />
            <h3>{item.name}</h3>
            <p>{item.genre}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
