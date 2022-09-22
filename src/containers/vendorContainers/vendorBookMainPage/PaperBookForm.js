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
import { putVendorBook } from '../../../store/createActions/vendorMainPagesActions'
import { snackbarActions } from '../../../store/createActions/snackbarActions'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
// import { setGenres } from '../../../store/slices/globalSlices'
import SelectInput from './SelectInput'
import Spinner from '../../../Components/UI/Spinner'

const languageSelect = [
   { name: 'Кыргызский', text: 'KYRGYZ', id: 1 },
   { name: 'Русский', text: 'RUSSIAN', id: 2 },
   { name: 'Английский', text: 'ENGLISH', id: 3 },
]

const PaperBookForm = ({ images }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const genre = useSelector((store) => store.globalValues.genres)
   const { stateSnackbar } = useSelector((store) => store.snackbar)
   const dataWithId = useSelector((store) => store.vendorMainPage.paperBooks)
   const { status } = useSelector((store) => store.addbook)
   const [isChecked, setIsChecked] = useState()
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
      language: dataWithId ? dataWithId.language : '',
      discount: dataWithId ? dataWithId.discount : '',
      genreId: dataWithId ? dataWithId.genre : '',
   })

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
   console.log(formatLanguage())

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
      if (!isFormValid()) {
         dispatch(addPaperBook(inputValues, images, isChecked))
         dispatch(bookAction.deleteImage())
         // setInputValues({
         //    name: '',
         //    author: '',
         //    genreId: '',
         //    publishingHouse: '',
         //    description: '',
         //    fragment: '',
         //    pageSize: '',
         //    price: '',
         //    yearOfIssue: '',
         //    discount: '',
         //    quantityOfBook: '',
         // })
      } else {
         dispatch(snackbarActions({ bron: 'exit' }))
      }
   }

   const [genId, setGenId] = useState(null)
   const [langText, setLangText] = useState(null)
   console.log(genId)
   console.log(langText)
   const { bookId } = dataWithId !== null ? dataWithId : ''
   // const genreId = dataWithId !== null ? dataWithId : ''
   const updateForms = async () => {
      dispatch(
         putVendorBook(
            { inputValues, images, bookId, langText, genId },
            navigate
         )
      )
   }

   // useEffect(() => {
   //    dispatch(setGenres())
   // }, [])

   console.log(dataWithId)

   const genreFunction = (genreId) => {
      setGenId(genreId)
      setInputValues({ ...inputValues, genreId })
   }
   const [re, setRe] = useState(false)
   console.log(re)
   useEffect(() => {
      // const a = genre ? genre.find((el) => el.name === dataWithId.genre) : ''
      // console.log(genre)
      // setGenId(a.id)
      // setLangText(dataWithId.language)
      dataFunc()
      setRe(true)
   }, [dataWithId])

   const dataFunc = () => {
      if (dataWithId) {
         const a = genre ? genre.find((el) => el.name === dataWithId.genre) : ''
         console.log(genre)
         setGenId(a.id)
         setLangText(dataWithId.language)
         console.log(999)
      }
   }

   const languageFunc = (language) => {
      setLangText(language)
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
                  padding="12px 10px 12px 19px"
                  width="100%"
                  hover
                  defaultName="Литература, роман, стихи..."
                  fontWeight
                  color="#969696"
                  height="400px"
                  onClick={(genreId, _, name) => genreFunction(genreId, name)}
                  genres={genre}
                  editeName={dataWithId ? dataWithId.genre : ''}
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
                        nameText=""
                        onClick={(_, language) => languageFunc(language)}
                        // onClick={(_, language) =>
                        //    setInputValues({ ...inputValues, language })
                        // }
                        genres={languageSelect}
                        editeName={dataWithId ? formatLanguage() : ''}
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
