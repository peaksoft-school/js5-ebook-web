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
   position: relative;
   ${(props) =>
      props.error &&
      css`
         border: 1px solid red;
         background-color: #fff5f5;
      `}
`

export const Input = styled.input`
   width: ${(props) => props.width || '100%'};
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
      position: ${(props) => props.position || ''};
      left: ${(props) => props.left || ''};
   }
   &[type='date']::-webkit-calendar-picker-indicator {
      color: black;
      opacity: 1;
      background: url(https://www.iconpacks.net/icons/1/free-calendar-icon-865-thumb.png)
         no-repeat;
      background-size: 15%;
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: -5px;
      transform: translateX(100%);
   }
   &[type='date']::placeholder {
      color: rgba(0, 0, 0, 0);
   }
   &[type='date']::-webkit-datetime-edit {
      color: #969696;
      width: ${(props) => props.width || '100%'};
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
