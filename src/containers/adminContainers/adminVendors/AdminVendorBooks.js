import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Divider from '@mui/material/Divider'

import {
   getAdminVendorBooks,
   setAdminVendorBooks,
} from '../../../store/slices/getAdminVendorsSlice'
import SelectBooks from './SelectBooks'

import { FilterBooks } from '../../../utils/constants/constants'
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
      id: FilterBooks.IN_PROCESSING,
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
      }
      const time = setTimeout(() => {
         setIsShowSpinner(false)
      }, 3000)
      return () => {
         clearTimeout(time)
      }
   }, [status])

   useEffect(() => {
      if (totalPages) {
         if (
            Number(totalPages) === 0 ||
            Number(requestObj.page) === Number(totalPages)
         ) {
            setShowSeeMore(false)
         }
         if (Number(requestObj.page) < Number(totalPages)) {
            setShowSeeMore(true)
         }
      }
   }, [requestObj.page, totalPages])

   useEffect(() => {
      dispatch(setAdminVendorBooks(vendorId, requestObj))
   }, [requestObj.aboutBooks])

   useEffect(() => {
      dispatch(getAdminVendorBooks(vendorId, requestObj))
   }, [requestObj.page])

   const onClickSelect = (id, key) => {
      setRequestObj((prev) => {
         return {
            ...prev,
            [key]: id,
            page: '1',
         }
      })
   }

   const onClickSeeMore = () => {
      setRequestObj((prev) => {
         return {
            ...prev,
            page: Number(prev.page) + 1,
         }
      })
   }

   return (
      <div>
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
         {isShowSpinner ? (
            <Spinner variant="two" />
         ) : (
            <VendorBookCard
               books={books}
               showSeeMore={showSeeMore}
               onClickSeeMore={onClickSeeMore}
            />
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
