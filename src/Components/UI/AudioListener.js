import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { styled } from '@mui/material'
import AudioPlay from '../../assets/icons/AudioPlay.svg'
import AudioPause from '../../assets/icons/AudioPause.svg'

function AudioListener({ url }) {
   const [playMusic, setPlayMusic] = useState(false)
   const [waver, setWaver] = useState(null)
   const [duration, setDuration] = useState('0:00')
   const audioRef = useRef()
   const wavesurferElement = useRef()

   useEffect(() => {
      setWaver(
         WaveSurfer.create({
            barWidth: 0.7,
            barRadius: 0,
            barGap: 4,
            audioRate: 1,
            barMinHeight: 1,
            cursorWidth: 1,
            container: wavesurferElement.current,
            backend: 'WebAudio',
            height: 40,
            progressColor: '#FF4C00',
            responsive: true,
            waveColor: '#C4C4C4',
            cursorColor: 'transparent',
            maxCanvasHeigth: 500,
            normalize: true,
            cursor: true,
            partialRender: true,
         })
      )
   }, [])

   useEffect(() => {
      if (waver) {
         waver.load(audioRef.current)
      }
   }, [waver])

   const audioPlayHandle = () => {
      waver.play()
      setPlayMusic(true)

      const durationTimer = waver.getDuration()
      const minuteTimer = parseInt(durationTimer / 50, 10)

      let fixedMinute
      if (minuteTimer < 10) {
         fixedMinute = `0${minuteTimer}`
      }
      const secondTimer = (durationTimer % 100).toFixed()
      const newDurationTimer = `${fixedMinute}:${
         secondTimer < 10 ? `0${secondTimer}` : secondTimer
      }`

      setDuration(newDurationTimer)
   }

   const audioPauseHanle = () => {
      setPlayMusic(false)
      waver.pause()
   }

   return (
      <WaveformContianer>
         <PlayingDiv>
            {playMusic ? (
               <ImgStyled
                  src={AudioPlay}
                  onClick={audioPauseHanle}
                  alt="foto"
               />
            ) : (
               <ImgStyled
                  src={AudioPause}
                  onClick={audioPlayHandle}
                  alt="foto"
               />
            )}
         </PlayingDiv>
         <WaverStyle>
            <WaverDiv ref={wavesurferElement} />
            <AudioStyled src={url} ref={audioRef} crossOrigin="anonymous" />
         </WaverStyle>
         <span>{duration}</span>
      </WaveformContianer>
   )
}
export default AudioListener

const ImgStyled = styled('img')``
const AudioStyled = styled('audio')``

export const WaveformContianer = styled('div')`
   width: 291px;
   height: 32.37px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: #969696;
   & span {
      margin-top: -4.8px;
   }
`
const WaverStyle = styled('div')`
   margin-top: 0px;
   width: 210px;
`
const WaverDiv = styled('div')`
   align-items: center;
   margin-top: -4.6vh;
`
const PlayingDiv = styled('div')`
   border: none;
   cursor: pointer;
`
