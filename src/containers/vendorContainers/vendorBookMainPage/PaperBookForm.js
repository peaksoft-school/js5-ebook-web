import { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import BestsellerCheckBox from '../../../Components/UI/checkBox/CheckBox'
import InputText from '../../../Components/UI/Inputs/InputText'
import Button from '../../../Components/UI/Button/Button'
import Textarea from './Textarea'
import { addPaperBook } from '../../../store/createActions/addBookActions'
import { putVendorBook } from '../../../store/createActions/vendorMainPagesActions'
import { snackbarActions } from '../../../store/createActions/snackbarActions'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
import SelectInput from './SelectInput'

const languageSelect = [
   { name: 'Кыргызский', id: 'KYRGYZ' },
   { name: 'Русский', id: 'RUSSIAN' },
   { name: 'Английский', id: 'ENGLISH' },
]

const PaperBookForm = ({ images }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const genre = useSelector((store) => store.globalValues.genres)
   const { stateSnackbar } = useSelector((store) => store.snackbar)
   const dataWithId = useSelector((store) => store.vendorMainPage.paperBooks)
   const { clearInputs } = useSelector((store) => store.vendorMainPage)
   const [isChecked, setIsChecked] = useState(false)

   const [inputValues, setInputValues] = useState({
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
      language: dataWithId ? dataWithId.language : '',
      genreId:
         dataWithId && genre
            ? genre.find((el) => el.name === dataWithId.genre).id
            : '',
   })
   const handleChangeInput = (e) => {
      const date = new Date()
      const { name, value } = e.target
      if (
         name === 'pageSize' ||
         name === 'discount' ||
         name === 'quantityOfBook' ||
         name === 'yearOfIssue' ||
         name === 'price'
      ) {
         if (value < 0) {
            return
         }
      }
      if (name === 'yearOfIssue') {
         if (value > date.getFullYear()) {
            return
         }
      }
      if (name === 'discount') {
         if (value > 100) {
            return
         }
      }

      setInputValues({ ...inputValues, [name]: value })
   }

   const languageFunc = (name, id) => {
      setInputValues((prev) => {
         return { ...prev, language: id }
      })
   }

   const genreFunction = (name, id) => {
      setInputValues((prev) => {
         return { ...prev, genreId: id }
      })
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
         inputValues.quantityOfBook.length >= 1

      return validateValues
   }

   const clickSendFormValues = async () => {
      if (isFormValid()) {
         dispatch(addPaperBook(inputValues, images, isChecked))
      } else {
         dispatch(snackbarActions({ bron: 'exit' }))
      }
   }

   const updateForms = async () => {
      dispatch(
         putVendorBook(
            {
               inputValues,
               bookId: dataWithId && dataWithId.bookId,
               images,
               isChecked,
            },
            navigate
         )
      )
   }

   const setBestSeller = () => {
      setIsChecked((prev) => !prev)
   }

   useEffect(() => {
      if (dataWithId) {
         setIsChecked(dataWithId.bestseller)
      }
      if (clearInputs) {
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
            language: '',
            discount: '',
            quantityOfBook: '',
         })
         setIsChecked(false)
      }
   }, [dataWithId, clearInputs])

   return (
      <>
         <GetSnackbar
            open={stateSnackbar}
            message="Пожалуйста, заполните все поля"
            variant="error"
            width="400px"
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

               <SelectInput
                  border
                  padding="12px 10px 10px 19px"
                  width="100%"
                  hover
                  defaultName="Литература, роман, стихи..."
                  fontWeight
                  height="400px"
                  color="#969696"
                  onClick={genreFunction}
                  genres={genre}
                  empty={clearInputs && 'Выберите жанр'}
                  from={{
                     name:
                        inputValues.genreId && genre
                           ? genre.find((el) => el.id === inputValues.genreId)
                                .name
                           : 'Выберите жанр',
                     id: inputValues.genreId,
                  }}
                  // from={{
                  //    name:
                  //       genre && dataWithId
                  //          ? genre.find((el) => el.id === inputValues.genreId)
                  //               .name
                  //          : 'Выберите жанр',
                  //    id: inputValues ? inputValues.genreId : null,
                  // }}
                  primary
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
                     <SelectInput
                        border
                        padding="12px 10px 12px 19px"
                        width="100%"
                        defaultName="язык"
                        fontWeight="400"
                        color="#969696"
                        hover
                        empty={clearInputs && 'Выберите язык'}
                        genres={languageSelect}
                        onClick={languageFunc}
                        from={{
                           name: dataWithId
                              ? languageSelect.find(
                                   (el) => el.id === dataWithId.language
                                ).name
                              : 'Выберите язык',
                           id: dataWithId ? dataWithId.language : null,
                        }}
                        primary
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
                        <BestsellerCheckBox
                           label="Бестселлер"
                           onChange={setBestSeller}
                           checked={isChecked}
                           id="bestseller"
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
                     <LabelStyle htmlFor="quantityOfBook">
                        Кол-во <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        // data="quantityOfBook"
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
