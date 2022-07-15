import styled from 'styled-components'
import React from 'react'

const Inputs = React.forwardRef((props, ref) => {
   return (
      <div>
         <InputsStyled
            ref={ref}
            {...props}
            type={props.type}
            placeholder={props.placeholder}
         />
      </div>
   )
})

export default Inputs

const InputsStyled = styled.input`
   width: ${(props) => props.width || '34.5%'};
   height: 38px;
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
   }
   &::placeholder {
      width: 70px;
      height: 19px;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      /* color: #c4c4c4; */
      padding-left: 15px;
   }
`
