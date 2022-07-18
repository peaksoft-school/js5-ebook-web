import styled from 'styled-components'
import { ReactComponent as EBooK } from '../assets/icons/logotype/eBooK.svg'

function Logotype({ backgroundColor, flexGrow, justifyContent, alignItems }) {
   return (
      <LogoImage
         backgroundColor={backgroundColor}
         flexGrow={flexGrow}
         justifyContent={justifyContent}
         alignItems={alignItems}
      >
         <EBooK />
      </LogoImage>
   )
}

export default Logotype

const LogoImage = styled.div`
   width: 147px;
   height: 85px;
   background-color: ${(props) => props.backgroundColor || '#222222'};
   position: relative;
   flex-shrink: 0;
   display: flex;
   justify-content: ${(props) => props.justifyContent || 'center'};
   align-items: ${(props) => props.alignItems || 'center'};
   flex-grow: ${(props) => props.flexGrow || ''};
`
