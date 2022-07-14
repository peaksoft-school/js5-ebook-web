import styled from '@emotion/styled'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import Vector from '../../../assets/upaudioicons/Vector.png'
import VectorOk from '../../../assets/upaudioicons/VectorOk.png'

const FileUploadButton = ({
   onChange,
   type,
   value,
   accept,
   children,
   ...props
}) => {
   const [fileState, setFileState] = useState('default')
   const [pdfFile, setPdfFile] = useState([])
   const [audioFile, setAudioFile] = useState([])

   const saveFilesHandler = (e) => {
      const files = e.target.files[0]
      onChange(files)

      if (files.type === 'application/pdf') {
         setFileState('loading')
         setPdfFile(files)
      }
      if (files.type === 'audio/mpeg') {
         setFileState('loading')
         setAudioFile(files)
      }
      if (pdfFile || audioFile) {
         setFileState('success')
      }
   }

   let fileButton

   if (fileState === 'default') {
      fileButton = (
         <ContainerDiv>
            <span>{children}</span>
            <DefaultContainer {...props}>
               <ImgVector src={Vector} />
               {children}
               <input
                  accept={accept}
                  value={value}
                  type={type}
                  onChange={saveFilesHandler}
               />
            </DefaultContainer>
         </ContainerDiv>
      )
   }

   if (fileState === 'loading') {
      fileButton = (
         <ContainerDiv>
            <span>{children}</span>
            <LoadedContainer>
               <CircularProgress style={{ color: 'grey' }} size="1.4rem" />
               {children}
            </LoadedContainer>
         </ContainerDiv>
      )
   }
   if (fileState === 'success') {
      fileButton = (
         <ContainerDiv>
            <span>{children}</span>
            <SuccessContainer {...props}>
               <ImgVectorOk src={VectorOk} />
               {children}
            </SuccessContainer>
         </ContainerDiv>
      )
   }

   return <div>{fileButton}</div>
}

export default FileUploadButton

const DefaultContainer = styled('label')((props) => ({
   display: 'flex',
   alignItems: 'center',
   width: props.width || '100%',
   background: props.background || 'white',
   color: props.color || '#969696',
   justifyContent: 'space-evenly',
   fontStyle: 'normal',
   padding: '10px 26px 10px 26px',
   fontFamily: 'Open Snas',
   fontWeight: '600',
   lineHeight: '16.8px',
   marginTop: '10px',
   cursor: 'pointer',
   border: '1px solid #969696',
   '& input': {
      display: 'none',
   },
}))

const LoadedContainer = styled('label')((props) => ({
   display: 'flex',
   alignItems: 'center',
   width: props.width || '100%',
   background: props.width || '#E5E5E5',
   justifyContent: 'space-evenly',
   padding: '0px 26px 0px 26px',
   color: props.color || '#C4C4C4',
   fontFamily: 'Open Snas',
   fontWeight: '600',
   marginTop: '10px',
   height: '37px',
   '& input': {
      display: 'none',
   },
}))

const SuccessContainer = styled('label')((props) => ({
   lineHeight: '16.8px',
   width: props.width || '100%',
   display: 'flex',
   alignItems: 'center',
   backgroundColor: props.backgroundColor || 'green',
   color: props.color || '#F8F8F8',
   justifyContent: 'space-evenly',
   padding: '10px 30px 10px 30px',
   fontFamily: 'Open Snas',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '14px',
   marginTop: '10px',
   '& input': {
      display: 'none',
   },
}))

const ImgVector = styled('img')(() => ({
   color: '#969696',
   width: '15px',
   height: '15.83px',
   marginTop: '2px',
}))

const ImgVectorOk = styled('img')`
   color: white;
`

const ContainerDiv = styled('div')`
   margin-top: 35px;
   display: inline-block;
   & span {
      color: #222222;
      font-size: 16px;
      font-style: normal;
      font-family: 'Open Sans';
      font-weight: 400;
      line-height: 20.8px;
      line-height: 130%;
   }
`
