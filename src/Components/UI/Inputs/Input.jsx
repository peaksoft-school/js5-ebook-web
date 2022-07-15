import styled from 'styled-components'
import { useState } from 'react'
import Vector from '../../../assets/icons/Vector.png'

function Input({ placeholder, props }) {
   const [password, setPassword] = useState(false)

   const toggleBtn = () => {
      setPassword((prevState) => !prevState)
   }

   return (
      <div>
         <StyledInput
            type={password ? 'text' : 'password'}
            placeholder={placeholder}
            {...props}
         />
         <Div>
            <ButtonIcons onClick={toggleBtn}>
               <ImageEyeStyle src={Vector} />
            </ButtonIcons>
         </Div>
      </div>
   )
}

export default Input

const Div = styled.div`
   width: 510px;
   display: flex;
   justify-content: flex-end;
   margin-top: -3.4rem;
`

const StyledInput = styled.input`
   width: ${(props) => props.width || '34.5%'};
   height: 39px;
   border: 1px solid #c4c4c4;
   padding-left: 18px;
   margin-top: 19px;
   &:hover {
      border: 1px solid blue;
   }
   &:active,
   :focus {
      outline: none;
      border: 1px solid red;
      color: black;
   }
`

const ButtonIcons = styled.button`
   margin-top: 19px;
   font-size: 1.5rem;
   outline: none;
   border: none;
   background-color: transparent;
   margin-left: -2.4rem;
   cursor: pointer;
`

const ImageEyeStyle = styled.img`
   width: 18.03px;
   filter: opacity(0.5);
   &:active {
      filter: opacity(1);
      background: transparent;
   }
`
