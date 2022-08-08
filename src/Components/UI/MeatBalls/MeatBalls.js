import { useState } from 'react'

import styled from 'styled-components'

import MeadBalls from '../../../assets/icons/MeatBalls/MeatBall.svg'

const MeatBalls = ({ options }) => {
   const [state, setState] = useState(false)

   const clickHandler = () => {
      setState((prevstate) => !prevstate)
   }

   const clickCloseHandler = (option) => {
      setState(false)
      option.onClick(option)
   }

   return (
      <DivBlock>
         <Img onClick={clickHandler} src={MeadBalls} />
         {state && (
            <DivMeatBalls>
               {options.map((option) => {
                  return (
                     <OptionMeadBalls
                        key={option.id}
                        onClick={() => clickCloseHandler(option)}
                     >
                        <Div>{option.icon}</Div>
                        {option.title}
                     </OptionMeadBalls>
                  )
               })}
            </DivMeatBalls>
         )}
      </DivBlock>
   )
}

export default MeatBalls

const DivBlock = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   z-index: 10;
`

const Img = styled.img`
   width: 3.75px;
   height: 16px;
   margin-left: 30px;
   margin-top: 11px;
`

const DivMeatBalls = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: absolute;
   top: 100%;
   right: 0;
   background-color: white;
   padding: 30px;
`

const OptionMeadBalls = styled.span`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 16px;
   line-height: 18.2px;
   color: #5d5d5d;
   cursor: pointer;
   padding: 10px 0px;
   &:first-child {
      border-bottom: 1px solid #c4c4c4;
      margin-bottom: 5px;
   }
`

const Div = styled.div`
   margin-right: 10px;
`
