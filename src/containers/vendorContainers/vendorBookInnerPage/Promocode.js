import styled from '@emotion/styled'
import { useState } from 'react'
import Button from '../../../Components/UI/Button/Button'
import Modal from '../../../Components/UI/Modal'
import warningIcon from '../../../assets/icons/warning.svg'
import CreatePromocode from '../../vendorLayouts/Promocode/CreatePromocode'

const Promocode = () => {
   const [isOpenPromoModal, setIsOpenPromoModal] = useState(false)
   const handleOpenPromoModal = () => setIsOpenPromoModal(true)
   const handleClosePromoModal = () => setIsOpenPromoModal(false)
   return (
      <div>
         <StyledPromoBtnBlock>
            <Button
               onClick={handleOpenPromoModal}
               variant=""
               color="#f34901"
               border="1px solid"
               background="none"
               width="197px"
               height="42px"
               padding="10px 16px"
            >
               Создать промокод
            </Button>
            <Modal
               open={isOpenPromoModal}
               onClose={handleClosePromoModal}
               // variant=""
               // justifyContent="space-around"
               justifyContent="flex-start"

               // width="523px"
               // height="258px"
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
