import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import Checkbox from '../../Components/UI/checkBox/CheckBox'
import Button from '../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../Components/UI/Inputs/InputText'
import bookAction from '../../store/slices/addBookSlice'
// import Message from '../../Components/UI/Message/Message'

export const inputValuesForState = {
   bookname: '',
   author: '',
   genre: '',
   publish: '',
   aboutbook: '',
   fragment: '',
   size: '',
   price: '',
   data: '',
   discount: '',
}
const paperInputValues = {
   ...inputValuesForState,
   amount: '',
}

const PaperBookComponent = ({ images, onClick }) => {
   const [inputValues, setinputValues] = useState(paperInputValues)
   console.log(inputValues)
   const dispatch = useDispatch()
   // const [message, setMessage] = useState(null)

   const handleChange = (e) => {
      const { name, value } = e.target
      setinputValues({ ...inputValues, [name]: value })
   }
   console.log(images)

   const validateValues =
      inputValues.bookname.length >= 1 &&
      inputValues.author.length >= 1 &&
      inputValues.genre.length >= 1 &&
      inputValues.publish.length >= 1 &&
      inputValues.aboutbook.length >= 1 &&
      inputValues.fragment.length >= 1 &&
      inputValues.size.length >= 1 &&
      inputValues.price.length >= 1 &&
      inputValues.data.length >= 1 &&
      inputValues.discount.length >= 1

   const validateImages = images.mainImg.length >= 1

   const clickHandle = () => {
      onClick()
      if (validateValues && validateImages) {
         dispatch(
            bookAction.addBook({
               ...inputValues,
               images,
               typeBook: 'electronicbook',
            })
         )
         // setMessage(true)
         console.log(1111)
      } else {
         console.log(333)
      }
      setinputValues({
         bookname: '',
         author: '',
         genre: '',
         publish: '',
         aboutbook: '',
         fragment: '',
         size: '',
         price: '',
         data: '',
         amount: '',
         discount: '',
      })
   }
   // const handleClose = () => {
   //    setMessage(false)
   // }

   return (
      <>
         {/* <Message
            open={message}
            text="hsdsh shdcjh"
            severity=""
            handleClose={handleClose}
         /> */}
         <InputWrapper onSubmit={clickHandle}>
            <InputDiv>
               <LabelStyle htmlFor="bookname">
                  Название книги <strong>*</strong>
               </LabelStyle>
               <InputText
                  value={inputValues.bookname}
                  id="bookname"
                  onChange={handleChange}
                  placeholder="Напишите полное название книги"
                  name="bookname"
               />
               <LabelStyle htmlFor="author">
                  ФИО автора <strong>*</strong>
               </LabelStyle>
               <InputText
                  placeholder="Напишите ФИО автора"
                  value={inputValues.author}
                  id="author"
                  onChange={handleChange}
                  name="author"
               />
               <LabelStyle htmlFor="genre">
                  Выберите жанр <strong>*</strong>
               </LabelStyle>
               <InputText
                  placeholder="Литература, роман, стихи..."
                  value={inputValues.genre}
                  onChange={handleChange}
                  name="genre"
               />
               <LabelStyle htmlFor="publish">
                  Издательство <strong>*</strong>
               </LabelStyle>
               <InputText
                  placeholder="Напишите название издательства"
                  value={inputValues.publish}
                  onChange={handleChange}
                  name="publish"
                  id="publish"
               />
               <Textarea
                  onChange={handleChange}
                  value={inputValues.aboutbook}
                  name="aboutbook"
                  title="О книге"
                  placeholder="Напишите о книге"
                  maxLength="1234"
               />
               <Textarea
                  onChange={handleChange}
                  value={inputValues.fragment}
                  name="fragment"
                  title="Фрагмент книги"
                  placeholder="Напишите фрагмент книги"
                  maxLength="9234"
               />
            </InputDiv>
            <div>
               <SelectWrapper>
                  <SelectDiv>
                     <LabelStyle>
                        Язык <strong>*</strong>
                     </LabelStyle>
                     <SelectStyle onChange={handleChange} name="language">
                        <option>Русский</option>
                        <option>Кыргызский</option>
                        <option>Английский</option>
                     </SelectStyle>
                     <LabelStyle htmlFor="size">
                        Объем <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        textAlign="end"
                        placeholder="стр."
                        onChange={handleChange}
                        value={inputValues.size}
                        name="size"
                        id="size"
                     />
                     <LabelStyle htmlFor="price">
                        Стоимость <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="price"
                        onChange={handleChange}
                        value={inputValues.price}
                        textAlign="end"
                        placeholder="сом"
                        name="price"
                     />
                     <Bestssler>
                        <Checkbox label="Бестселлер" />
                     </Bestssler>
                  </SelectDiv>
                  <SelectDiv>
                     <LabelStyle htmlFor="data">
                        Год выпуска <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="data"
                        onChange={handleChange}
                        value={inputValues.data}
                        textAlign="end"
                        placeholder="гг"
                        name="data"
                     />
                     <LabelStyle htmlFor="amount">
                        Кол-во <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        data="amount"
                        onChange={handleChange}
                        value={inputValues.amount}
                        textAlign="end"
                        placeholder="шт"
                        name="amount"
                     />
                     <LabelStyle htmlFor="discount">
                        Скидка <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="discount"
                        onChange={handleChange}
                        value={inputValues.discount}
                        textAlign="end"
                        placeholder="%"
                        name="discount"
                     />
                  </SelectDiv>
               </SelectWrapper>
            </div>
         </InputWrapper>
         <ButtonDiv>
            <Button onClick={clickHandle}>Отправить</Button>
         </ButtonDiv>
      </>
   )
}
export default PaperBookComponent

export const InputWrapper = styled('form')`
   display: flex;
   width: 96%;
   justify-content: space-between;
`
export const SelectStyle = styled('select')`
   padding: 13px;
   margin-top: 0px;
   outline: none;
`

export const InputDiv = styled('div')`
   display: flex;
   flex-direction: column;
   width: 753px;
`
export const SelectDiv = styled('div')`
   display: flex;
   flex-direction: column;
   width: 184px;
`
export const SelectWrapper = styled('div')`
   width: 398px;
   display: flex;
   justify-content: space-between;
`
export const ButtonDiv = styled('div')`
   width: 96%;
   margin-top: 104px;
   display: flex;
   align-items: flex-end;
   justify-content: flex-end;
`
const Bestssler = styled('div')`
   margin-top: 24px;
`
export const LabelStyle = styled('label')`
   margin-bottom: 10px;
   margin-top: 26px;
   color: #222222;
   font-size: 16px;
   font-style: normal;
   font-family: 'Open Sans';
   font-weight: 400;
   line-height: 20.8px;
`
