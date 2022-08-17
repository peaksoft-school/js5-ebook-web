import { useRef, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import Checkbox from '../../Components/UI/checkBox/CheckBox'
import Button from '../../Components/UI/Button/Button'
import Textarea from './Textarea'
import InputText from '../../Components/UI/Inputs/InputText'
import bookAction from '../../store/slices/addBookSlice'
import SelectSmall from '../../Components/UI/Select'

export const inputValuesForState = {
   name: '',
   author: '',
   genre: '',
   publishingHouse: '',
   description: '',
   fragment: '',
   pageSize: '',
   price: '',
   yearOfIssue: '',
   discount: '',
}
const paperInputValues = {
   ...inputValuesForState,
   amount: '',
}

const PaperBookForm = ({ images }) => {
   const [inputValues, setInputValues] = useState(paperInputValues)
   const dispatch = useDispatch()
   const [showSnackbar, setShowSnackbar] = useState(null)

   const refId = useRef()

   const handleChangeInput = (e) => {
      const { name, value } = e.target
      setInputValues({ ...inputValues, [name]: value })
   }
   const isFormValid = () => {
      const validateValues =
         inputValues.name.length >= 1 &&
         inputValues.author.length >= 1 &&
         inputValues.genre.length >= 1 &&
         inputValues.publishingHouse.length >= 1 &&
         inputValues.aboutbook.length >= 1 &&
         inputValues.fragment.length >= 1 &&
         inputValues.size.length >= 1 &&
         inputValues.price.length >= 1 &&
         inputValues.discount.length >= 1

      const validateImages = images.mainImg.length >= 1
      return validateValues && validateImages
   }

   const postToBack = {
      mainImage: 'string',
      secondImage: 'string',
      thirdImage: 'string',
      name: 'er',
      genreId: 3,
      price: 10,
      author: 'fantastic',
      description: 'string',
      language: 'KYRGYZ',
      yearOfIssue: 20,
      discount: 120,
      bestseller: true,
      fragment: 'string',
      pageSize: 120,
      publishingHouse: 'string',
      quantityOfBook: 3,
   }

   const clickHandle = async () => {
      fetch(
         'http://ebook-env.eba-kbrgztwq.eu-central-1.elasticbeanstalk.com/api/book/save/paperBook',
         {
            method: 'POST',
            headers: {
               Authorization:
                  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY2MDc1MTM4OSwiaWF0IjoxNjYwNzQ3Nzg5LCJ1c2VybmFtZSI6InN0cmluZyJ9.ZG6sbi9soBpkeLq1_X7sQUmg5FtExYY8L3fYkpN6Ehw',
               'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(postToBack),
         }
      )
         .then((response) => {
            console.log(response)
            return response.json()
         })
         .then((data) => {
            console.log(data)
         })
         .catch((error) => {
            console.log(error.message)
         })

      fetch(
         'http://ebook-env.eba-kbrgztwq.eu-central-1.elasticbeanstalk.com/api/book/save/paperBook'
      )
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
         })

      if (isFormValid()) {
         dispatch(
            bookAction.addBook({
               ...inputValues,
               ...images,
               typeBook: 'paperbook',
            })
         )
         dispatch(bookAction.deleteImage())
         setShowSnackbar(true)

         setInputValues({
            name: '',
            author: '',
            genre: '',
            publishingHouse: '',
            description: '',
            fragment: '',
            pageSize: '',
            price: '',
            yearOfIssue: '',
            discount: '',
         })
      } else {
         setShowSnackbar(false)
      }
   }

   const [selectedFile, setSelectedFile] = useState()
   console.log(selectedFile)
   const handleSubmission = (e) => {
      e.preventDefault()
      console.log(images.mainImg)
      const formData = new FormData()
      formData.append('file', images)
      fetch(
         'http://ebook-env.eba-kbrgztwq.eu-central-1.elasticbeanstalk.com/api/file/upload',
         {
            method: 'POST',
            headers: {
               Authorization: `bearer+eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY2MDU5MjE5NywiaWF0IjoxNjYwNTg4NTk3LCJ1c2VybmFtZSI6ImZrZWlvQGdtYWlsLmNvbSJ9.pBZlWmVmMoMZQ7LhV0l8JgI8hOchq_rMJtc3p4tRl00`,
            },
            body: formData,
         }
      )
         .then((response) => response.json())
         .then((result) => {
            console.log('Success:', result)
            setSelectedFile(result)
         })
         .catch((error) => {
            console.error('Error:', error)
         })
   }

   const arr = [
      { name: 'kyrgyzstan', id: 'w1' },
      { name: 'Russion', id: 'w2' },
      { name: 'English', id: 'w3' },
   ]

   return (
      <>
         <SelectSmall arr={arr} />
         <form onSubmit={handleSubmission}>
            <button type="submit">forma</button>
            <img src={images.secondImg.link} alt={images.mainImg} />
         </form>
         {showSnackbar && <h1>Uspeshno</h1>}
         {showSnackbar === false && <h1>Oshibka</h1>}
         <InputWrapper ref={refId} onSubmit={clickHandle}>
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
               <LabelStyle htmlFor="genre">
                  Выберите жанр <strong>*</strong>
               </LabelStyle>
               <InputText
                  placeholder="Литература, роман, стихи..."
                  value={inputValues.genre}
                  onChange={handleChangeInput}
                  name="genre"
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
                  onChange={handleChangeInput}
                  value={inputValues.description}
                  name="description"
                  title="О книге"
                  placeholder="Напишите о книге"
                  maxLength="1234"
               />
               <Textarea
                  onChange={handleChangeInput}
                  value={inputValues.fragment}
                  name="fragment"
                  title="Фрагмент книги"
                  placeholder="Напишите фрагмент книги"
                  maxLength="9234"
               />
            </InputDiv>
            <div>
               <SelectWrapper>
                  <SelectDiv>
                     <LabelStyle>
                        Язык <strong>*</strong>
                     </LabelStyle>
                     <SelectStyle onChange={handleChangeInput} name="language">
                        <option>Русский</option>
                        <option>Кыргызский</option>
                        <option>Английский</option>
                     </SelectStyle>
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
                     />
                     <Bestssler>
                        <Checkbox label="Бестселлер" />
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
                        name="yearOfIssue"
                     />
                     <LabelStyle htmlFor="amount">
                        Кол-во <strong>*</strong>
                     </LabelStyle>
                     <InputText
                        data="amount"
                        onChange={handleChangeInput}
                        value={inputValues.amount}
                        textAlign="end"
                        placeholder="шт"
                        name="amount"
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
                     />
                  </SelectDiv>
               </SelectWrapper>
            </div>
         </InputWrapper>
         <ButtonDiv>
            <Button width="160px" onClick={clickHandle}>
               Отправить
            </Button>
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
