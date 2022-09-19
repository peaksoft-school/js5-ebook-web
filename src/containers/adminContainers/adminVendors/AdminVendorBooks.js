import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Divider from '@mui/material/Divider'
import { getAdminVendorBooks } from '../../../store/slices/getAdminVendorsSlice'
import SelectBooks from './SelectBooks'
import { FilterBooks } from '../../../utils/constants/constants'
import Button from '../../../Components/UI/Button/Button'
import Spinner from '../../../Components/UI/Spinner'
import VendorBookCard from './VendorBookCard'

const selectTitle = [
   {
      id: FilterBooks.ALL,
      name: 'Все',
   },
   {
      id: FilterBooks.FAVORITES,
      name: 'В избранном',
   },
   {
      id: FilterBooks.IN_THE_BASKET,
      name: 'В корзине',
   },
   {
      id: FilterBooks.SOLD_OUT,
      name: 'Проданы',
   },
   {
      id: FilterBooks.WITH_DISCOUNTS,
      name: 'Со скидками',
   },
   {
      id: FilterBooks.IN_THE_PROCESS,
      name: 'В обработке',
   },
   {
      id: FilterBooks.REJECTED,
      name: 'Отклоненные',
   },
]

const AdminVendorBooks = () => {
   const { books, totalElements, totalPages, status } = useSelector(
      (state) => state.adminVendors.vendorBooks
   )
   const { vendorId } = useParams()
   const dispatch = useDispatch()
   const [requestObj, setRequestObj] = useState({
      aboutBooks: 'ALL',
      page: 1,
      size: 16,
   })

   const [isShowSpinner, setIsShowSpinner] = useState()
   const [showSeeMore, setShowSeeMore] = useState(false)

   useEffect(() => {
      if (status === 'pending') {
         setIsShowSpinner(true)
      } else {
         setIsShowSpinner(false)
      }
   }, [status])

   useEffect(() => {
      if (totalPages) {
         if (totalPages === 0 || requestObj.page === totalPages) {
            setShowSeeMore(false)
         }
         if (requestObj.page < totalPages) {
            setShowSeeMore(true)
         }
      }
   }, [requestObj.page])

   useEffect(() => {
      dispatch(getAdminVendorBooks(vendorId, requestObj))
   }, [requestObj])

   const onClickSelect = (id, key) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            [key]: id,
         }
      })
   }

   const onClickSeeMore = () => {
      setRequestObj((prev) => {
         return {
            ...prev,
            page: prev.page + 1,
         }
      })
   }

   return (
      <div>
         {isShowSpinner && <Spinner />}
         <StyledSelectBlock>
            <StyledAmount>Всего {totalElements} книг</StyledAmount>
            <div>
               <SelectBooks
                  onClick={onClickSelect}
                  genres={selectTitle}
                  variant
               />
            </div>
         </StyledSelectBlock>
         <Divider />
         <VendorBookCard books={books} />
         {showSeeMore && (
            <StyledBtnBlock>
               <Button
                  variant="universal"
                  background="#F8F8F8"
                  color="#969696"
                  border="1px solid #C4C4C4"
                  onClick={onClickSeeMore}
               >
                  Смотреть больше
               </Button>
            </StyledBtnBlock>
         )}
      </div>
   )
}

export default AdminVendorBooks

const StyledSelectBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const StyledAmount = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #969696;
`
// const StyledMealls = styled(Meatballs)`
//    align-self: flex-end;
// `
const StyledBtnBlock = styled.div`
   width: 100%;
   padding: 50px 0;
`
