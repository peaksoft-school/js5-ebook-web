import styled from 'styled-components'
import { useState } from 'react'

import MeadBalls from '../../../assets/icons/MeatBalls/MeatBall.svg'

const MeatBalls = ({ options, onClick, height }) => {
   const [state, setState] = useState(false)

   const clickHandler = () => {
      setState((prevstate) => !prevstate)
   }

   const clickCloseHandler = (option) => {
      setState(false)
      onClick(option)
      options.onClick(option.id)
   }

   return (
      <DivBlock>
         <Img onClick={() => clickHandler()} src={MeadBalls} />
         {state && (
            <DivMeatBalls height={height} width={options.width}>
               {options.map((option) => {
                  return (
                     <OptionMeadBalls
                        key={option.id}
                        onClick={() => clickCloseHandler(option)}
                     >
                        <Div>{option.icon}</Div>
                        <DivOprions>{option.title}</DivOprions>
                     </OptionMeadBalls>
                  )
               })}
            </DivMeatBalls>
         )}
      </DivBlock>
   )
}

export default MeatBalls
const DivOprions = styled('div')``
const DivBlock = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   z-index: 10;
   cursor: pointer;
   width: 14px;
`

const Img = styled.img`
   width: 3.75px;
   height: 16px;
   margin-left: 30px;
`

const DivMeatBalls = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: absolute;
   top: 100%;
   right: 0;
   background-color: white;
   height: ${(props) => props.height || '10px 20px'};
   width: ${(props) => props.width || '10px 20px'};
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
