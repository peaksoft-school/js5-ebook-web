import { useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import FileUploadButton from '../../../Components/UI/uploadaudio/FileUploadButton'
import Button from '../../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../../Components/UI/Inputs/InputText'
import CheckBox from '../../../Components/UI/checkBox/CheckBox'
import bookAction from '../../../store/slices/addBookSlice'
import { ButtonDiv, InputDiv, InputWrapper, LabelStyle } from './PaperBookForm'
import { addAudioBook } from '../../../store/createActions/addBookActions'
import { editeAudioBook } from '../../../store/createActions/vendorMainPagesActions'
import { snackbarActions } from '../../../store/createActions/snackbarActions'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
import SelectInput from './SelectInput'
import Spinner from '../../../Components/UI/Spinner'

const languageSelect = [
   { name: 'Кыргызский', id: 'KYRGYZ' },
   { name: 'Русский', id: 'RUSSIAN' },
   { name: 'Английский', id: 'ENGLISH' },
]

const AudioBookForm = ({ images }) => {
   const genre = useSelector((store) => store.globalValues.genres)
   const { stateSnackbar } = useSelector((store) => store.snackbar)
   const dataWithId = useSelector((store) => store.vendorMainPage.audioBooks)
   const { status } = useSelector((store) => store.addbook)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [audioValues, setAudioValues] = useState({
      fragment: dataWithId ? dataWithId.audioBookFragment : '',
      audioBook: dataWithId ? dataWithId.audioBook : '',
   })
   const [duration, setDuration] = useState({
      duration: dataWithId ? dataWithId.duration[0] : '',
      minute: dataWithId ? dataWithId.duration[1] : '',
      second: dataWithId ? dataWithId.duration[2] : '',
   })
   const durationTimer = `${
      duration.duration < 10 ? `${0}${duration.duration}` : duration.duration
   }:${duration.minute < 10 ? `${0}${duration.minute}` : duration.minute}:${
      duration.second < 10 ? `${0}${duration.second}` : duration.second
   }`

   const [inputValues, setInputValues] = useState({
      name: dataWithId ? dataWithId.bookName : '',
      author: dataWithId ? dataWithId.author : '',
      description: dataWithId ? dataWithId.description : '',
      price: dataWithId ? dataWithId.price : '',
      yearOfIssue: dataWithId ? dataWithId.yearOfIssue : '',
      discount: dataWithId ? dataWithId.discount : '',
      language: dataWithId ? dataWithId.language : '',
      genreId:
         dataWithId && genre
            ? genre.find((el) => el.name === dataWithId.genre).id
            : '',
   })

   console.log(inputValues)
   // const [genId, setGenId] = useState(null)
   // const [findGenre, setFindGenre] = useState(null)
   // const [lengText, setLengText] = useState('')

   // useEffect(() => {
   //    if (dataWithId) {
   //       setFindGenre(() => {
   //          return genre.find((el) => el.name === dataWithId.genre)
   //       })
   //    }
   // }, [dataWithId])

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

   const changeAudioValue = (audio, e) => {
      const { name } = e.target
      setAudioValues({ ...audioValues, [name]: audio })
   }

   // const formatLanguage = () => {
   //    let formation
   //    if (dataWithId ? dataWithId.language === 'KYRGYZ' : '') {
   //       formation = 'Кыргызский'
   //    }
   //    if (dataWithId ? dataWithId.language === 'RUSSIAN' : '') {
   //       formation = 'Русский'
   //    }
   //    if (dataWithId ? dataWithId.language === 'ENGLISH' : '') {
   //       formation = 'Английский'
   //    }
   //    return formation
   // }

   const handleChangeInput = (e) => {
      const { name, value } = e.target
      const date = new Date()
      if (name === 'discount' || name === 'yearOfIssue' || name === 'price') {
         if (value < 0) {
            return
         }
      }
      if (name === 'duration') {
         if (value < 0 || value > 23) {
            return
         }
      }
      if (name === 'minute' || name === 'second') {
         if (value < 0 || value > 60) {
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
      setDuration({ ...duration, [name]: value })
   }

   const isFormValid = () => {
      const isInputsAreValid =
         inputValues.name.length >= 1 &&
         inputValues.author.length >= 1 &&
         inputValues.genreId > 0 &&
         inputValues.description.length >= 1 &&
         inputValues.duration.length >= 1 &&
         inputValues.yearOfIssue.length >= 1 &&
         inputValues.price.length >= 1

      return isInputsAreValid && images.mainImage && audioValues.fragment
   }

   const clickSendFormValues = async () => {
      if (isFormValid()) {
         dispatch(
            addAudioBook({ inputValues, images, audioValues, durationTimer })
         )
         dispatch(bookAction.deleteImage())

         setInputValues({
            name: '',
            author: '',
            genreId: '',
            description: '',
            yearOfIssue: '',
            duration: '',
            minute: '',
            second: '',
            price: '',
            discount: '',
         })
         setDuration({
            duration: '',
            minute: '',
            second: '',
         })
      } else {
         dispatch(snackbarActions({ bron: 'exit' }))
      }
   }
   // const { bookId } = dataWithId !== null ? dataWithId : ''
   // const genreBook = dataWithId !== null ? dataWithId : ''
   // console.log(genreBook)
   const updateForms = () => {
      dispatch(
         editeAudioBook({
            inputValues,
            images,
            bookId: dataWithId && dataWithId.bookId,
            audioValues,
            navigate,
            durationTimer,
         })
      )
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
                  from={{
                     name:
                        genre && dataWithId
                           ? genre.find((el) => el.id === inputValues.genreId)
                                .name
                           : 'Выберите жанр',
                     id: inputValues ? inputValues.genreId : null,
                  }}
                  primary
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
                     <SelectInput
                        border
                        padding="12px 10px 12px 19px"
                        width="100%"
                        defaultName="язык"
                        fontWeight="400"
                        color="#969696"
                        hover
                        genres={languageSelect}
                        // name="язык"
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
                        type="number"
                     />
                  </PriceDiv>
               </SelectDiv>
               <LabelStyleTime htmlFor="duration">
                  <LabelStyle>Длительность</LabelStyle>
               </LabelStyleTime>
               <SelectDiv>
                  <TimerStan>
                     <InnerSelectDIv>
                        <InputText
                           id="duration"
                           name="duration"
                           onChange={handleChangeInput}
                           textAlign="end"
                           placeholder="ч"
                           value={duration.duration}
                           type="number"
                        />
                     </InnerSelectDIv>
                     {duration.duration > 30 && (
                        <ValidateStyle>menwe 30</ValidateStyle>
                     )}
                  </TimerStan>
                  <TimerStan>
                     <TimeInputs>
                        <InputText
                           onChange={handleChangeInput}
                           textAlign="end"
                           placeholder="мин"
                           name="minute"
                           value={duration.minute}
                           type="number"
                        />
                     </TimeInputs>
                     {duration.minute > 60 && (
                        <ValidateStyle>menwe 60</ValidateStyle>
                     )}
                  </TimerStan>
                  <TimerStan>
                     <TimeInputs>
                        <InputText
                           onChange={handleChangeInput}
                           textAlign="end"
                           name="second"
                           placeholder="сек"
                           value={duration.second}
                           type="number"
                        />
                     </TimeInputs>
                     {duration.second > 60 && (
                        <ValidateStyle>menwe 60</ValidateStyle>
                     )}
                  </TimerStan>
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
                        type="number"
                     />
                  </PriceDiv>
                  <PriceDiv>
                     <LabelStyle htmlFor="discount">Скидка</LabelStyle>
                     <InputText
                        id="discount"
                        onChange={handleChangeInput}
                        textAlign="end"
                        name="discount"
                        placeholder="%"
                        value={inputValues.discount}
                        type="number"
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
                        title="Загрузите"
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
   /* border: 1px solid red; */
`

const InnerSelectDIv = styled('div')`
   width: 100%;
`
const LabelStyleTime = styled('div')`
   display: block;
   margin: 26px 0px 10px 0px;
`
const TimeInputs = styled('div')`
   width: 100%;
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
export const PutDiv = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 300px;
`
const ValidateStyle = styled('span')`
   font-size: 12px;
   position: relative;
   top: 0px;
   width: 30%;
   color: red;
`
const TimerStan = styled('div')`
   width: 30%;
`
