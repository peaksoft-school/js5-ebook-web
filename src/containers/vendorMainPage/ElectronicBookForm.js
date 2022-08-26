import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import bookAction from '../../store/slices/addBookSlice'
import FileUploadButton from '../../Components/UI/uploadaudio/FileUploadButton'
import Button from '../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../Components/UI/Inputs/InputText'
import CheckBox from '../../Components/UI/checkBox/CheckBox'
import { addElectronicBoook } from '../../store/addBookActions'
import Selected from '../../Components/UI/Select'
import {
   ButtonDiv,
   InputDiv,
   InputWrapper,
   LabelStyle,
   SelectDiv,
   SelectWrapper,
} from './PaperBookForm'

const fromInputValues = {
   name: '',
   author: '',
   publishingHouse: '',
   description: '',
   fragment: '',
   pageSize: '',
   price: '',
   yearOfIssue: '',
   quantityOfBook: '',
   discount: '',
}

const languageSelect = [
   { name: 'kyrgyzstan', id: 1 },
   { name: 'Russian', id: 2 },
   { name: 'English', id: 3 },
]

const ElectronicBookForm = ({ images }) => {
   const [pdfValue, setPdfFile] = useState()
   const jenre = useSelector((store) => store.addbook.jenreId)
   const dispatch = useDispatch()
   const [inputValues, setInputValues] = useState(fromInputValues)

   const changePdfFileValue = (pdf) => {
      setPdfFile(pdf)
   }

   const handleChangeInput = (e) => {
      const valueEvent = e.target
      setInputValues({ ...inputValues, [valueEvent.name]: valueEvent.value })
   }

   const isFormValid = () => {
      const validateValues =
         inputValues.name.length >= 1 &&
         inputValues.author.length >= 1 &&
         inputValues.genreId > +0 &&
         inputValues.publishingHouse.length >= 1 &&
         inputValues.description.length >= 1 &&
         inputValues.fragment.length >= 1 &&
         inputValues.pageSize.length >= 1 &&
         inputValues.price.length >= 1 &&
         inputValues.discount.length >= 1

      return validateValues && images.mainImage && pdfValue
   }

   const clickSendFormValues = () => {
      if (isFormValid()) {
         dispatch(addElectronicBoook(inputValues, images, pdfValue))
         dispatch(bookAction.deleteImage())

         setInputValues({
            name: '',
            author: '',
            genreId: '',
            publishingHouse: '',
            description: '',
            fragment: '',
            pageSize: '',
            price: '',
            yearOfIssue: '',
            discount: '',
            quantityOfBook: '',
         })
      }
   }

   return (
      <>
         {/* {showSnackbar && <Snackbar/>} */}
         <InputWrapper>
            <InputDiv>
               <LabelStyle htmlFor="name">
                  Название книги <strong>*</strong>
               </LabelStyle>
               <InputText
                  onChange={handleChangeInput}
                  id="name"
                  name="name"
                  placeholder="Напишите полное название книги"
                  value={inputValues.name}
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
               <LabelStyle htmlFor="jenre">
                  Выберите жанр <strong>*</strong>
               </LabelStyle>
               <Selected
                  onChange={(genreId) =>
                     setInputValues({ ...inputValues, genreId })
                  }
                  variant
                  title={jenre}
               />
               <LabelStyle htmlFor="publishingHouse">
                  Издательство <strong>*</strong>
               </LabelStyle>
               <InputText
                  placeholder="Напишите название издательства"
                  value={inputValues.publishingHouse}
                  onChange={handleChangeInput}
                  name="publishingHouse"
                  id="publishingHouse"
               />
               <Textarea
                  title="О книге"
                  onChange={handleChangeInput}
                  placeholder="Напишите о книге"
                  name="description"
                  maxLength="1234"
                  value={inputValues.description}
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
                     <Selected
                        onChange={(language) =>
                           setInputValues({ ...inputValues, language })
                        }
                        title={languageSelect}
                     />
                     <LabelStyle htmlFor="obem">
                        Объем <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        textAlign="end"
                        placeholder="стр."
                        onChange={handleChangeInput}
                        value={inputValues.pageSize}
                        name="pageSize"
                        id="pageSize"
                        type="number"
                     />
                     <LabelStyle htmlFor="price">
                        Стоимость <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="price"
                        onChange={handleChangeInput}
                        value={inputValues.price}
                        textAlign="end"
                        type="number"
                        placeholder="сом"
                        name="price"
                     />
                  </SelectDiv>
                  <SelectDiv>
                     <LabelStyle htmlFor="yearOfIssue">
                        Год выпуска <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="yearOfIssue"
                        onChange={handleChangeInput}
                        value={inputValues.data}
                        textAlign="end"
                        placeholder="гг"
                        name="yearOfIssue"
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
                        type="number"
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
            <Button width="160px" onClick={clickSendFormValues}>
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
