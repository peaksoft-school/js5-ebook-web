import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as KrestikIcon } from '../../assets/icons/userAllbooks/krestik.svg'

const ShowChoice = ({ arr }) => {
   const onClickDeleteHandler = (setCheckedFunc, id, label) => {
      setCheckedFunc(id, true, label)
   }
   return (
      <ShowChoiceBlock>
         {arr &&
            arr.map((elem) => {
               if (elem.type === 'bookType' || elem.type === 'languages') {
                  return (
                     <ChoiceItem key={elem.label}>
                        {elem.label}
                        <ChoiceBtn onClick={elem.closeFunction}>
                           <KrestikIcon />
                        </ChoiceBtn>
                     </ChoiceItem>
                  )
               }
               return (
                  <ChoiceItem key={elem.label}>
                     {elem.label}
                     <ChoiceBtn
                        onClick={() =>
                           onClickDeleteHandler(
                              elem.setCheckedFunc,
                              elem.id,
                              elem.label
                           )
                        }
                     >
                        <KrestikIcon />
                     </ChoiceBtn>
                  </ChoiceItem>
               )
            })}
      </ShowChoiceBlock>
   )
}

export default ShowChoice

const ChoiceBtn = styled('button')`
   margin-left: 10px;
   background-color: rgba(0, 0, 0, 0);
   border: none;
   cursor: pointer;
`

const ChoiceItem = styled('div')`
   border: 1px solid #c4c4c4;
   padding: 10px 20px;
   margin-right: 10px;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const ShowChoiceBlock = styled('div')`
   display: flex;
   flex-wrap: wrap;
   /* border: 1px solid red; */
`
