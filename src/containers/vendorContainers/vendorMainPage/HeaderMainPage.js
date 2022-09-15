import React from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import Button from '../../../Components/UI/Button/Button'
import Promocode from '../vendorBookInnerPage/Promocode'
import plusIcon from '../../../assets/icons/plus.svg'
import vendorMainPageAction from '../../../store/slices/vendorMainPageSlice'
import bookAction from '../../../store/slices/addBookSlice'

export default function HeaderMainPage() {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const addBookNavHandler = () => {
      dispatch(vendorMainPageAction.clearSaveBook())
      dispatch(bookAction.deleteImage())
      navigate('/main/addBook')
   }
   return (
      <Container>
         <Promocode />
         <Button
            width="210px"
            height="42px"
            padding="10px 24px"
            onClick={addBookNavHandler}
         >
            <img src={plusIcon} alt="icon" />
            Добавить книгу
         </Button>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin: 20px 0px 50px 0px;
`
