import styled from '@emotion/styled'
import { CircularProgress } from '@mui/material'
import Vector from '../../../assets/upaudioicons/Vector.png'
import VectorOk from '../../../assets/upaudioicons/VectorOk.png'

const UploadAudioFile = ({ children, ...props }) => {
   let fileButton

   if (props.state === 'default' || props.audioState === 'default') {
      fileButton = (
         <ContainerDiv>
            <span>{children}</span>
            <DefaultContainer {...props}>
               <ImgVector src={Vector} />
               {children}
               <input {...props} />
            </DefaultContainer>
         </ContainerDiv>
      )
   }

   if (props.state === 'loading' || props.audioState === 'default') {
      fileButton = (
         <ContainerDiv>
            <span>{children}</span>
            <LoadedCont>
               <CircularProgress style={{ color: 'grey' }} size="1.4rem" />

               {children}
            </LoadedCont>
         </ContainerDiv>
      )
   }
   if (props.state === 'success' || props.audioState === 'default') {
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

export default UploadAudioFile

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

const LoadedCont = styled('label')((props) => ({
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
      font-family: 'Open Sans';
      font-weight: 400;
      line-height: 20.8px;
   }
`
