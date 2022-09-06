import styled from 'styled-components'
import MainPageSlider from '../../Components/UI/MainPageslider'
import { books } from './bookImage'

export const BestComponent = () => {
   return (
      <StyledBestSlider>
         <StyledTitle>
            <StyledBestText>Бестселлеры</StyledBestText>
            <StyledNavLink href="/">Смотреть все</StyledNavLink>
         </StyledTitle>
         <StyledBookSliderBlock>
            <StyledBookTitle>
               <StyledBookName>Тонкое искусство пофигизма</StyledBookName>
               <StyledBookDescription>
                  Современное общество пропагандирует культ успеха: будь умнее,
                  богаче, продуктивнее — будь лучше всех. Соцсети изобилуют
                  историями на тему, как какой-то малец придумал. Соцсети
                  изобилуют историями на тему, как какой-то малец придумал
               </StyledBookDescription>
               <TableBlock>
                  <TableItem width="50%">
                     <StyledNavLink href="/">Подробнее</StyledNavLink>
                  </TableItem>
                  <TableItem width="50%" align="right">
                     <StyledBookPrice>234 c</StyledBookPrice>
                  </TableItem>
               </TableBlock>
            </StyledBookTitle>
            <StyledBookSlider>
               <MainPageSlider images={books} />
            </StyledBookSlider>
         </StyledBookSliderBlock>
      </StyledBestSlider>
   )
}

const TableBlock = styled.div`
   /* border: 1px solid red; */
   display: flex;
   flex-flow: row wrap;
   justify-content: flex-start;
   align-items: flex-start;
   align-content: flex-start;
`
const TableItem = styled.div`
   /* border: 1px solid red; */
   height: 20px;
   width: ${(props) => props.width || '100%'};
   display: flex;
   justify-content: ${(props) =>
      props.align === 'right' ? 'flex-end' : 'flex-start'};
`

const StyledBestSlider = styled.div`
   /* border: 1px solid red; */
   padding: 70px 0px;
   width: 100%;
`
const StyledTitle = styled.div`
   width: 100%;
   /* border: 1px solid red; */
   display: flex;
   justify-content: space-between;
   align-items: center;
   & p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 130%;
   }
`
const StyledBestText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 130%;
`
const StyledBookDescription = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
`
const StyledNavLink = styled.a`
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   text-decoration-line: underline;
   color: #ff4c00;
`
const StyledBookPrice = styled.span`
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   color: #ff4c00;
   margin: 0;
   padding: 0;
`
const StyledBookSliderBlock = styled.div`
   /* border: 1px solid red; */
   padding-top: 40px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`
const StyledBookTitle = styled.div`
   /* border: 1px solid red; */
   /* padding-top: 20px; */
   width: 492px;
   display: flex;
   flex-direction: column;
   overflow: hidden;
`
const StyledBookName = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 56px;
   line-height: 130%;
   margin: 0;
   padding: 0;
   margin-bottom: 50px;
`
const StyledBookSlider = styled.div`
   /* border: 1px solid red; */
   width: 700px;
   height: 543px;
`
export const StyledBookImage = styled.div`
   width: 342px;
   transition: transform 1s ease 0s;
   &:hover {
      transform: rotate(9.34deg);
   }
`
