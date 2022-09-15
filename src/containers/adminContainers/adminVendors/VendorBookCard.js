import styled from '@emotion/styled'
import bookLikeIcon from '../../../assets/icons/bookLike.svg'
import PopUpMeatBalls from '../../../Components/UI/MeatBalls/PopupMeatBalls'
import Button from '../../../Components/UI/Button/Button'

const menuMeatBall = [
   {
      id: '1',
      text: 'Удалить',
   },
]

const VendorBookCard = ({ books, showSeeMore, onClickSeeMore }) => {
   return (
      <StyledBookSBlock>
         {books &&
            books.map((item) => {
               return (
                  <StyledWrap key={item.id}>
                     <StyledHeader>
                        <img src={bookLikeIcon} alt="icon" />
                        <StyledText>({item.favorite})</StyledText>
                        <StyledText>В корзине ({item.basket})</StyledText>
                        <PopUpMeatBalls options={menuMeatBall} />
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
      </StyledBookSBlock>
   )
}

export default VendorBookCard

const StyledBtnBlock = styled.div`
   width: 100%;
   /* border: 1px solid red; */
   padding-bottom: 50px;
`

const StyledBookSBlock = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   padding: 30px 0;
`
const StyledWrap = styled.div`
   /* border: 1px solid red; */
   width: 212px;
   background: #efefef;
   padding: 14px 34px;
   margin-bottom: 30px;
   margin-right: 17px;
   &:nth-child(4n) {
      margin-right: 0;
   }
`
const StyledHeader = styled.div`
   /* border: 1px solid red; */
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
   /* border: 1px solid red; */
   height: 200px;
   margin: 14px 0 13px 0;
`
const StyledImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
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
