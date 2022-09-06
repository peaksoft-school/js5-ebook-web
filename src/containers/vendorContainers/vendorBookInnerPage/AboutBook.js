import styled from '@emotion/styled'

const AboutBook = ({ aboutBook }) => {
   return <StyledText>{aboutBook}</StyledText>
}

export default AboutBook

export const StyledText = styled.div`
   width: 676px;
   margin-bottom: 200px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #222222;
`
