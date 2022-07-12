import styled from 'styled-components'
import eBook from '../../../assets/icons/eBooK.png'

function Logotype() {
   return <LogoImage />
}

export default Logotype

const LogoImage = styled.div`
   width: 147px;
   height: 85px;
   background-color: #222222;
   position: relative;
   margin-bottom: 59px;
   &:after {
      content: '';
      position: absolute;
      background: url(${eBook}) center center no-repeat;
      background-size: auto;
      width: 92.81px;
      height: 19.77px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
`
