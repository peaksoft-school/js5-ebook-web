import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Components/UI/Button/Button'
// import { getBooks } from '../../store/addBookActions'

// import MeadBall from '../../Components/UI/MeatBalls/MeatBalls'

const data = [
   { mainImg: 'weew', name: 'sadyr', data: '2020.20.20', price: '234' },
   { mainImg: 'weew', name: 'sadyr', data: '2020.20.20', price: '234' },
   { mainImg: 'weew', name: 'sadyr', data: '2020.20.20', price: '234' },
]

const imageMore = 8

const VendorMainPage = () => {
   const data2 = useSelector((state) => state.addbook.array)
   console.log(data2)
   const [next, setNext] = useState(imageMore)
   const [resp, setResp] = useState()
   console.log(resp)
   // const dispatch = useDispatch()
   const handleMoreImage = () => {
      setNext(next + imageMore)
   }

   // export const getBooks = (im) => {
   //    console.log(im)
   //    return async (dispatch) => {
   //       const getData = await appFetch({
   //          url: '/api/books',
   //       })
   //       dispatch(bookAction.saveBooks(getData))
   //       console.log(getData)
   //    }
   // }
   //    fetch(
   //    )
   //       .then((res) => res.json())
   //       .then((resp) => {
   //          console.log(resp)
   //          setResp(resp)
   //       })

   useEffect(() => {
      // dispatch(getBooks())
      // dispatch(getBooks('sadyr'))
      fetch(
         'http://ebook-env.eba-kbrgztwq.eu-central-1.elasticbeanstalk.com/api/books?bookType=PAPER_BOOK&search=all&page=1&size=12'
      )
         .then((res) => res.json())
         .then((resp) => {
            // console.log(resp)
            setResp(resp)
         })
   }, [])
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
                     <Img src={book.mainImage} />
                     <div>
                        <h2>{book.name}</h2>
                        <FooterDiv>
                           <span>{book.data}</span>
                           <Price>{book.price}сом</Price>
                        </FooterDiv>
                     </div>
                  </BooksWrapper>
                  <MeatBallsDiv>
                     {/* <MeadBall options={option}></MeadBall> */}
                  </MeatBallsDiv>
               </BooksContainer>
            ))}
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
         </ContainerDiv>
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
