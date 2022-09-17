import { styled } from '@mui/material'

const BookFragment = ({ fragment }) => {
   return <FragmentStyle>{fragment} </FragmentStyle>
}

export default BookFragment
const FragmentStyle = styled('p')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   margin-left: 15px;
`
