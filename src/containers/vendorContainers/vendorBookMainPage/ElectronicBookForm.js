import { useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import bookAction from '../../../store/slices/addBookSlice'
import FileUploadButton from '../../../Components/UI/uploadaudio/FileUploadButton'
import Button from '../../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../../Components/UI/Inputs/InputText'
import CheckBox from '../../../Components/UI/checkBox/CheckBox'
import { addElectronicBoook } from '../../../store/createActions/addBookActions'
import {
   ButtonDiv,
   InputDiv,
   InputWrapper,
   LabelStyle,
   PutDiv,
   SelectDiv,
   SelectWrapper,
} from './PaperBookForm'
import { putVendorBook } from '../../../store/createActions/vendorMainPagesActions'
import SelectBooks from '../../adminContainers/Admin/SelectBooks'
import { editeElectronicBook } from '../../../store/createActions/vendorMainPagesActions'
import { snackbarActions } from '../../../store/createActions/snackbarActions'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
import SelectInput from './SelectInput'
import Spinner from '../../../Components/UI/Spinner'

const languageSelect = [
   { name: 'Кыргызский', text: 'KYRGYZ', id: 1 },
   { name: 'Русский', text: 'RUSSIAN', id: 2 },
   { name: 'Английский', text: 'ENGLISH', id: 3 },
]

const ElectronicBookForm = ({ images }) => {
   const [pdfValue, setPdfFile] = useState()
   const { stateSnackbar } = useSelector((store) => store.snackbar)
   const genre = useSelector((store) => store.globalValues.genres)
   const { status } = useSelector((store) => store.addbook)
   const dataWithId = useSelector(
      (store) => store.vendorMainPage.electronicBooks
   )
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [withIdValues, setWithIdValues] = useState({
      name: dataWithId ? dataWithId.bookName : '',
      author: dataWithId ? dataWithId.author : '',
      publishingHouse: dataWithId ? dataWithId.publishingHouse : '',
      description: dataWithId ? dataWithId.description : '',
      fragment: dataWithId ? dataWithId.fragment : '',
      pageSize: dataWithId ? dataWithId.pageSize : '',
      price: dataWithId ? dataWithId.price : '',
      yearOfIssue: dataWithId ? dataWithId.yearOfIssue : '',
      quantityOfBook: dataWithId ? dataWithId.quantityOfBook : '',
      discount: dataWithId ? dataWithId.discount : '',
   })
   const changePdfFileValue = (pdf) => {
      if (!pdf) {
         return
      }
      setPdfFile(pdf)
   }

   const formatLanguage = () => {
      let formation
      if (dataWithId ? dataWithId.language === 'KYRGYZ' : '') {
         formation = 'Кыргызский'
      }
      if (dataWithId ? dataWithId.language === 'RUSSIAN' : '') {
         formation = 'Русский'
      }
      if (dataWithId ? dataWithId.language === 'ENGLISH' : '') {
         formation = 'Английский'
      }
      return formation
   }

   const handleChangeInput = (e) => {
      const valueEvent = e.target
      const { name, value } = e.target
      const date = new Date()
      if (name === 'pageSize' || name === 'price') {
         if (value < 0) {
            return
         }
      }
      if (name === 'discount') {
         if (value > 100 || value < 0) {
            return
         }
      }
      if (name === 'yearOfIssue') {
         if (name === 'yearOfIssue') {
            if (value > date.getFullYear() || value < 0) {
               return
            }
         }
      }
      setWithIdValues({ ...withIdValues, [valueEvent.name]: valueEvent.value })
   }

   const isFormValid = () => {
      const validateValues =
         withIdValues.name.length >= 1 &&
         withIdValues.author.length >= 1 &&
         withIdValues.genreId > +0 &&
         withIdValues.publishingHouse.length >= 1 &&
         withIdValues.description.length >= 1 &&
         withIdValues.fragment.length >= 1 &&
         withIdValues.pageSize.length >= 1 &&
         withIdValues.price.length >= 1
      return validateValues && images.mainImage && pdfValue
   }

   const clickSendFormValues = async () => {
      if (isFormValid()) {
         dispatch(addElectronicBoook({ withIdValues, images, pdfValue }))
         dispatch(bookAction.deleteImage())

         setWithIdValues({
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
      if (!isFormValid()) {
         dispatch(snackbarActions({ bron: 'exit' }))
      }
   }

   const { bookId, language } = dataWithId !== null ? dataWithId : ''
   const genreId = dataWithId !== null ? dataWithId : ''

   const updateForms = () => {
      if (!isFormValid()) {
         dispatch(
            editeElectronicBook({
               withIdValues,
               images,
               bookId,
               pdfValue,
               language,
               genreId,
               navigate,
            })
         )
      }
   }

   return (
      <>
         <GetSnackbar
            open={stateSnackbar}
            message="Пожалуйста, заполните все поля"
            variant="error"
            width="400px"
         />
         {status === 'pending' && <Spinner />}
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
                  value={withIdValues.name}
               />
               <LabelStyle htmlFor="author">
                  ФИО автора <strong>*</strong>
               </LabelStyle>
               <InputText
                  id="author"
                  value={withIdValues.author}
                  onChange={handleChangeInput}
                  name="author"
                  placeholder="Напишите ФИО автора"
               />
               <LabelStyle htmlFor="jenre">
                  Выберите жанр <strong>*</strong>
               </LabelStyle>
               <SelectInput
                  border
                  padding="12px 10px 12px 19px"
                  width="100%"
                  hover
                  defaultName="Литература, роман, стихи..."
                  fontWeight
                  color="#969696"
                  height="400px"
                  onClick={(genreId) =>
                     setWithIdValues({ ...withIdValues, genreId })
                  }
                  genres={genre}
                  editeName={dataWithId ? dataWithId.genre : ''}
               />
               <LabelStyle htmlFor="publishingHouse">
                  Издательство <strong>*</strong>
               </LabelStyle>
               <InputText
                  placeholder="Напишите название издательства"
                  value={withIdValues.publishingHouse}
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
                  value={withIdValues.description}
               />
               <Textarea
                  title="Фрагмент книги"
                  onChange={handleChangeInput}
                  placeholder="Напишите фрагмент книги"
                  name="fragment"
                  maxLength="9234"
                  value={withIdValues.fragment}
               />
            </InputDiv>
            <Wrapper>
               <SelectWrapper>
                  <SelectDiv>
                     <LabelStyle>
                        Язык <strong>*</strong>
                     </LabelStyle>
                     <SelectInput
                        border
                        padding="12px 10px 11px 19px"
                        width="100%"
                        hover
                        defaultName="язык"
                        fontWeight="400"
                        color="#969696"
                        onClick={(language) =>
                           setWithIdValues({ ...withIdValues, language })
                        }
                        genres={languageSelect}
                        editeName={dataWithId ? formatLanguage() : ''}
                     />
                     <LabelStyle htmlFor="obem">
                        Объем <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        textAlign="end"
                        placeholder="стр."
                        onChange={handleChangeInput}
                        value={withIdValues.pageSize}
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
                        value={withIdValues.price}
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
                        value={withIdValues.yearOfIssue}
                        textAlign="end"
                        placeholder="гг"
                        name="yearOfIssue"
                        type="number"
                     />
                     <CheckBoxDiv>
                        <CheckBox label="Бестселлер" />
                     </CheckBoxDiv>
                     <LabelStyle htmlFor="discount">Скидка</LabelStyle>
                     <InputText
                        id="discount"
                        onChange={handleChangeInput}
                        value={withIdValues.discount}
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
                     accept="application/pdf"
                  >
                     Загрузите PDF
                  </FileUploadButton>
               </PdfDiv>
            </Wrapper>
         </InputWrapper>
         <ButtonDiv>
            <PutDiv>
               <Button
                  width="137px"
                  background="#2f4f4f"
                  onClick={() => navigate('/')}
               >
                  Назад
               </Button>
               {!dataWithId ? (
                  <Button width="137px" onClick={clickSendFormValues}>
                     Отправить
                  </Button>
               ) : (
                  <Button width="137px" onClick={updateForms}>
                     Сохранить
                  </Button>
               )}
            </PutDiv>
         </ButtonDiv>
      </>
   )
}
export default ElectronicBookForm

const Wrapper = styled('div')`
   width: 398px;
`
const CheckBoxDiv = styled('div')`
   margin-top: 7.2vh;
`
const PdfDiv = styled('div')`
   margin-top: 3.9vh;
`
