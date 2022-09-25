import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PaperBookForm from './PaperBookForm'
import ImagePicker from '../../../Components/UI/imagePicker/imagePicker'
import RadioButton from '../../../Components/UI/RadioButton'
import { snackbarActions } from '../../../store/createActions/snackbarActions'
import HeaderMainPage from '../vendorMainPage/HeaderMainPage'
import AudioBookForm from './AudioBookForm'
import ElectronicBookForm from './ElectronicBookForm'
import GetSnackbar from '../../../Components/UI/snackbar/GetSnackbar'
import bookAction from '../../../store/slices/addBookSlice'
import Spinner from '../../../Components/UI/Spinner'
import BreadCrumbs from '../../../Components/UI/breadCrumbs/Breadcrumbs'
import { setGenres } from '../../../store/slices/globalSlices'

const AddBookPage = () => {
   const dataWithId = useSelector((store) => store.vendorMainPage.allBooks)
   const { bookType } = useSelector((store) => store.vendorMainPage)
   const { addBookMessage, addBookStatus } = useSelector(
      (store) => store.addbook
   )
   const dispatch = useDispatch()
   const editData = dataWithId !== null ? dataWithId : ''
   const [images, setImages] = useState({
      mainImage: editData ? dataWithId.mainImage : '',
      secondImage: editData.secondImage ? dataWithId.secondImage : '',
      thirdImage: editData.thirdImage ? dataWithId.thirdImage : '',
   })
   const [radio, setRadio] = useState('Бумажная')
   const [imageSnack, setImageSnack] = useState(null)

   useEffect(() => {
      if (bookType) {
         setRadio(bookType)
      }
   }, [bookType])

   useEffect(() => {
      dispatch(setGenres())
   }, [])

   useEffect(() => {
      dispatch(snackbarActions())
   }, [addBookMessage, imageSnack])

   useEffect(() => {
      const time = setTimeout(() => {
         setImageSnack(false)
      }, 3000)
      return () => clearTimeout(time)
   }, [imageSnack])

   const saveImageValue = (imageFile, e) => {
      if (imageFile === -1) {
         setImageSnack(true)
         return
      }
      const { name } = e.target
      setImages({ ...images, [name]: imageFile })
   }

   const getBookFormsByType = () => {
      let bookComponents
      if (radio === 'Бумажная') {
         bookComponents = <PaperBookForm images={images} />
      }
      if (radio === 'Аудиокнига') {
         bookComponents = <AudioBookForm images={images} />
      }
      if (radio === 'Электронная книга') {
         bookComponents = <ElectronicBookForm images={images} />
      }
      return bookComponents
   }
   const pathTranslate = {
      main: 'Главная',
      addBook: 'Добавить книгу',
   }

   const closeSnackbarFunc = () => {
      dispatch(bookAction.cleanStatusMessage())
   }

   return (
      <ContainerDiv>
         {addBookStatus === 'pending' && <Spinner />}
         <HeaderMainPage />
         <BreadBlock>
            <BreadCrumbs translate={pathTranslate} />
         </BreadBlock>
         <GetSnackbar
            open={addBookMessage}
            message={addBookMessage}
            variant={
               (addBookStatus === 'error' && 'error') ||
               (addBookStatus === 'success' && 'success')
            }
            width="400px"
            handleClose={closeSnackbarFunc}
         />
         <GetSnackbar
            open={imageSnack}
            message="image size must be > 1MB"
            variant={addBookStatus === 'error' ? 'error' : 'success'}
         />
         <div>
            <ThreeImagesDiv>
               Загрузите 3 фото <strong>*</strong>
            </ThreeImagesDiv>
            <WrapImages>
               <ImagesPickerStyle>
                  <div>
                     <ImagePicker
                        onChange={saveImageValue}
                        name="mainImage"
                        putUrl={images.mainImage}
                        id="e1"
                     />
                     <p>Главное фото</p>
                  </div>
                  <div>
                     <ImagePicker
                        onChange={saveImageValue}
                        name="secondImage"
                        putUrl={images.secondImage}
                        id="e2"
                     />
                     <p>2</p>
                  </div>
                  <div>
                     <ImagePicker
                        onChange={saveImageValue}
                        name="thirdImage"
                        putUrl={images.thirdImage}
                        id="e3"
                     />
                     <p>3</p>
                  </div>
               </ImagesPickerStyle>
               <TextAboutImg>
                  <InnerTextAboutImg>
                     <span>
                        Публикации с качественными фото получают больше
                        откликов!
                     </span>
                     <StylePtag>Фотографии должны быть:</StylePtag>
                     <ul>
                        <li>
                           Фон должен быть нейтральным, без теней, рисунков,
                           посторонних объектов или засветов
                        </li>
                        <li>Фото обязательно должно быть цветным</li>
                        <li>Фото </li>
                     </ul>
                  </InnerTextAboutImg>
               </TextAboutImg>
            </WrapImages>
            <div>
               <TipDiv>Тип</TipDiv>
               <CheckboxDiv>
                  <ChildrenCheckbox>
                     <RadioButton
                        value="Бумажная"
                        isSelect={radio === 'Бумажная'}
                        label="Бумажная"
                        id="1"
                        onChange={(e) => {
                           setRadio(e.target.value)
                        }}
                     />
                  </ChildrenCheckbox>
                  <ChildrenCheckbox>
                     <RadioButton
                        id="1"
                        value="Аудиокнига"
                        label="Аудиокнига"
                        isSelect={radio === 'Аудиокнига'}
                        onChange={(e) => {
                           setRadio(e.target.value)
                        }}
                     />
                  </ChildrenCheckbox>
                  <ChildrenCheckbox>
                     <RadioButton
                        id="1"
                        label="Электронная книга"
                        isSelect={radio === 'Электронная книга'}
                        value="Электронная книга"
                        onChange={(e) => {
                           setRadio(e.target.value)
                        }}
                     />
                  </ChildrenCheckbox>
               </CheckboxDiv>
            </div>
            {getBookFormsByType()}
         </div>
      </ContainerDiv>
   )
}
export default AddBookPage

const BreadBlock = styled('div')`
   /* border: 1px solid red; */
   padding-bottom: 30px;
`

const ContainerDiv = styled('div')`
   width: 100%;
   margin: auto;

   & strong {
      color: red;
   }
`
const ThreeImagesDiv = styled('p')`
   margin: 0px 0px 30px 0px;
   font-size: 18px;
   line-height: 23.4px;
   font-family: 'Open Sans';
   color: #969696;
`
export const WrapImages = styled('div')`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`
const ImagesPickerStyle = styled(WrapImages)`
   width: 750px;
   text-align: center;
   color: grey;
   display: flex;
   flex-wrap: nowrap;
`
const TextAboutImg = styled('div')`
   width: 429px;
   height: 312px;
   background-color: #ececec;

   & ul {
      margin-left: -4vh;
      font-size: 14px;
      text-decoration-color: red;
   }
   & li {
      margin-top: 18px;
      text-decoration-color: red;
      list-style-type: style color red;
      list-style: none;
   }
   & ul li::before {
      content: '●';
      color: red;
      margin-right: 10px;
   }
`
const StylePtag = styled('p')`
   font-weight: 600;
   color: #222222;
`
const InnerTextAboutImg = styled('div')`
   width: 399px;
   margin: 26px auto;
   font-size: 16px;
   font-family: 'Open Sans';
   line-height: 21.97px;
   line-height: 20.8px;
`
const CheckboxDiv = styled('div')`
   display: flex;
   width: 570px;
   justify-content: space-between;
`
const ChildrenCheckbox = styled('div')`
   margin-left: 0.6vh;
`
const TipDiv = styled('div')`
   display: inline-block;
   margin-top: 10.6vh;
   margin-bottom: 10px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 20.8px;
   color: #222222;
`
