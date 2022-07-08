import { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import Icon from '../../../assets/icons/Vector.svg'

function ImagePicker() {
   const [icon, setIcon] = useState()
   const filesRef = useRef()
   const iconHandleChange = (e) => {
      setIcon(e.target.value)
      // console.log(filesRef.current.files[0].name)
      setIcon(true)
   }
   return (
      <ImageContainer primary={icon}>
         <InputFile type="file" ref={filesRef} onChange={iconHandleChange} />
      </ImageContainer>
   )
}

export default ImagePicker

const ImageContainer = styled.div`
   height: 312px;
   width: 235px;
   background-color: #ececec;
   background-image: url(${Icon});
   background-repeat: no-repeat;
   background-position: 50% 50%;
   position: relative;
   ${(props) =>
      props.primary &&
      css`
         background-image: red;
      `}
   &:hover {
      background-color: #e0e0e0;
   }
   &:after {
      content: 'Нажмите на иконку чтобы загрузить или перетащите фото';
      /* border: 1px solid green; */
      position: absolute;
      top: 70%;
      left: 0%;
      text-align: center;
      font-size: 1.1rem;
      color: #a6a6a6;
      padding-left: 30px;
      padding-right: 30px;
   }
`
const InputFile = styled.input`
   border: 1px solid red;
   height: inherit;
   width: inherit;
   opacity: 0;
   &:hover {
      cursor: pointer;
   }
`
