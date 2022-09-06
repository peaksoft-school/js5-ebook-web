import styled from 'styled-components'
import { useState } from 'react'
import MeadBalls from '../../../assets/icons/MeatBalls/MeatBalls.jpg'

const Meatballs = ({ onClick, options, height, width }) => {
   const [state, setState] = useState(false)

   const clickHandler = () => {
      setState((prevstate) => !prevstate)
   }

   const clickCloseHandler = (option) => {
      setState(false)
      onClick(option)
   }

   return (
      <DivBlock>
         <Img onClick={clickHandler} src={MeadBalls} />
         {state && (
            <DivMeatBalls height={height} width={width}>
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

export default Meatballs

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
`

const DivMeatBalls = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   border: 1px solid #c4c4c4;
   position: absolute;
   top: 100%;
   left: 0;
   background-color: white;
   height: ${(props) => props.height || '10px 20px'};
   width: ${(props) => props.width || '10px 20px'};
   padding: 30px;
   border: 1px solid red;
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
