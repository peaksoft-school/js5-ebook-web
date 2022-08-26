import React from 'react'
import { styled } from '@mui/material'
// import InputText from '../../Components/UI/Inputs/InputText'
import RangeSlider from './RangeSlider'

const PriceBooks = () => {
   return (
      <div>
         <Type>Стоимость</Type>
         <Line />
         <RangeSlider />
      </div>
   )
}

export default PriceBooks
const Type = styled('div')`
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
   margin-bottom: 10px;
`
const Line = styled('div')`
   border-bottom: 1px solid gray;
   margin-bottom: 14px;
`
// const InputsPrice = styled('div')`
//    display: flex;
//    justify-content: space-between;
// `
// const PriceItem = styled('div')`
//    /* border: 1px solid red; */
//    padding: 10px 10px;
//    width: 50%;
// `
