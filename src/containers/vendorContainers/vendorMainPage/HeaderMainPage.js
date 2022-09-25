import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { styled } from '@mui/material'
import Button from '../../../Components/UI/Button/Button'
import Promocode from '../vendorBookInnerPage/Promocode'
import plusIcon from '../../../assets/icons/plus.svg'
import snackbarAction from '../../../store/slices/snackbarSlice'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
import { emptyActions } from '../../../store/createActions/snackbarActions'

export default function HeaderMainPage() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { snackbarMessage, snackbarStatus } = useSelector(
      (store) => store.snackbar
   )

   const addBookNavHandler = () => {
      navigate('/main/addBook')
      dispatch(emptyActions())
   }
   const deleteSnackbar = () => {
      dispatch(snackbarAction.notSnackbar())
   }

   return (
      <>
         <GetSnackbar
            open={snackbarMessage}
            message={snackbarMessage}
            variant={
               (snackbarStatus === 'error' && 'error') ||
               (snackbarStatus === 'success' && 'success')
            }
            width="400px"
            handleClose={deleteSnackbar}
         />
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
      </>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin: 20px 0px 50px 0px;
`
