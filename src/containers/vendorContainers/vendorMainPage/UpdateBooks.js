import { styled } from '@mui/material'
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
      onClick: () => {},
   },
   {
      title: 'Удалить',
      id: 2,
      onClick: () => {},
   },
]

export default function UpdateBooks({ id }) {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const clickHandle = (data) => {
      if (data.id === 1) {
         dispatch(getMainBooksWithId(id))
         navigate('/addbook')
      }
      if (data.id === 2) {
         dispatch(getMainBooksDelete(id))
      }
   }
   return (
      <DivMeatballs onClick={(e) => e.stopPropagation(e)}>
         <Meatballs height="96px" onClick={clickHandle} options={option} />
      </DivMeatballs>
   )
}

const DivMeatballs = styled('div')``
