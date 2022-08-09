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
} from './PaperBookForm'

const ElectronicBookForm = ({ images }) => {
   const [pdfValue, setPdfFile] = useState()
   const [inputValues, setInputValues] = useState(inputValuesForState)
   // const [showSnackbar, setShowSnackbar] = useState(false)
   const dispatch = useDispatch()

   const changePdfFileValue = (pdf) => {
      setPdfFile(pdf)
   }

   const handleChangeInput = (e) => {
      const valueEvent = e.target
      setInputValues({ ...inputValues, [valueEvent.name]: valueEvent.value })
   }

   const isFormValid = () => {
      const validateValues =
         inputValues.bookname.length >= 1 &&
         inputValues.author.length >= 1 &&
         inputValues.genre.length >= 1 &&
         inputValues.publish.length >= 1 &&
         inputValues.aboutbook.length >= 1 &&
         inputValues.fragment.length >= 1 &&
         inputValues.size.length >= 1 &&
         inputValues.price.length >= 1 &&
         inputValues.discount.length >= 1

      const validateImages = images.mainImg.length >= 1
      return validateValues && validateImages
   }
   const clickHandle = () => {
      if (isFormValid()) {
         dispatch(
            bookAction.addBook({
               ...inputValues,
               images,
               typeBook: 'paperbook',
            })
         )
         dispatch(bookAction.deleteImage())
         // setShowSnackbar(true)

         setInputValues({
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
      } else {
         // setShowSnackbar(false)
      }
   }

   return (
      <>
         {/* {showSnackbar && <Snackbar/>} */}
         <InputWrapper>
            <InputDiv>
               <LabelStyle htmlFor="bookname">
                  Название книги <strong>*</strong>
               </LabelStyle>
               <InputText
                  onChange={handleChangeInput}
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
                  onChange={handleChangeInput}
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
                  onChange={handleChangeInput}
                  placeholder="Литература, роман, стихи..."
               />
               <LabelStyle htmlFor="publish">
                  Издательство <strong>*</strong>
               </LabelStyle>
               <InputText
                  placeholder="Напишите название издательства"
                  value={inputValues.publish}
                  onChange={handleChangeInput}
                  name="publish"
                  id="publish"
               />
               <Textarea
                  title="О книге"
                  onChange={handleChangeInput}
                  placeholder="Напишите о книге"
                  name="aboutbook"
                  maxLength="1234"
                  value={inputValues.aboutbook}
               />
               <Textarea
                  title="Фрагмент книги"
                  onChange={handleChangeInput}
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
                     <SelectStyle onChange={handleChangeInput} name="language">
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
                        onChange={handleChangeInput}
                        value={inputValues.size}
                        name="size"
                        id="size"
                     />
                     <LabelStyle htmlFor="price">
                        Стоимость <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="price"
                        onChange={handleChangeInput}
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
                        onChange={handleChangeInput}
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
                        onChange={handleChangeInput}
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
                     onChange={changePdfFileValue}
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
            <Button width="160px" onClick={clickHandle}>
               Отправить
            </Button>
         </ButtonDiv>
      </>
   )
}
export default ElectronicBookForm

const Wrapper = styled('div')`
   width: 398px;
`
const CheckBoxDiv = styled('div')`
   margin-top: 5.5vh;
`
const PdfDiv = styled('div')`
   margin-top: 2.7vh;
`
