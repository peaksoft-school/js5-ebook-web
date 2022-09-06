import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Button from '../../../Components/UI/Button/Button'
import Meatballs from '../../../Components/UI/MeatBalls/MeatBalls'
import { snackbarActions } from '../../../store/createActions/snackbarActions'
import { getMainBooksDelete } from '../../../store/createActions/vendorMainPagesActions'

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
         navigate('/addbook')
      }
      if (data.id === 2) {
         dispatch(getMainBooksDelete(id))
      }
   }
   const clickHand = () => {
      dispatch(snackbarActions())
   }
   return (
      <DivMeatballs>
         <Button onClick={clickHand}>TEST</Button>
         <Meatballs height="96px" onClick={clickHandle} options={option} />
      </DivMeatballs>
   )
}

const DivMeatballs = styled('div')``
