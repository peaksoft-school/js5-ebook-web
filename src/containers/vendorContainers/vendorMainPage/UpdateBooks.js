import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { styled } from '@mui/material'
import { ReactComponent as Edite } from '../../../assets/icons/mainEdite/Edite.svg'
import { ReactComponent as Delete } from '../../../assets/icons/mainEdite/Delete.svg'
import {
   getMainBooksDelete,
   getMainBooksWithId,
} from '../../../store/createActions/vendorMainPagesActions'

import PopUpMeatBalls from '../../../Components/UI/MeatBalls/PopupMeatBalls'

export default function UpdateBooks({ id }) {
   const option = [
      {
         text: 'Редактировать',
         id: 1,
         icon: <Delete />,
         onClick: (id) => editeBook(id),
      },
      {
         text: 'Удалить',
         id: 2,
         icon: <Edite />,
         onClick: (id) => deleteBook(id),
      },
   ]
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const editeBook = () => {
      if (id) {
         dispatch(getMainBooksWithId(id))
         setTimeout(() => {
            navigate('/addbook')
         }, 1000)
      }
   }
   const deleteBook = () => {
      dispatch(getMainBooksDelete(id))
   }

   return (
      <MeatbalsDiv>
         <PopUpMeatBalls options={option} prop="prop" />
      </MeatbalsDiv>
   )
}
const MeatbalsDiv = styled('div')``
