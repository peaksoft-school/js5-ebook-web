import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import Icon from '../../../assets/icons/Vector.svg'

function ImagePicker({ onChange, id, putUrl, name }) {
   const dataWithId = useSelector((store) => store.vendorMainPage.allBooks)
   const { clearInputs } = useSelector((store) => store.vendorMainPage)

   const [icon, setIcon] = useState()
   const [putIcon, setPutIcon] = useState()
   const [img, setImg] = useState(true)
   const filesRef = useRef()

   useEffect(() => {
      if (dataWithId && img) {
         setPutIcon(putUrl)
      }
      if (!dataWithId) {
         setPutIcon('')
      }
   })

   const iconHandleChange = (e) => {
      if (!filesRef.current.files[0]) {
         return
      }
      const name = filesRef.current.files[0]
      if (filesRef.current.files[0].size >= 1000000) {
         onChange(-1, e)
         return
      }
      const file = URL.createObjectURL(name)
      setIcon(file)
      onChange(filesRef.current.files[0], e)
   }

   const deleteFileHandler = () => {
      filesRef.current.value = ''
      setIcon('')
      setPutIcon('')
      setImg(false)
   }
   useEffect(() => {
      if (clearInputs) {
         setIcon('')
         filesRef.current.value = ''
         setPutIcon('')
      }
   }, [clearInputs])

   return (
      <ImageContainer primary={icon || putIcon}>
         <InputLabel htmlFor={id} primary={icon || putIcon} />
         <InputFile
            type="file"
            id={id}
            name={name}
            ref={filesRef}
            onChange={iconHandleChange}
            accept="image/jpeg,image/png,image/gif"
         />
         <DeleteFile onClick={deleteFileHandler}>удалить</DeleteFile>
      </ImageContainer>
   )
}

export default ImagePicker

const DeleteFile = styled.button`
   border: none;
   position: absolute;
   background-color: rgba(0, 0, 0, 0);
   bottom: 30px;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 18px;
   color: #fff;
   z-index: 10;
   display: none;
   cursor: pointer;
   &:hover {
      text-decoration: underline;
      color: #f34901;
   }
`

const InputLabel = styled.label`
   /* border: 1px solid red; */
   display: block;
   width: 67px;
   height: 61px;
   background-image: url(${Icon});
   background-repeat: no-repeat;
   cursor: pointer;
   position: absolute;
   z-index: 100;
   ${(props) =>
      props.primary &&
      css`
         /* border: 1px solid red; */
         height: 1.2rem;
         background-image: none;
         position: relative;
         margin-top: 213px;
         display: none;
         &:after {
            content: 'Заменить';
            position: absolute;
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 18px;
            color: #fff;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
         }
         &:hover:after {
            text-decoration: underline;
            color: #f34901;
         }
      `}
`

const ImageContainer = styled.div`
   height: 312px;
   width: 235px;
   /* width: 18.35%; */
   background-color: #ececec;
   background-repeat: no-repeat;
   background-position: 50% 50%;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   ${(props) =>
      props.primary &&
      css`
         background-image: url(${props.primary});
         &:after {
            display: none;
         }
         &:hover::after {
            content: '';
            display: block;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            /* cursor: pointer; */
         }
         &:hover {
            align-items: flex-start;
         }
         &:hover > label {
            display: block;
         }
         &:hover > button {
            display: block;
         }
      `}
   &:hover {
      background-color: #e0e0e0;
   }
   &:after {
      content: 'Нажмите на иконку чтобы загрузить или перетащите фото';
      position: absolute;
      top: 70%;
      left: 0%;
      text-align: center;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 14px;
      color: #a6a6a6;
      padding-left: 30px;
      padding-right: 30px;
   }
`
const InputFile = styled.input`
   /* border: 1px solid red; */
   height: 0;
   width: 0;
   &:hover {
      cursor: pointer;
   }
`
