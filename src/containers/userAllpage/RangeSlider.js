import { useState, useEffect } from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material'
import InputText from '../../Components/UI/Inputs/InputText'

function valuetext(value) {
   return `${value}`
}

export default function RangeSlider({ onChange }) {
   const [value, setValue] = useState([1200, 6000])
   const [disableEffect, setDisableEffect] = useState(true)
   useEffect(() => {
      if (disableEffect) {
         setDisableEffect(false)
         return () => {}
      }
      const debounceRange = setTimeout(() => {
         onChange(value[0], value[1])
      }, 1000)
      return () => {
         clearTimeout(debounceRange)
      }
   }, [value])

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   const onChangeInputHandler = (index, value) => {
      setValue((prev) => {
         return prev.map((elem, idx) => {
            if (idx === index) {
               return value
            }
            return elem
         })
      })
   }

   return (
      <div>
         <InputsPrice>
            <PriceItem right="10px">
               <InputText
                  placeholder="от"
                  value={value[0]}
                  onChange={(e) => onChangeInputHandler(0, e.target.value)}
               />
            </PriceItem>
            <PriceItem left="10px">
               <InputText
                  placeholder="до"
                  value={value[1]}
                  onChange={(e) => onChangeInputHandler(1, e.target.value)}
               />
            </PriceItem>
         </InputsPrice>
         <Slide
            getAriaLabel={() => 'priceBook'}
            value={value}
            min={0}
            max={10000}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
         />
      </div>
   )
}
const InputsPrice = styled('div')`
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
`
const PriceItem = styled('div')`
   /* padding: 10px 10px; */
   padding-left: ${(props) => props.left || ''};
   padding-right: ${(props) => props.right || ''};
   width: 50%;
`
const Slide = styled(Slider)`
   margin-top: 15px;
   margin-bottom: 25px;
   .MuiSlider-thumb::after {
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      background: white;
      border: 0.5px solid #e0e0e0;
   }

   .MuiSlider-track {
      width: 265px;
      height: 0px;
      color: #f34901;
   }
   .MuiSlider-rail {
      opacity: 0.38;
      width: 100%;
      height: 2.5px;
      color: gray;
   }
   .MuiSlider-valueLabel {
      display: none;
   }
`
