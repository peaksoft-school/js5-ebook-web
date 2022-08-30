import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Components/UI/Button/Button'
import InputText from '../../Components/UI/Inputs/InputText'
import BasicDatePicker from './DatePicker'
import SnackBarDate from './SnackBarDate'
import {
   setPromocode,
   promocodeActions,
} from '../../store/slices/promocodeSlices'

export default function CreatePromocode() {
   const [promocode, setPromocod] = React.useState({
      value: '',
      dataIn: '',
      dataOut: '',
      percent: 0,
   })
   const [snackbar, setSnackbar] = React.useState(false)
   const { promocode: success, error: errorPromo } = useSelector(
      (store) => store.promocodeStore
   )
   const dispatch = useDispatch()
   React.useEffect(() => {
      setTimeout(() => {
         setSnackbar(false)
         dispatch(promocodeActions.clean())
      }, [5000])
   }, [snackbar, success, errorPromo])
   const onChangeHandler = (key, value) => {
      setPromocod((prev) => {
         return {
            ...prev,
            [key]: value,
         }
      })
   }
   const onSubmitPromocode = (e) => {
      e.preventDefault()
      if (
         promocode.value === '' ||
         promocode.dataIn === '' ||
         promocode.dataOut === '' ||
         promocode.percent === 0
      ) {
         setSnackbar(true)
         return
      }
      const promo = {
         name: promocode.value,
         discount: promocode.percent,
         dateOfStart: promocode.dataIn,
         dateOfFinish: promocode.dataOut,
      }
      dispatch(setPromocode(promo))
   }
   return (
      <>
         <SnackBarDate
            snack={snackbar || Boolean(success) || Boolean(errorPromo)}
            message={success || errorPromo || ''}
            variant={success ? 'success' : ''}
         />
         <PromoCodeBlock onSubmit={onSubmitPromocode}>
            <PromoCodeItem>
               <Label htmlFor="value" width="100%">
                  <LabelSpan>Промокод</LabelSpan>
                  <InputDate
                     type="text"
                     value={promocode.value}
                     onChange={(e) => onChangeHandler('value', e.target.value)}
                     id="value"
                     placeholder="Напишите промокод"
                     focusColor="#1976d2"
                  />
               </Label>
            </PromoCodeItem>
            <PromoCodeItem width="33.33%">
               <Label htmlFor="dataIn" width="33.33%" pr="20px">
                  <LabelSpan>Дата начала</LabelSpan>
                  <BasicDatePicker
                     onChange={(date) => onChangeHandler('dataIn', date)}
                  />
               </Label>
            </PromoCodeItem>
            <PromoCodeItem width="33.33%">
               <Label htmlFor="dataOut" width="33.33%" pr="20px">
                  <LabelSpan>Дата завершения</LabelSpan>
                  <BasicDatePicker
                     onChange={(date) => onChangeHandler('dataOut', date)}
                  />
               </Label>
            </PromoCodeItem>
            <PromoCodeItem width="33.33%">
               <Label htmlFor="percent" width="33.33%">
                  <LabelSpan>Процент скидки</LabelSpan>
                  <InputDate
                     value={promocode.percent}
                     onChange={(e) =>
                        onChangeHandler('percent', e.target.value)
                     }
                     type="number"
                     id="percent"
                     focusColor="#1976d2"
                  />
               </Label>
            </PromoCodeItem>
            <PromoCodeItem>
               <PromoSubmit type="submit">Создать</PromoSubmit>
            </PromoCodeItem>
         </PromoCodeBlock>
      </>
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
