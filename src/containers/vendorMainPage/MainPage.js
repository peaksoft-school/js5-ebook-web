import { styled } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../Components/UI/Button/Button'
// import MeadBall from '../../Components/UI/MeatBalls/MeatBalls'

const imageMore = 8

const VendorMainPage = () => {
   const data = useSelector((state) => state.addbook.data)
   const [next, setNext] = useState(imageMore)
   const handleMoreImage = () => {
      setNext(next + imageMore)
   }
   //    const option = [{ title: 'Sadyr' }, { title: 'Meatballs' }]
   return (
      <WrapperDiv>
         <select>
            <option>Все</option>
            <option>В избранном</option>
            <option>В корзине</option>
            <option>Проданы</option>
            <option>Со скидками</option>
         </select>
         {/* <hr></hr> */}
         <ContainerDiv>
            {data.slice(0, next).map((book) => (
               <BooksContainer>
                  <BooksWrapper>
                     <BookSHeader>
                        <span>❤️ (12)</span>
                        <span>В корзине (13)</span>
                     </BookSHeader>
                     <Img src={book.mainImg} />
                     <div>
                        <h2>{book.name}</h2>
                        <FooterDiv>
                           <span>{book.data}</span>
                           <Price>{book.price}</Price>
                        </FooterDiv>
                     </div>
                  </BooksWrapper>
                  <MeatBallsDiv>
                     {/* <MeadBall options={option}></MeadBall> */}
                  </MeatBallsDiv>
               </BooksContainer>
            ))}
         </ContainerDiv>
         {next < data.length && (
            <Button
               onClick={handleMoreImage}
               fullWidth
               variant="universal"
               border="1px solid grey"
               color="grey"
            >
               Смотреть больше
            </Button>
         )}
      </WrapperDiv>
   )
}
export default VendorMainPage

const ContainerDiv = styled('div')`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-column-gap: 16px;
   grid-row-gap: 1.2em;
   width: 1240px;
   margin: auto;
`
const Img = styled('img')`
   width: 210px;
   height: 300px;
   cursor: pointer;
`
const BookSHeader = styled('div')`
   width: 164px;
   display: flex;
   justify-content: space-between;
   padding: 10px 0px 10px 0px;
   align-items: center;
`
const BooksWrapper = styled('div')`
   padding: 10px 40px 10px 40px;
`
const BooksContainer = styled('div')`
   background: #ededed;
   display: flex;
`
const MeatBallsDiv = styled('div')`
   margin: 20px 0px 0px -10px;
`
const FooterDiv = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const Price = styled('span')`
   color: brown;
   font-size: 20px;
   font-weight: 800;
`
const WrapperDiv = styled('div')`
   width: 1240px;
   margin: auto;
   padding-bottom: 30px;

   & option {
      border: none;
      width: 200px;
      height: 200px;
      font-size: 24px;
      padding: 20px;
   }
   & select {
      font-size: 24px;
      border: 1px solid grey;
      width: 160px;
      border-radius: none;
      display: flex;
      justify-content: flex-end;
      & :active {
         border: 2px solid blue;
      }
   }
`
