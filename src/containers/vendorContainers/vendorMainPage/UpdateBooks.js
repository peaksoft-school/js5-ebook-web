import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Meatballs from '../../../Components/UI/MeatBalls/MeatBalls'
import {
   getMainBooksDelete,
   getMainBooksWithId,
} from '../../../store/createActions/vendorMainPagesActions'

const option = [
   {
      title: 'Редактировать',
      id: 1,
   },
   {
      title: 'Удалить',
      id: 2,
   },
]

export default function UpdateBooks({ id }) {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const deleteBook = (data) => {
      if (data.id === 1) {
         dispatch(getMainBooksWithId(id))
         setTimeout(() => {
            navigate('/addbook')
         }, 1000)
      }
      if (data.id === 2) {
         dispatch(getMainBooksDelete(id))
      }
   }
   return <Meatballs height="106px" onClick={deleteBook} options={option} />
}
