import { useParams } from 'react-router'
import { books } from './books'

const BookFragment = () => {
   const params = useParams()
   const selectedItem = books.find((item) => item.id === params.bookId)
   return (
      <div>
         {/* {selectedItem.audioValues.audioFragment !== '' ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio controls src={selectedItem.audioValues.audioFragment} />
         ) : ( */}
         {selectedItem.fragment}
         {/* )} */}
      </div>
   )
}

export default BookFragment
