import React from 'react'
import styled from 'styled-components';

function InputName(props) {
  return (
    <div>
            <InputName1 type='text' placeholder={props.placeholder}/>
    </div>
  )
}

export default InputName;

const InputName1 = styled.input`
  width: 514px;
   height: 38px;
   padding-left: 18px;
   border: 1px solid #C4C4C4;
   margin-top: 19px;

   &:hover {
    border: 1px solid blue;
   }
   &:active, :focus {
    outline: none;
    border: 1px solid red;
   }
`

