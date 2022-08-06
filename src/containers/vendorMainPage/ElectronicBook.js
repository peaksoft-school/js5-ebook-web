import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import bookAction from '../../store/slices/addBookSlice'
import FileUploadButton from '../../Components/UI/uploadaudio/FileUploadButton'
import Button from '../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../Components/UI/Inputs/InputText'
import CheckBox from '../../Components/UI/checkBox/CheckBox'
import {
   ButtonDiv,
   InputDiv,
   inputValuesForState,
   InputWrapper,
   LabelStyle,
   SelectDiv,
   SelectStyle,
   SelectWrapper,
} from './PaperBook'

const ElectronicBookComponent = ({ images, onClick }) => {
   const [pdfValue, setPdfFile] = useState()
   const [inputValues, setinputValues] = useState(inputValuesForState)
   const dispatch = useDispatch()

   const saveAudioValue = (pdf) => {
      setPdfFile(URL.createObjectURL(pdf))
   }

   const handleChange = (e) => {
      const valueEvent = e.target
      setinputValues({ ...inputValues, [valueEvent.name]: valueEvent.value })
   }
   const clickHandle = () => {
      onClick()
      dispatch(
         bookAction.addBook({
            ...inputValues,
            pdfValue,
            images,
            typeBook: 'electronicbook',
         })
      )

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

   return (
      <div>
         <InputWrapper>
            <InputDiv>
               <LabelStyle htmlFor="bookname">
                  Название книги <strong>*</strong>
               </LabelStyle>
               <InputText
                  onChange={handleChange}
                  id="bookname"
                  name="bookname"
                  placeholder="Напишите полное название книги"
                  value={inputValues.bookname}
               />
               <LabelStyle htmlFor="author">
                  ФИО автора <strong>*</strong>
               </LabelStyle>
               <InputText
                  id="author"
                  value={inputValues.author}
                  onChange={handleChange}
                  name="author"
                  placeholder="Напишите ФИО автора"
               />
               <LabelStyle htmlFor="janr">
                  Выберите жанр <strong>*</strong>
               </LabelStyle>
               <InputText
                  id="genre"
                  value={inputValues.genre}
                  name="genre"
                  onChange={handleChange}
                  placeholder="Литература, роман, стихи..."
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
                  title="О книге"
                  onChange={handleChange}
                  placeholder="Напишите о книге"
                  name="aboutbook"
                  maxLength="1234"
                  value={inputValues.aboutbook}
               />
               <Textarea
                  title="Фрагмент книги"
                  onChange={handleChange}
                  placeholder="Напишите фрагмент книги"
                  name="fragment"
                  maxLength="9234"
                  value={inputValues.fragment}
               />
            </InputDiv>
            <Wrapper>
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
                     <LabelStyle htmlFor="obem">
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
                     <CheckBoxDiv>
                        <CheckBox label="besteller" />
                     </CheckBoxDiv>
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
               <PdfDiv>
                  <LabelStyle>
                     Загрузите PDF <strong>*</strong>
                  </LabelStyle>
                  <FileUploadButton
                     onChange={saveAudioValue}
                     value={pdfValue}
                     title="Загрузите книгу *"
                     accept="application/pdf"
                  >
                     Загрузите PDF
                  </FileUploadButton>
               </PdfDiv>
            </Wrapper>
         </InputWrapper>
         <ButtonDiv>
            <Button onClick={clickHandle}>Отправить</Button>
         </ButtonDiv>
      </div>
   )
}
export default ElectronicBookComponent

const Wrapper = styled('div')`
   width: 398px;
`
const CheckBoxDiv = styled('div')`
   margin-top: 5.5vh;
`
const PdfDiv = styled('div')`
   margin-top: 2.7vh;
`
