import styled from '@emotion/styled'
// import * as User from './StyleBasket'
import { useNavigate } from 'react-router'
import Button from '../Components/UI/Button/Button'
// import { Div } from './StyleBasket'

const data = [
   {
      name: 'test',
      id: 'e1',
      price: 500,
      discount: '400 s',
      author: 'peaksoft',
   },
   {
      name: 'test2',
      id: 'e2',
      price: 200,
      discount: '400 s',
      author: 'peaksoft',
   },
   {
      name: 'test3',
      id: 'e3',
      price: 300,
      discount: '400 s',
      author: 'peaksoft',
   },
]

export default function UserBsket() {
   const navigate = useNavigate()
   const sendCard = (id) => {
      console.log(id)
      console.log(data)
      navigate(`/basket`)
   }
   return (
      <div>
         <ButtonBut onClick={sendCard}>123</ButtonBut>
         {/* <Div>df</Div> */}
         <Container>
            <H1one>
               <span>Ваши книги</span>
               <hr />
               {data.map((elem) => (
                  <Card
                     key={elem.id}
                     onClick={() => {
                        sendCard(elem.id)
                     }}
                  >
                     <ImgDiv>img</ImgDiv>
                     <Promocode>
                        <h2>{elem.name}</h2>
                        <h2>{elem.author}</h2>
                        <span>
                           {elem.discount}
                           {elem.price}
                        </span>
                        <ButtonDiv>+</ButtonDiv>0<ButtonDiv>-</ButtonDiv>
                        <span>sjdk</span>
                     </Promocode>
                  </Card>
               ))}
            </H1one>
            <OrderDiv>
               <h4>Общая стоимость</h4>
               <Cont>
                  <OrderWrap>
                     <SpanDiv>
                        <span>test1</span>
                        <span>test1</span>
                        <span>test1</span>
                     </SpanDiv>
                     <SpanDiv>
                        <span>test1sdsdsd</span>
                        <span>test1</span>
                        <span>test1</span>
                     </SpanDiv>
                  </OrderWrap>
                  <input
                     style={{
                        width: '100%',
                        padding: '6px',
                        marginBottom: '20px',
                     }}
                  />
               </Cont>
               <Button variant="default">Оформить заказ</Button>
            </OrderDiv>
         </Container>
      </div>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
   border: 1px solid red;
   & span {
      font-size: 20px;
   }
`
const ButtonDiv = styled('button')``
const H1one = styled('div')`
   width: 799px;
`
const ButtonBut = styled('button')`
   border: 1px solid;
`
const Card = styled('div')`
   border-bottom: 1px solid;
   padding: 20px;
   display: flex;
   justify-content: space-between;
`
const ImgDiv = styled('div')`
   border: 1px solid red;
   width: 110px;
   height: 176px;
`
//-------------------------------------------
const Promocode = styled('div')`
   border: 1px solid red;
   width: 70%;
`
const OrderDiv = styled('div')`
   border: 1px solid red;
   width: 374px;
   height: 299px;
`
const OrderWrap = styled('div')`
   width: 80%;
   margin: auto;
   border: 1px solid;
   display: flex;
   justify-content: space-between;
   height: 130px;
   margin-bottom: 20px;
`
const SpanDiv = styled('div')`
   border: 1px solid;
   display: flex;
   flex-direction: column;
   font-size: 20px;
`
const Cont = styled('div')`
   border: 1px solid blue;
`
