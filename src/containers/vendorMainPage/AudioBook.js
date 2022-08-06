import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import FileUploadButton from '../../Components/UI/uploadaudio/FileUploadButton'
import Button from '../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../Components/UI/Inputs/InputText'
import CheckBox from '../../Components/UI/checkBox/CheckBox'
import bookAction from '../../store/slices/addBookSlice'
import {
   ButtonDiv,
   InputDiv,
   InputWrapper,
   LabelStyle,
   SelectStyle,
} from './PaperBook'

const audioBookInputValues = {
   bookname: '',
   author: '',
   genre: '',
   aboutbook: '',
   data: '',
   duration: '',
   minute: '',
   second: '',
   price: '',
   discount: '',
}

const allAudioRecordingValues = {
   audioFragment: '',
   audioRecording: '',
}

const AudioBook = ({ images, onClick }) => {
   const [audioValues, setAudioValues] = useState(allAudioRecordingValues)
   const [inputValues, setInputValues] = useState(audioBookInputValues)

   const dispatch = useDispatch()

   const saveAudioValue = (audio, e) => {
      const { name } = e.target
      setAudioValues({ ...audioValues, [name]: URL.createObjectURL(audio) })
   }

   const handleChange = (e) => {
      const { name, value } = e.target
      setInputValues({ ...inputValues, [name]: value })
   }

   const validateValues =
      inputValues.bookname.length >= 1 &&
      inputValues.author.length >= 1 &&
      inputValues.genre.length >= 1 &&
      inputValues.aboutbook.length >= 1 &&
      inputValues.duration.length >= 1 &&
      inputValues.minute.length >= 1 &&
      inputValues.second.length >= 1 &&
      inputValues.price.length >= 1 &&
      inputValues.data.length >= 1

   const validateImages = images.mainImg.length >= 1
   const clickHandle = () => {
      onClick()
      if (validateValues && validateImages) {
         dispatch(
            bookAction.addBook({
               ...inputValues,
               images,
               audioValues,
               typeBook: 'audiobook',
            })
         )
         // setMessage(true)
         console.log(1111)
      } else {
         console.log(333)
      }

      setInputValues({
         bookname: '',
         author: '',
         genre: '',
         aboutbook: '',
         data: '',
         duration: '',
         minute: '',
         second: '',
         size: '',
         price: '',
         discount: '',
      })
   }

   return (
      <div>
         <InputWrapper>
            <InputDiv>
               <LabelStyle htmlFor="bookname">
                  Название книги <strong>*</strong>
               </LabelStyle>
               <InputText
                  onChange={handleChange}
                  id="bookname"
                  name="bookname"
                  placeholder="Напишите полное название книги"
                  value={inputValues.namebook}
               />
               <LabelStyle htmlFor="author">
                  ФИО автора <strong>*</strong>
               </LabelStyle>
               <InputText
                  id="author"
                  value={inputValues.author}
                  onChange={handleChange}
                  name="author"
                  placeholder="Напишите ФИО автора"
               />
               <LabelStyle htmlFor="genre">
                  Выберите жанр <strong>*</strong>
               </LabelStyle>
               <InputText
                  id="genre"
                  value={inputValues.genre}
                  name="genre"
                  onChange={handleChange}
                  placeholder="Литература, роман, стихи..."
               />
               <Textarea
                  title="О книге"
                  onChange={handleChange}
                  placeholder="Напишите о книге"
                  value={inputValues.aboutbook}
                  name="aboutbook"
                  maxLength="1234"
               />
            </InputDiv>
            <SelectWrapper>
               <SelectDiv>
                  <PriceDiv>
                     <LabelStyle>
                        Язык <strong>*</strong>
                     </LabelStyle>
                     <SelectStyle onChange={handleChange} name="language">
                        <option>Русский</option>
                        <option>Кыргызский</option>
                        <option>Английский</option>
                     </SelectStyle>
                  </PriceDiv>
                  <PriceDiv>
                     <LabelStyle htmlFor="data">
                        Год выпуска <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="data"
                        name="data"
                        onChange={handleChange}
                        textAlign="end"
                        placeholder="гг"
                        value={inputValues.data}
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
                        onChange={handleChange}
                        textAlign="end"
                        placeholder="ч"
                        value={inputValues.duration}
                     />
                  </InnerSelectDIv>
                  <TimeInputs>
                     <InputText
                        onChange={handleChange}
                        textAlign="end"
                        placeholder="мин"
                        name="minute"
                        value={inputValues.minute}
                     />
                  </TimeInputs>
                  <TimeInputs>
                     <InputText
                        onChange={handleChange}
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
                        onChange={handleChange}
                        value={inputValues.price}
                     />
                  </PriceDiv>
                  <PriceDiv>
                     <LabelStyle htmlFor="discount">
                        Скидка <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        id="discount"
                        onChange={handleChange}
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
                        onChange={saveAudioValue}
                        title="Загрузите фрагмент аудиозаписи"
                        name="audioFragment"
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
                        onChange={saveAudioValue}
                        title="Загрузите аудиозапись "
                        name="audioRecording"
                        accept="audio/mpeg"
                     >
                        Загрузите аудиозапись
                     </FileUploadButton>
                  </InnerUplFile>
               </UploadFileDiv>
            </SelectWrapper>
         </InputWrapper>
         <ButtonDiv>
            <Button onClick={clickHandle}>Отправить</Button>
         </ButtonDiv>
      </div>
   )
}
export default AudioBook

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
