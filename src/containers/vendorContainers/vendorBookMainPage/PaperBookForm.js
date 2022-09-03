import { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../../../Components/UI/checkBox/CheckBox'
import Button from '../../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../../Components/UI/Inputs/InputText'
import { addPaperBook } from '../../../store/createActions/addBookActions'
import bookAction from '../../../store/slices/addBookSlice'
import Selected from '../../../Components/UI/Select'
import SelectBooks from '../../Admin/SelectBooks'
import { setGenres } from '../../../store/slices/globalSlices'
import { putVendorBook } from '../../../store/createActions/vendorMainPagesActions'
import Snackbar from '../../../Components/UI/Snackbar'

const languageSelect = [
   { name: 'KYRGYZ', id: 1 },
   { name: 'RUSSIAN', id: 2 },
   { name: 'ENGLISH', id: 3 },
]

export const inputValuesForState = {
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

const PaperBookForm = ({ images }) => {
   const dispatch = useDispatch()
   const jenre = useSelector((store) => store.addbook.jenreId)
   const dataWithId = useSelector((store) => store.vendorMainPage.paperBooks)
   const [isChecked, setIsChecked] = useState()

   const [inputValues, setInputValues] = useState({
      name: dataWithId ? dataWithId.bookName : '',
      author: dataWithId ? dataWithId.author : '',
      publishingHouse: dataWithId ? dataWithId.publishingHouse : '',
      description: dataWithId ? dataWithId.description : '',
      fragment: dataWithId ? dataWithId.fragment : '',
      pageSize: dataWithId ? dataWithId.pageSize : 0,
      price: dataWithId ? dataWithId.price : 0,
      genreId: dataWithId ? dataWithId.genreId : 0,
      yearOfIssue: dataWithId ? dataWithId.yearOfIssue : 0,
      quantityOfBook: dataWithId ? dataWithId.quantityOfBook : 0,
      language: dataWithId ? dataWithId.language : '',
      discount: dataWithId ? dataWithId.discount : '',
   })

   useEffect(() => {
      dispatch(setGenres())
   }, [])

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

      return validateValues && images.mainImage
   }
   const [open, setOpen] = useState(false)

   const clickSendFormValues = async () => {
      if (isFormValid()) {
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
         setOpen(!open)
      }
   }

   const updateForms = async () => {
      if (isFormValid()) {
         dispatch(putVendorBook(inputValues, images))
      } else {
         setOpen(!open)
      }
   }

   const handleToClose = () => {
      setOpen(false)
   }

   return (
      <>
         <Snackbar
            width="400px"
            message="Пожалуйста, заполните все поля"
            severity="error"
            open={open}
            handleClose={handleToClose}
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
               <Selected
                  variant
                  onChange={(genreId) =>
                     setInputValues({ ...inputValues, genreId })
                  }
                  title={jenre}
               />
               <SelectBooks />
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
                     <Selected
                        onChange={(language) =>
                           setInputValues({ ...inputValues, language })
                        }
                        title={languageSelect}
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
                        data="quantityOfBook"
                        onChange={handleChangeInput}
                        value={inputValues.quantityOfBook}
                        textAlign="end"
                        placeholder="шт"
                        name="quantityOfBook"
                     />
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
            </div>
         </InputWrapper>
         <ButtonDiv>
            {!dataWithId ? (
               <Button width="160px" onClick={clickSendFormValues}>
                  Отправить
               </Button>
            ) : (
               <Button
                  width="160px"
                  onClick={updateForms}
                  background="black"
                  variant="universal"
               >
                  PUT
               </Button>
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
