import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { styled } from '@mui/material'
import AudioPlay from '../../assets/icons/AudioPlay.svg'
import AudioPause from '../../assets/icons/AudioPause.svg'

function AudioListener({ url }) {
   const [playMusic, setPlayMusic] = useState(false)
   const [waver, setWaver] = useState(null)
   const [duration, setDuration] = useState('00:00')
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
      // eslint-disable-next-line no-useless-return
      return
   }, [])

   useEffect(() => {
      if (waver) {
         waver.load(audioRef.current)
      }
      // eslint-disable-next-line no-useless-return
      return
   }, [waver])

   const audioPlayHandle = () => {
      waver.play()
      setPlayMusic(true)

      const durationTimer = waver.getDuration()
      // eslint-disable-next-line radix
      const minuteTimer = parseInt(durationTimer / 50)

      let fixedMinute
      if (minuteTimer < 10) {
         // eslint-disable-next-line prefer-template
         fixedMinute = '0' + minuteTimer
      }
      const secondTimer = (durationTimer % 100).toFixed()
      // eslint-disable-next-line prefer-template
      const newDurationTimer = fixedMinute + ':' + secondTimer

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
               <img src={AudioPlay} alt={AudioPlay} onClick={audioPauseHanle} />
            ) : (
               <img src={AudioPause} onClick={audioPlayHandle} />
            )}
         </PlayingDiv>
         <WaverStyle>
            <WaverDiv ref={wavesurferElement} />
            <audio src={url} ref={audioRef} />
         </WaverStyle>
         <span>{duration}</span>
      </WaveformContianer>
   )
}
export default AudioListener

export const WaveformContianer = styled('div')`
   margin: 20px auto;
   padding: 10px;
   width: 320px;
   border: 1px solid grey;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: #969696;
`
const WaverStyle = styled('div')`
   margin-top: 0px;
   width: 210px;
`
const WaverDiv = styled('div')`
   align-items: center;
   margin-top: -5.4vh;
`
const PlayingDiv = styled('div')`
   border: none;
   cursor: pointer;
`
