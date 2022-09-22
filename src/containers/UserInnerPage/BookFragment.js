import styled from '@emotion/styled'

const BookFragment = ({ book }) => {
   return <StyledText>{book?.fragment}</StyledText>
}

export default BookFragment

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
