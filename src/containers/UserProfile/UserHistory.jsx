import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../Components/UI/Button/Button'
import { getUserOperationHistory } from '../../store/slices/userProfileSlice'

const card = 3
export const UserHistory = () => {
   const dispatch = useDispatch()
   const { id: userId } = useSelector((store) => store.auth.user)
   const { userHistory, totalElements } = useSelector(
      (store) => store.userProfile
   )
   const [nextCart, setNextCart] = useState(card)
   const nextCarthandle = () => {
      setNextCart(card + nextCart)
   }
   const onCloseHandler = () => {
      setNextCart(card)
   }
   useEffect(() => {
      dispatch(getUserOperationHistory(userId, nextCart))
   }, [nextCart])

   return (
      <ContainerBlock>
         <TableBlock>
            <TheadStyledBlock>
               <tr>
                  <DivClear>
                     <ThClearStyled>Очистить историю</ThClearStyled>
                  </DivClear>
                  <ThStyledImg>Фото</ThStyledImg>
                  <ThStyledAvtor>Название/Автор</ThStyledAvtor>
                  <ThStyledAmount>Кол-во</ThStyledAmount>
                  <ThStyledPrice>цена</ThStyledPrice>
                  <ThStyledDate>Дата</ThStyledDate>
               </tr>
            </TheadStyledBlock>
         </TableBlock>
         <DivBlock>
            <DivTotalBlock>Купленные({totalElements}книг)</DivTotalBlock>
            <ButtonBlock>
               <Div>
                  {userHistory.map((i) => (
                     <StyledBlock key={i.id}>
                        <DivImgBlock>
                           <ImgStyled src={i.mainImage} alt="foto" />
                        </DivImgBlock>
                        <DivAuthor>
                           <DivName>
                              {i.name.length > 17
                                 ? `${i.name.substring(0, 17)}...`
                                 : `${i.name}`}
                           </DivName>
                           <h3>{i.author}</h3>
                        </DivAuthor>
                        <DivQuantityOfBook>
                           <p>{i.quantityOfBook}шт.</p>
                        </DivQuantityOfBook>
                        <DivPriceBlock>
                           <PromocodeBlock>
                              промокод{i.promocode}%
                           </PromocodeBlock>
                           <PriceBlock>
                              <SpanStyled>{i.price}C</SpanStyled>
                              {i.price - (i.price / 100) * i.promocode}
                           </PriceBlock>
                        </DivPriceBlock>
                        <DivPurchaseDate>
                           <p>
                              {i.purchaseDate[0]}.{i.purchaseDate[1]}.
                              {i.purchaseDate[2]}
                           </p>
                        </DivPurchaseDate>
                     </StyledBlock>
                  ))}
               </Div>
               <DivBtn>
                  {nextCart < totalElements && (
                     <StyledButton onClick={nextCarthandle}>
                        Смотреть больше
                     </StyledButton>
                  )}
                  {nextCart > card && (
                     <StyledButton2 onClick={onCloseHandler}>
                        Свернуть
                     </StyledButton2>
                  )}
               </DivBtn>
            </ButtonBlock>
         </DivBlock>
      </ContainerBlock>
   )
}

const DivBtn = styled.div`
   /* border: 1px solid red; */
   width: 100%;
   padding-left: 4%;
   padding-bottom: 30px;
`

const ContainerBlock = styled.div`
   margin-top: 60px;
`
const ButtonBlock = styled.div`
   width: 100%;
`
const DivName = styled('h4')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   margin: 0;
`
const Div = styled('div')`
   border-top: 1px solid #c4c4c4;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-end;
`
const DivTotalBlock = styled.div`
   width: 18%;
   border-top: 1px solid #c4c4c4;
   border-right: 1px solid #c4c4c4;
   display: flex;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #f34901;
   padding-top: 50px;
`
const DivBlock = styled.div`
   display: flex;
`
const TableBlock = styled('table')`
   padding: 0;
   margin: 0%;
`
const TheadStyledBlock = styled('thead')`
   & > tr > th {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #545454;
   }
`

const ThClearStyled = styled('th')`
   width: 30%;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #545454;
`
const ThStyledImg = styled('th')`
   width: 20%;
   /* border: 1px solid red; */
`
const ThStyledAvtor = styled('th')`
   width: 15%;
`
const ThStyledAmount = styled('th')`
   width: 17%;
   text-align: end;
`
const ThStyledPrice = styled('th')`
   width: 30%;
   text-align: center;
   padding-left: 15px;
`
const ThStyledDate = styled('th')`
   width: 10%;
   text-align: end;
`
const ImgStyled = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const StyledBlock = styled.div`
   /* border: 1px solid red; */
   width: 96%;
   display: flex;
   justify-content: space-between;
   /* margin-top: 25px; */
   padding: 20px 0;
   border-bottom: 1px solid #c4c4c4;
`
const DivImgBlock = styled.div`
   /* width: 13%; */
   /* text-align: center; */
   width: 82px;
   height: 132px;
   /* border: 1px solid red; */
`
const DivPriceBlock = styled.div`
   width: 20%;
`

const SpanStyled = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   text-decoration-line: line-through;
   color: #969696;
   margin-right: 8px;
`

const PriceBlock = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 130%;
   color: #222222;
`
const DivAuthor = styled.div`
   width: 28%;
   margin-top: 30px;
   padding-left: 30px;
   & > h3 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #222222;
   }
   & > h4 {
      padding: 0;
   }
`
const DivQuantityOfBook = styled.div`
   width: 16%;
   margin-top: 40px;
   & > p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #222222;
   }
`
const DivPurchaseDate = styled.div`
   margin-top: 40px;
   & > p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
   }
`
const DivClear = styled.div`
   width: 150px;
`
const PromocodeBlock = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #f10000;
`

const StyledButton = styled(Button)`
   width: 100%;
   margin-top: 25px;
   color: white;
   margin-bottom: 15px;
`
const StyledButton2 = styled(Button)`
   width: 100%;
   margin-top: 25px;
   color: white;
   margin-bottom: 15px;
   background-color: black;
`
