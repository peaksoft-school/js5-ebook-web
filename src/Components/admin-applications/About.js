import styled from '@emotion/styled'
import { useParams } from 'react-router'
import { books } from '../../utils/constants/books'

const About = () => {
   const params = useParams()
   const selectedItem = books.find((item) => item.id === params.id)
   return <StyledText>{selectedItem.description}</StyledText>
}

export default About

const StyledText = styled.div`
   width: 508px;
   height: 240px;
   margin-bottom: 200px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 150%;
   color: #222222;
`
