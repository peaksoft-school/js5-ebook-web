import styled from '@emotion/styled'

const About = ({ about }) => {
   return <StyledText>{about}</StyledText>
}

export default About

const StyledText = styled.div`
   width: 508px;
   height: 240px;
   margin-bottom: 200px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 150%;
   color: #222222;
   margin-left: 15px;
`
