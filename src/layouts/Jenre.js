import styled from 'styled-components'

function Jenre({ onClick, text }) {
   return (
      <Label>
         <JenreButton onClick={onClick} />
         <LabelSpan>{text}</LabelSpan>
      </Label>
   )
}

export default Jenre

const LabelSpan = styled.span`
   margin-left: 10px;
`

const Label = styled.label`
   font-family: 'Open Sans';
   font-size: 600;
   font-weight: 600;
   line-height: 21.79px;
   display: flex;
   align-items: center;
   cursor: pointer;
`

const JenreButton = styled.button`
   width: 37px;
   height: 18px;
   background-color: rgba(0, 0, 0, 0);
   border: none;
   border-top: 2px solid #222222;
   border-bottom: 2px solid #222222;
   position: relative;
   cursor: pointer;
   &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 2px;
      width: 22px;
      background-color: #222222;
   }
`
