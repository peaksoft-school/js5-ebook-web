import * as React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material'
import InputText from '../../Components/UI/Inputs/InputText'

function valuetext(value) {
   return `${value}°C`
}

export default function RangeSlider() {
   const [value, setValue] = React.useState([100, 200])

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <div>
         <InputsPrice>
            <PriceItem>
               <InputText placeholder="от" value={value[0]} />
            </PriceItem>
            <PriceItem>
               <InputText placeholder="до" value={value[1]} />
            </PriceItem>
         </InputsPrice>
         <Slide
            getAriaLabel={() => 'Temperature range'}
            value={value}
            min={100}
            max={500}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
         />
      </div>
   )
}
const InputsPrice = styled('div')`
   display: flex;
   justify-content: space-between;
`
const PriceItem = styled('div')`
   padding: 10px 10px;
   width: 50%;
`
const Slide = styled(Slider)`
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
