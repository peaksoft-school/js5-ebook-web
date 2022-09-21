import { styled } from '@mui/material'
import React from 'react'

export default function NotFound() {
   return (
      <Wrapper>
         <h1>YOU DO NOT HAVE BOOKS OR NOT</h1>
         <h1>FAOUND PAGE</h1>
         <NotFaundImg src="https://media2.giphy.com/media/3vokLgjCxZ0iQOWoK2/giphy.gif?cid=6c09b952b6136e416617c65e9b8229f0ba03508d35fa719f&rid=giphy.gif&ct=g" />
      </Wrapper>
   )
}

const Wrapper = styled('div')`
   text-align: center;
`
const NotFaundImg = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
