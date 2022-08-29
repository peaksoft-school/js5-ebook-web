// import { useParams } from 'react-router'
// import { books } from './books'

import { StyledText } from './AboutBook'

const BookFragment = ({ fragment }) => {
   // const params = useParams()
   // const selectedItem = books.find((item) => item.id === params.bookId)
   return (
      <StyledText>
         {/* {selectedItem.audioValues.audioFragment !== '' ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio controls src={selectedItem.audioValues.audioFragment} />
         ) : ( */}
         {fragment}
         {/* )} */}
      </StyledText>
   )
}

export default BookFragment
