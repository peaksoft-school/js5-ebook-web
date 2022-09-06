import React from 'react'
import styled from '@emotion/styled'

const TotalBooks = ({ totalBooks }) => {
   return <TotalBlock>Найдены {totalBooks} книг</TotalBlock>
}

export default TotalBooks

const TotalBlock = styled('div')`
   /* border: 1px solid red; */
   padding: 13px;
   padding-left: 0;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #969696;
`
