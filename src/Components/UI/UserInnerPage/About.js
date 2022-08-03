import styled from '@emotion/styled'
import { books } from './books'
import { useParams } from 'react-router'

const About = () => {
  const params = useParams()
   const selectedItem = books.find((item) => item.id === params.bookId)
   return (
      <StyledText>
         {selectedItem.description}
      </StyledText>
   )
}

export default About

const StyledText = styled.div`
width: 676px;
height: 240px;
margin-bottom: 200px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #222222;
`