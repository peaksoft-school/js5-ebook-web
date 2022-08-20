import styled from '@emotion/styled'
import MainPageSlider from '../../Components/UI/MainPageslider'

function App() {
   return (
      <div className="App">
         <StyledSliderCont>slider</StyledSliderCont>

         <StyledBestSlider>
            <StyledTitle>
               <StyledBestText>Бестселлеры</StyledBestText>
               <StyledNavLink href="/">Смотреть все</StyledNavLink>
            </StyledTitle>
            <StyledBookSliderBlock>
               <StyledBookTitle>
                  <StyledBookName>Тонкое искусство пофигизма</StyledBookName>
                  <StyledBookDescription>
                     Современное общество пропагандирует культ успеха: будь
                     умнее, богаче, продуктивнее— будь лучше всех. Соцсети
                     изобилуют историями натему, как какой-томалец придумал.
                     Соцсети изобилуют историями натему, как какой-томалец
                     придумал приложение…
                  </StyledBookDescription>
                  <div>
                     <StyledNavLink href="/">Подробнее</StyledNavLink>
                     <StyledBookPrice>234 с</StyledBookPrice>
                  </div>
               </StyledBookTitle>
               <StyledBookSlider>
                  <MainPageSlider />
               </StyledBookSlider>
            </StyledBookSliderBlock>
         </StyledBestSlider>

         <StyledLatestPublCont>
            <StyledTitle>
               <StyledLatestPublText>Последние публикации</StyledLatestPublText>
               <StyledNavLink href="/">Смотреть все</StyledNavLink>
            </StyledTitle>
            <StyledBookSliderBlock>
               <StyledGenresBlock>
                  <StyledGenresText>Бизнес-литература</StyledGenresText>
                  <StyledGenresText>Детские книги</StyledGenresText>
                  <StyledGenresText>Хобби и досуг</StyledGenresText>
                  <StyledGenresText>Публицистика</StyledGenresText>
                  <StyledGenresText>Учебная литература</StyledGenresText>
                  <StyledGenresText>Поэзия</StyledGenresText>
               </StyledGenresBlock>
               <StyledBookImage>
                  <img
                     src="https://img3.labirint.ru/rc/d943b98184660c6b520981a20bd8421d/363x561q80/books55/548551/cover.jpg?1563945229"
                     alt="book"
                  />
               </StyledBookImage>
               <StyledBookDescriptionBlock>
                  <StyledLatestBookName>История книги</StyledLatestBookName>
                  <StyledLatestBookDesc>
                     Предлагаемый перевод является первой попыткой обращения
                     ктворчеству Павла Орозия— римского христианского историка
                     начала V века, сподвижника исовременника знаменитого
                     Августина Блаженн...
                  </StyledLatestBookDesc>
                  <div>
                     <StyledNavLink href="/">Подробнее</StyledNavLink>
                     <StyledBookPrice>456 с</StyledBookPrice>
                  </div>
               </StyledBookDescriptionBlock>
            </StyledBookSliderBlock>
         </StyledLatestPublCont>
      </div>
   )
}

export default App

const StyledSliderCont = styled.div`
   /* width: 1440.5px;
  height: 720px; */
   background: #1c1c1c;
   padding: 97px 304px 155px 304px;
`
const StyledBestSlider = styled.div`
   /* width: 1440px; */
   /* height: 960px; */
   padding: 150px 80px;
`
const StyledTitle = styled.div`
   width: 100%;
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
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   text-decoration-line: underline;
   color: #ff4c00;
`
const StyledBookPrice = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   color: #ff4c00;
`
const StyledBookSliderBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const StyledBookTitle = styled.div`
   width: 492px;
   height: 423px;
   display: flex;
   flex-direction: column;
   & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`
const StyledBookName = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 56px;
   line-height: 130%;
`
const StyledBookSlider = styled.div`
   width: 774px;
   height: 443px;
`
const StyledLatestPublCont = styled.div`
   padding: 150.25px 80px 159.42px 80px;
   background: #1c1c1c;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const StyledLatestPublText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 130%;
   color: #f8f8f8;
`
const StyledGenresBlock = styled.div`
   width: 159px;
   height: 246px;
`
const StyledGenresText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #969696;
`
const StyledBookImage = styled.div`
   width: 342px;
   transform: rotate(9.34deg);
`
const StyledBookDescriptionBlock = styled.div`
   width: 365px;
   height: 229px;
   & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`
const StyledLatestBookName = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%;
   text-transform: uppercase;
   color: #d1d1d1;
`
const StyledLatestBookDesc = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #d1d1d1;
`
