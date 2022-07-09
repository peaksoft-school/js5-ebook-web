import styled from 'styled-components'

function Inputs({ ...props }) {
   return (
      <div>
         <InputsStyled type="text" placeholder={props.placeholder} />
      </div>
   )
}

export default Inputs

const InputsStyled = styled.input`
   width: 514px;
   height: 38px;
   padding-left: 18px;
   border: 1px solid #c4c4c4;
   margin-top: 19px;

   &:hover {
      border: 1px solid blue;
   }
   &:active,
   :focus {
      outline: none;
      border: 1px solid red;
   }
`
