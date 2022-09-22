import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../Components/UI/Button/Button'
import Modal from '../../../Components/UI/Modal'
import warningIcon from '../../../assets/icons/warning.svg'
import CreatePromocode from '../../vendorLayouts/Promocode/CreatePromocode'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
import { promocodeActions } from '../../../store/slices/promocodeSlices'

const Promocode = () => {
   const {
      promocode: success,
      error: errorPromo,
      snackbar,
   } = useSelector((store) => store.promocodeStore)
   const dispatch = useDispatch()
   const [isOpenPromoModal, setIsOpenPromoModal] = useState(false)
   const handleOpenPromoModal = () => setIsOpenPromoModal(true)
   const handleClosePromoModal = () => setIsOpenPromoModal(false)
   useEffect(() => {
      setIsOpenPromoModal(false)
   }, [Boolean(success)])

   const handleClose = () => {
      dispatch(promocodeActions.clean())
   }

   return (
      <div>
         <StyledPromoBtnBlock>
            <GetSnackbar
               open={snackbar || Boolean(success) || Boolean(errorPromo)}
               message={
                  success || errorPromo || (snackbar && 'Заполняйте поля!')
               }
               variant={
                  (success && 'success') ||
                  (errorPromo && 'error') ||
                  (snackbar && 'error')
               }
               width="400px"
               handleClose={handleClose}
            />
            <Button
               onClick={handleOpenPromoModal}
               variant=""
               color="#f34901"
               border="1px solid"
               background="none"
               width="197px"
               height="42px"
               padding="10px 16px"
               colorhover="white"
            >
               Создать промокод
            </Button>
            <Modal
               open={isOpenPromoModal}
               onClose={handleClosePromoModal}
               justifyContent="flex-start"
            >
               <CreatePromocode />
            </Modal>
            <img src={warningIcon} alt="icon" />
         </StyledPromoBtnBlock>
      </div>
   )
}

export default Promocode

const StyledPromoBtnBlock = styled.div`
   width: 230px;
   height: 42px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
