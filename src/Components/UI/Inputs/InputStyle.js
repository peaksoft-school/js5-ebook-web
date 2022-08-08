import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
   border: 1px solid;
   border-color: ${(props) => props.borderColor || '#c4c4c4'};
   display: flex;
   align-items: center;
   background-color: ${(props) =>
      props.focus ? '#fff' : props.backgroundColor || '#f8f8f8'};
   transition: ease-in 0.2s;
   width: 100%;
   ${(props) =>
      props.error &&
      css`
         border: 1px solid red;
         background-color: #fff5f5;
      `}
`

export const Input = styled.input`
   width: 100%;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: ${(props) => props.fontSize || '1rem'};
   background-color: rgba(0, 0, 0, 0);
   line-height: 20.8px;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 20px;
   padding-right: ${(props) => props.paddingRight || '20px'};
   border: none;
   color: #222222;
   outline: none;
   &::placeholder {
      color: #969696;
   }
`
export const BtnIcon = styled('button')`
   border: none;
   background-color: rgba(0, 0, 0, 0);
   cursor: pointer;
   padding-right: 20px;
   padding-left: 10px;
   height: inherit;
   display: flex;
   align-items: center;
   transition: ease-in 0.2s;
`
