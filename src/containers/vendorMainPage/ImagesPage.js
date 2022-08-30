import { styled } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ImagePicker from '../../Components/UI/imagePicker/imagePicker'
import { WrapImages } from './AddBookPage'

const allImages = {
   mainImg: '',
   secondImg: '',
   thirdImg: '',
}

const ImagesPage = () => {
   const [images, setImages] = useState(allImages)
   const { deleteImage } = useSelector((state) => state.addbook)
   const saveImageValue = (imageFile, e) => {
      const { name } = e.target
      setImages({ ...images, [name]: URL.createObjectURL(imageFile) })
   }
   return (
      <div>
         <ImagesPickerStyle>
            <div>
               <ImagePicker
                  onDelete={deleteImage}
                  onChange={saveImageValue}
                  name="mainImg"
                  id="e1"
               />
               <p>Главное фото</p>
            </div>
            <div>
               <ImagePicker
                  onDelete={deleteImage}
                  onChange={saveImageValue}
                  name="secondImg"
                  id="e2"
               />
               <p>2</p>
            </div>
            <div>
               <ImagePicker
                  onDelete={deleteImage}
                  onChange={saveImageValue}
                  name="thirdImg"
                  id="e3"
               />
               <p>3</p>
            </div>
         </ImagesPickerStyle>
      </div>
   )
}
export default ImagesPage

const ImagesPickerStyle = styled(WrapImages)`
   width: 750px;
   text-align: center;
   color: grey;
   display: flex;
   flex-wrap: nowrap;
`
