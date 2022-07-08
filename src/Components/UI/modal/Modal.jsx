import styled from '@emotion/styled'

const Modal = ({ ...props }) => {
   return (
      <StyledBackDrop onClick={props.onClose}>
         <StyledBox>
            <Content>{props.children}</Content>
         </StyledBox>
      </StyledBackDrop>
   )
}
export default Modal

const StyledBox = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 460px;
   height: 159px;
   background-color: #ffff;
   color: #000;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`
const StyledBackDrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 10;
   background: rgba(0, 0, 0, 0.75);
`
const Content = styled.div`
   padding: 1rem;
`
