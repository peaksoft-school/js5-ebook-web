import { useState, useEffect } from 'react'
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
   ValidSpan,
} from './PaperBookForm'
import { putVendorBook } from '../../../store/createActions/vendorMainPagesActions'
import SelectBooks from '../../adminContainers/Admin/SelectBooks'
import { editeElectronicBook } from '../../../store/createActions/vendorMainPagesActions'
import { snackbarActions } from '../../../store/createActions/snackbarActions'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
import SelectInput from './SelectInput'

const languageSelect = [
   { name: 'Кыргызский', text: 'KYRGYZ', id: 1 },
   { name: 'Русский', text: 'RUSSIAN', id: 2 },
   { name: 'Английский', text: 'ENGLISH', id: 3 },
]

const ElectronicBookForm = ({ images }) => {
   const [pdfValue, setPdfFile] = useState()
   const { stateSnackbar } = useSelector((store) => store.snackbar)
   const { bookSuccsess } = useSelector((store) => store.snackbar)
   const genre = useSelector((store) => store.globalValues.genres)
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
      setPdfFile(pdf)
   }

   const handleChangeInput = (e) => {
      const valueEvent = e.target
      setWithIdValues({ ...withIdValues, [valueEvent.name]: valueEvent.value })
   }
   const [navigation, setNavigation] = useState(false)

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
   const validLength = () => {
      const validNumbers =
         withIdValues.yearOfIssue.length > 4 ||
         withIdValues.yearOfIssue < 0 ||
         withIdValues.yearOfIssue > 2022
      return validNumbers
   }

   const clickSendFormValues = async () => {
      if (isFormValid() && !validLength()) {
         dispatch(addElectronicBoook(withIdValues, images, pdfValue))
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

   const { bookId } = dataWithId !== null ? dataWithId : ''
   const updateForms = () => {
      if (!isFormValid()) {
         dispatch(editeElectronicBook(withIdValues, images, bookId, pdfValue))
         setNavigation(true)
      }
   }
   useEffect(() => {
      let navigateToMainPage
      if (bookSuccsess && navigation) {
         navigateToMainPage = setTimeout(() => {
            navigate('/')
         }, 3000)
      }
      return () => clearTimeout(navigateToMainPage)
   }, [bookSuccsess])

   return (
      <>
         <GetSnackbar
            open={stateSnackbar}
            message="Пожалуйста, заполните все поля"
            variant="error"
         />
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
                        padding="12px 10px 12px 19px"
                        width="100%"
                        hover
                        defaultName="язык"
                        fontWeight="400"
                        color="#969696"
                        onClick={(language) =>
                           setWithIdValues({ ...withIdValues, language })
                        }
                        genres={languageSelect}
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
                        value={withIdValues.data}
                        textAlign="end"
                        placeholder="гг"
                        name="yearOfIssue"
                        type="number"
                     />
                     {validLength() && <ValidSpan>must be 4 number</ValidSpan>}
                     <CheckBoxDiv>
                        <CheckBox label="Бестселлер" />
                     </CheckBoxDiv>
                     <LabelStyle htmlFor="discount">
                        Скидка <strong>*</strong>
                     </LabelStyle>
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
            {!dataWithId ? (
               <Button width="160px" onClick={clickSendFormValues}>
                  Отправить
               </Button>
            ) : (
               <PutDiv>
                  <Button
                     width="137px"
                     background="#2f4f4f"
                     onClick={() => navigate('/')}
                  >
                     Назад
                  </Button>
                  <Button width="137px" onClick={updateForms}>
                     Сохранить
                  </Button>
               </PutDiv>
            )}
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
