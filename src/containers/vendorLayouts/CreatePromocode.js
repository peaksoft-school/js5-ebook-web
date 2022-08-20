import styled from '@emotion/styled'
import React from 'react'
import Button from '../../Components/UI/Button/Button'
import InputText from '../../Components/UI/Inputs/InputText'
import Modal from '../../Components/UI/Modal'
import BasicDatePicker from './DatePicker'

export default function CreatePromocode() {
   return (
      <Modal open variant="mini">
         <PromoCodeBlock>
            <PromoCodeItem>
               <Label htmlFor="promo" width="100%">
                  <LabelSpan>Промокод</LabelSpan>
                  <InputDate
                     type="text"
                     id="promo"
                     placeholder="Напишите промокод"
                  />
               </Label>
            </PromoCodeItem>
            <PromoCodeItem width="33.33%">
               <Label htmlFor="dataOne" width="33.33%" pr="20px">
                  <LabelSpan>Дата начала</LabelSpan>
                  <BasicDatePicker />
               </Label>
            </PromoCodeItem>
            <PromoCodeItem width="33.33%">
               <Label htmlFor="dataTwo" width="33.33%" pr="20px">
                  <LabelSpan>Дата завершения</LabelSpan>
                  <BasicDatePicker />
               </Label>
            </PromoCodeItem>
            <PromoCodeItem width="33.33%">
               <Label htmlFor="dataThree" width="33.33%">
                  <LabelSpan>Процент скидки</LabelSpan>
                  <InputDate type="number" id="dataThree" />
               </Label>
            </PromoCodeItem>
            <PromoCodeItem>
               <PromoSubmit>Создать</PromoSubmit>
            </PromoCodeItem>
         </PromoCodeBlock>
      </Modal>
   )
}

const PromoSubmit = styled(Button)`
   width: 22%;
   background-color: #1c1c1c;
   &:hover {
      background-color: #1c1c1c;
   }
`

const InputDate = styled(InputText)`
   background-color: #fff;
   &:focus {
      border: 1px solid #1976d2;
   }
`

const LabelSpan = styled('span')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   margin-bottom: 10px;
`

const Label = styled('label')`
   display: flex;
   flex-direction: column;
   width: 100%;
`

const PromoCodeBlock = styled('form')`
   /* border: 1px solid red; */
   width: 523px;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`
const PromoCodeItem = styled('div')`
   /* border: 1px solid red; */
   width: ${(props) => props.width || '100%'};
   padding: 10px 10px;
   display: flex;
   justify-content: flex-end;
`
