import { useState } from 'react'
import UploadAudioFile from './UploadAudioFile'

const UserUploadAudioFile = () => {
   const [pdfState, setPdfState] = useState('default')
   const [audioState, setAudioState] = useState('default')
   const [audioFile, setAudioFile] = useState([])
   const [pdfFile, setPdfFile] = useState([])

   const saveDadaFile = (e) => {
      const files = e.target.files[0]
      if (files.type === 'application/pdf') {
         setPdfState('loading')
         setPdfFile((state) => [...state, files])
      }
      if (files.type === 'audio/mpeg') {
         setAudioState('loading')
         setAudioFile((state) => [...state, files])
      }

      // example when we will work with BACKEND url

      if (pdfFile && files.type === 'application/pdf') {
         setTimeout(() => {
            setPdfState('success')
         }, 2000)
         setTimeout(() => {
            setPdfState('default')
         }, 6000)
      }
      if (audioFile && files.type === 'audio/mpeg') {
         setTimeout(() => {
            setAudioState('success')
         }, 2000)
         setTimeout(() => {
            setAudioState('default')
         }, 6000)
      }
   }

   //  ........ exaple
   // BACKEND  POST request  --'succsess'
   // if(res.ok){
   //    setState("succses")
   // }

   return (
      <div>
         <UploadAudioFile
            state={audioState}
            accept="audio/*"
            type="file"
            onChange={saveDadaFile}
         >
            Загрузите аудиозапись
         </UploadAudioFile>
         <UploadAudioFile
            state={pdfState}
            type="file"
            accept="application/pdf, application/vnd.ms-excel"
            onChange={saveDadaFile}
         >
            Загрузите PDF
         </UploadAudioFile>
      </div>
   )
}

export default UserUploadAudioFile
