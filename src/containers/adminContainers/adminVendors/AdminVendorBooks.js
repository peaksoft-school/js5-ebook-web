import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Divider from '@mui/material/Divider'
import { getAdminVendorBooks } from '../../../store/slices/getAdminVendorsSlice'
import bookLikeIcon from '../../../assets/icons/bookLike.svg'
import Meatballs from '../../../Components/UI/MeatBalls/MeatBalls'
import SelectBooks from '../Admin/SelectBooks'
import { FilterBooks } from '../../../utils/constants/constants'
import Button from '../../../Components/UI/Button/Button'
import Spinner from '../../../Components/UI/Spinner'

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
               <SelectBooks onClick={onClickSelect} genres={selectTitle} />
            </div>
         </StyledSelectBlock>
         <Divider />
         <StyledBookSBlock>
            {books &&
               books.map((item) => {
                  return (
                     <StyledWrap key={item.id}>
                        <StyledHeader>
                           <img src={bookLikeIcon} alt="icon" />
                           <StyledText>({item.favorite})</StyledText>
                           <StyledText>В корзине ({item.basket})</StyledText>
                           <StyledMealls />
                        </StyledHeader>
                        <StyledImageBlock>
                           <StyledImage src={item.mainImage} alt="book" />
                        </StyledImageBlock>
                        <StyledBookName>{item.name}</StyledBookName>
                        <StyledBookInfo>
                           <StyledText>{item.dateOfRegistration}</StyledText>
                           <StyledPrice>{item.price} c</StyledPrice>
                        </StyledBookInfo>
                     </StyledWrap>
                  )
               })}
         </StyledBookSBlock>
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

const StyledBookSBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`
const StyledAmount = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #969696;
`
const StyledWrap = styled.div`
   width: 208px;
   background: #efefef;
   padding: 14px 34px;
   margin: 30px 0;
`
const StyledHeader = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const StyledText = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   color: #8a8a8a;
`
const StyledPrice = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
   color: #ff4c00;
`
const StyledImageBlock = styled.div`
   height: 250px;
   padding: 14px 0 13px 0;
`
const StyledImage = styled.img`
   width: 100%;
   object-fit: contain;
`
const StyledBookInfo = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
`
const StyledBookName = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 120%;
   text-transform: uppercase;
   color: #222222;
`
const StyledMealls = styled(Meatballs)`
   align-self: flex-end;
`
const StyledBtnBlock = styled.div`
   width: 100%;
   padding: 50px 0;
`
