import { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Checkbox from '../../../Components/UI/checkBox/CheckBox'
import InputText from '../../../Components/UI/Inputs/InputText'
import Button from '../../../Components/UI/Button/Button'
import Textarea from './Textarea'
import { addPaperBook } from '../../../store/createActions/addBookActions'
import bookAction from '../../../store/slices/addBookSlice'
import SelectBooks from '../../adminContainers/Admin/SelectBooks'
import { putVendorBook } from '../../../store/createActions/vendorMainPagesActions'
import { snackbarActions } from '../../../store/createActions/snackbarActions'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
import { setGenres } from '../../../store/slices/globalSlices'

const languageSelect = [
   { name: 'KYRGYZ', id: 1 },
   { name: 'RUSSIAN', id: 2 },
   { name: 'ENGLISH', id: 3 },
]

const PaperBookForm = ({ images }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const genre = useSelector((store) => store.globalValues.genres)
   const { stateSnackbar } = useSelector((store) => store.snackbar)
   const dataWithId = useSelector((store) => store.vendorMainPage.paperBooks)
   const { bookSuccsess } = useSelector((store) => store.snackbar)
   const [isChecked, setIsChecked] = useState()
   const [inputValues, setInputValues] = useState({
      name: dataWithId ? dataWithId.bookName : '',
      author: dataWithId ? dataWithId.author : '',
      publishingHouse: dataWithId ? dataWithId.publishingHouse : '',
      description: dataWithId ? dataWithId.description : '',
      fragment: dataWithId ? dataWithId.fragment : '',
      pageSize: dataWithId ? dataWithId.pageSize : '',
      price: dataWithId ? dataWithId.price : '',
      genreId: dataWithId ? dataWithId.genreId : '',
      yearOfIssue: dataWithId ? dataWithId.yearOfIssue : '',
      quantityOfBook: dataWithId ? dataWithId.quantityOfBook : '',
      language: dataWithId ? dataWithId.language : '',
      discount: dataWithId ? dataWithId.discount : '',
      genre: dataWithId ? dataWithId.genre : '',
   })

   const handleChangeInput = (e) => {
      const { name, value } = e.target
      setInputValues({ ...inputValues, [name]: value })
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
         inputValues.discount.length >= 1 &&
         inputValues.quantityOfBook.length >= 1

      return validateValues
   }
   const validLength = () => {
      const validNumbers =
         inputValues.yearOfIssue.length > 4 ||
         inputValues.yearOfIssue < 0 ||
         inputValues.yearOfIssue > 2022
      return validNumbers
   }

   const clickSendFormValues = async () => {
      if (isFormValid() && !validLength()) {
         dispatch(addPaperBook(inputValues, images, isChecked))
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
      } else {
         dispatch(snackbarActions({ bron: 'exit' }))
      }
   }
   const { bookType, bookId } = dataWithId !== null ? dataWithId : ''
   const updateForms = async () => {
      if (isFormValid()) {
         dispatch(putVendorBook(inputValues, images, bookType, bookId))
      } else {
         dispatch(snackbarActions({ bron: 'exit' }))
      }
      if (bookSuccsess) {
         setTimeout(() => {
            navigate('/')
         }, 3000)
      }
   }

   useEffect(() => {
      dispatch(setGenres())
   }, [])

   return (
      <>
         <GetSnackbar
            open={stateSnackbar}
            message="Пожалуйста, заполните все поля"
            variant="error"
         />
         <InputWrapper onSubmit={clickSendFormValues}>
            <InputDiv>
               <LabelStyle htmlFor="name">
                  Название книги <strong>*</strong>
               </LabelStyle>
               <InputText
                  value={inputValues.name}
                  id="name"
                  onChange={handleChangeInput}
                  placeholder="Напишите полное название книги"
                  name="name"
               />
               <LabelStyle htmlFor="author">
                  ФИО автора <strong>*</strong>
               </LabelStyle>
               <InputText
                  placeholder="Напишите ФИО автора"
                  value={inputValues.author}
                  id="author"
                  onChange={handleChangeInput}
                  name="author"
               />
               <LabelStyle htmlFor="jenre">
                  Выберите жанр <strong>*</strong>
               </LabelStyle>
               <SelectBooks
                  border
                  padding="12px 10px 12px 19px"
                  width="100%"
                  hover
                  defaultName="Литература, роман, стихи..."
                  fontWeight
                  color="#969696"
                  onClick={(genreId) =>
                     setInputValues({ ...inputValues, genreId })
                  }
                  genres={genre}
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
                  inputValues={inputValues}
                  onChange={handleChangeInput}
                  value={inputValues.description}
                  name="description"
                  title="О книге"
                  placeholder="Напишите о книге"
                  maxLength="1234"
               />
               <Textarea
                  onChange={handleChangeInput}
                  name="fragment"
                  title="Фрагмент книги"
                  placeholder="Напишите фрагмент книги"
                  maxLength="9234"
                  value={inputValues.fragment}
               />
            </InputDiv>
            <div>
               <SelectWrapper>
                  <SelectDiv>
                     <LabelStyle>
                        Язык <strong>*</strong>
                     </LabelStyle>
                     <SelectBooks
                        border
                        padding="12px 10px 12px 19px"
                        width="100%"
                        defaultName="язык"
                        fontWeight="400"
                        color="#969696"
                        hover
                        nameText=""
                        onClick={(_, notext, notest, language) =>
                           setInputValues({ ...inputValues, language })
                        }
                        genres={languageSelect}
                     />
                     <LabelStyle htmlFor="pageSize">
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
                        placeholder="сом"
                        name="price"
                        type="number"
                     />
                     <Bestssler>
                        <Checkbox
                           label="Бестселлер"
                           onChange={(e) => {
                              setIsChecked(e.target.checked)
                           }}
                        />
                     </Bestssler>
                  </SelectDiv>
                  <SelectDiv>
                     <LabelStyle htmlFor="yearOfIssue">
                        Год выпуска <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="yearOfIssue"
                        onChange={handleChangeInput}
                        value={inputValues.yearOfIssue}
                        textAlign="end"
                        placeholder="гг"
                        type="number"
                        name="yearOfIssue"
                     />
                     {validLength() && <ValidSpan>must be 4 number</ValidSpan>}
                     <LabelStyle htmlFor="quantityOfBook">
                        Кол-во <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        data="quantityOfBook"
                        onChange={handleChangeInput}
                        value={inputValues.quantityOfBook}
                        textAlign="end"
                        placeholder="шт"
                        name="quantityOfBook"
                     />
                     <LabelStyle htmlFor="discount">Скидка</LabelStyle>
                     <InputText
                        onkeypress="if(this.value.length&gt;4) return false"
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
            </div>
         </InputWrapper>
         <ButtonDiv>
            {!dataWithId ? (
               <Button width="137px" onClick={clickSendFormValues}>
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
export default PaperBookForm

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
   margin-bottom: 70px;
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
export const PutDiv = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 300px;
`
export const ValidSpan = styled('span')`
   color: red;
   font-size: 14px;
`
