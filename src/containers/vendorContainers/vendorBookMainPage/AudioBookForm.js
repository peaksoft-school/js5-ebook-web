import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import FileUploadButton from '../../../Components/UI/uploadaudio/FileUploadButton'
import Button from '../../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../../Components/UI/Inputs/InputText'
import CheckBox from '../../../Components/UI/checkBox/CheckBox'
import bookAction from '../../../store/slices/addBookSlice'
import { ButtonDiv, InputDiv, InputWrapper, LabelStyle } from './PaperBookForm'
import { addAudioBook } from '../../../store/createActions/addBookActions'
import Selected from '../../../Components/UI/Select'
import { putVendorBook } from '../../../store/createActions/vendorMainPagesActions'
import Snackbar from '../../../Components/UI/Snackbar'

const allAudioRecordingValues = {
   fragment: '',
   audioBook: '',
}

const languageSelect = [
   { name: 'KYRGYZ', id: 1 },
   { name: 'RUSSIAN', id: 2 },
   { name: 'ENGLISH', id: 3 },
]

const AudioBookForm = ({ images }) => {
   const jenre = useSelector((store) => store.addbook.jenreId)
   const dataWithId = useSelector((store) => store.vendorMainPage.audioBooks)
   const dispatch = useDispatch()
   const [audioValues, setAudioValues] = useState(allAudioRecordingValues)
   const [open, setOpen] = useState(false)

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
   })

   const changeAudioValue = (audio, e) => {
      const { name } = e.target
      setAudioValues({ ...audioValues, [name]: audio })
   }

   const handleChangeInput = (e) => {
      const { name, value } = e.target
      setInputValues({ ...inputValues, [name]: value })
   }

   const isFormValid = () => {
      const isInputsAreValid =
         inputValues.name.length >= 1 &&
         inputValues.author.length >= 1 &&
         inputValues.genreId > 0 &&
         inputValues.description.length >= 1 &&
         inputValues.duration.length >= 1 &&
         inputValues.minute.length >= 1 &&
         inputValues.second.length >= 1 &&
         inputValues.yearOfIssue.length >= 1 &&
         inputValues.price.length >= 1

      return isInputsAreValid && images.mainImage
   }
   const clickSendFormValues = async () => {
      if (isFormValid()) {
         dispatch(bookAction.deleteImage())
         dispatch(addAudioBook(inputValues, images, audioValues))

         setInputValues({
            name: '',
            author: '',
            genreId: '',
            description: '',
            yearOfIssue: '',
            duration: '',
            minute: '',
            second: '',
            size: '',
            price: '',
            discount: '',
         })
      } else {
         setOpen(true)
      }
   }

   const updateForms = () => {
      if (isFormValid()) {
         dispatch(putVendorBook(inputValues, images, audioValues))
      } else {
         setOpen(true)
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
               <LabelStyle htmlFor="genreId">
                  Выберите жанр <strong>*</strong>
               </LabelStyle>
               <Selected
                  variant
                  onChange={(genreId) =>
                     setInputValues({ ...inputValues, genreId })
                  }
                  title={jenre}
               />
               <Textarea
                  title="О книге"
                  onChange={handleChangeInput}
                  placeholder="Напишите о книге"
                  value={inputValues.description}
                  name="description"
                  maxLength="1234"
               />
            </InputDiv>
            <SelectWrapper>
               <SelectDiv>
                  <PriceDiv>
                     <LabelStyle>
                        Язык <strong>*</strong>
                     </LabelStyle>
                     <Selected
                        onChange={(language) =>
                           setInputValues({ ...inputValues, language })
                        }
                        title={languageSelect}
                     />
                  </PriceDiv>
                  <PriceDiv>
                     <LabelStyle htmlFor="yearOfIssue">
                        Год выпуска <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="yearOfIssue"
                        name="yearOfIssue"
                        onChange={handleChangeInput}
                        textAlign="end"
                        placeholder="гг"
                        value={inputValues.yearOfIssue}
                     />
                  </PriceDiv>
               </SelectDiv>
               <LabelStyleTime htmlFor="duration">
                  <LabelStyle>
                     Длительность <strong>*</strong>
                  </LabelStyle>
               </LabelStyleTime>
               <SelectDiv>
                  <InnerSelectDIv>
                     <InputText
                        id="duration"
                        name="duration"
                        onChange={handleChangeInput}
                        textAlign="end"
                        placeholder="ч"
                        value={inputValues.duration}
                     />
                  </InnerSelectDIv>
                  <TimeInputs>
                     <InputText
                        onChange={handleChangeInput}
                        textAlign="end"
                        placeholder="мин"
                        name="minute"
                        value={inputValues.minute}
                     />
                  </TimeInputs>
                  <TimeInputs>
                     <InputText
                        onChange={handleChangeInput}
                        textAlign="end"
                        name="second"
                        placeholder="сек"
                        value={inputValues.second}
                     />
                  </TimeInputs>
               </SelectDiv>
               <CheckBoxDiv>
                  <CheckBox label="Бестселлер" />
               </CheckBoxDiv>
               <SelectDiv>
                  <PriceDiv>
                     <LabelStyle htmlFor="price">
                        Стоимость <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="price"
                        textAlign="end"
                        placeholder="сом"
                        name="price"
                        onChange={handleChangeInput}
                        value={inputValues.price}
                     />
                  </PriceDiv>
                  <PriceDiv>
                     <LabelStyle htmlFor="discount">
                        Скидка <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="discount"
                        onChange={handleChangeInput}
                        textAlign="end"
                        name="discount"
                        placeholder="%"
                        value={inputValues.discount}
                     />
                  </PriceDiv>
               </SelectDiv>
               <UploadFileDiv>
                  <InnerUplFile>
                     <LabelStyle>
                        Загрузите фрагмент аудиозаписи <strong>*</strong>
                     </LabelStyle>
                     <FileUploadButton
                        onChange={changeAudioValue}
                        title="Загрузите фрагмент аудиозаписи"
                        name="fragment"
                        accept="audio/mpeg"
                     >
                        Загрузите аудиозапись
                     </FileUploadButton>
                  </InnerUplFile>
                  <InnerUplFile>
                     <LabelStyle>
                        Загрузите аудиозаписи <strong>*</strong>
                     </LabelStyle>
                     <FileUploadButton
                        onChange={changeAudioValue}
                        title="Загрузите аудиозапись "
                        name="audioBook"
                        accept="audio/mpeg"
                     >
                        Загрузите аудиозапись
                     </FileUploadButton>
                  </InnerUplFile>
               </UploadFileDiv>
            </SelectWrapper>
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
export default AudioBookForm

const SelectWrapper = styled('div')`
   width: 398px;
   flex-direction: column;
`
const SelectDiv = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   outline: none;
`

const InnerSelectDIv = styled('div')`
   width: 30%;
`
const LabelStyleTime = styled('div')`
   display: block;
   margin: 26px 0px 10px 0px;
`
const TimeInputs = styled('div')`
   width: 30%;
   height: 100%;
   display: flex;
   align-items: flex-end;
`
const PriceDiv = styled('div')`
   width: 44%;
   display: flex;
   flex-direction: column;
`
const UploadFileDiv = styled('div')`
   height: 200px;
`
const InnerUplFile = styled('div')`
   margin-top: 26px;
   color: #222222;
   font-size: 16px;
   font-style: normal;
   font-family: 'Open Sans';
   font-weight: 400;
   line-height: 20.8px;
`
const CheckBoxDiv = styled('div')`
   margin-top: 2.6vh;
   margin-bottom: -1vh;
`
