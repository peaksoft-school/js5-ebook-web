import styled from '@emotion/styled'
import Button from '../../Components/UI/Button/Button'
import InputText from '../../Components/UI/Inputs/InputText'
import MainPageSlider from '../../Components/UI/MainPageslider'
import { books } from './bookImage'

function MainPage() {
   return (
      <StyledMainPage>
         <StyledSliderCont>
            <MainPageSlider images={books} variant="mainSlider" />
         </StyledSliderCont>

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
                  <MainPageSlider images={books} />
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
         <StyledAudioBooksCont>
            <StyledTitle>
               <StyledBestText>Аудиокниги</StyledBestText>
               <StyledNavLink href="/">Смотреть все</StyledNavLink>
            </StyledTitle>
            <StyledBookCardCont>
               <StyledBookCard className="first">
                  <img
                     src="https://cv9.litres.ru/pub/c/audiokniga/cover_415/37402792-dzhen-sinsero-ni-sy-vostochnaya-mudrost-kotoraya-glasit-bud-uvere-37402792.jpg"
                     alt="book"
                  />
                  <StyledBookCardName>НИ СЫ</StyledBookCardName>
                  <StyledBookCardAuthor>Джен Синсеро</StyledBookCardAuthor>
                  <StyledBookCardTitle>
                     <StyledBookCardTime>
                        19 ч. 44 мин. 19 сек.
                     </StyledBookCardTime>
                     <StyledBookPrice>234 с</StyledBookPrice>
                  </StyledBookCardTitle>
               </StyledBookCard>
               <StyledBookCard className="second">
                  <img
                     src="https://img-gorod.ru/28/363/2836344_detail.jpg"
                     alt="book"
                  />
                  <StyledBookCardName>НИ СЫ</StyledBookCardName>
                  <StyledBookCardAuthor>Джен Синсеро</StyledBookCardAuthor>
                  <StyledBookCardTitle>
                     <StyledBookCardTime>
                        19 ч. 44 мин. 19 сек.
                     </StyledBookCardTime>
                     <StyledBookPrice>234 с</StyledBookPrice>
                  </StyledBookCardTitle>
               </StyledBookCard>
               <StyledBookCard>
                  <img
                     src="https://cm.author.today/content/2021/11/23/48cb14773d40404c8200e22fb14fc4af.jpg"
                     alt="book"
                  />
                  <StyledBookCardName>НИ СЫ</StyledBookCardName>
                  <StyledBookCardAuthor>Джен Синсеро</StyledBookCardAuthor>
                  <StyledBookCardTitle>
                     <StyledBookCardTime>
                        19 ч. 44 мин. 19 сек.
                     </StyledBookCardTime>
                     <StyledBookPrice>234 с</StyledBookPrice>
                  </StyledBookCardTitle>
               </StyledBookCard>
            </StyledBookCardCont>
         </StyledAudioBooksCont>
         <StyledBestSlider>
            <StyledTitle>
               <StyledBestText>Электронные книги</StyledBestText>
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
                  <MainPageSlider images={books} />
               </StyledBookSlider>
            </StyledBookSliderBlock>
         </StyledBestSlider>
         <StyledMainFooter>
            <StyledMailingCont>
               <p>Подписаться на рассылку</p>
               <div>
                  <InputText placeholder="Напишите ваш E-mail" />
                  <Button variant="universal" background="black" width="137px">
                     Отправить
                  </Button>
               </div>
            </StyledMailingCont>
            <StyledSocialMedia>
               <p>Instagram</p>
               <p>Facebook</p>
               <p>Bконтакте</p>
            </StyledSocialMedia>
         </StyledMainFooter>
      </StyledMainPage>
   )
}

export default MainPage

const StyledMainPage = styled.div`
   width: 100%;
   margin-top: 27px;
`
const StyledSliderCont = styled.div`
   background: #1c1c1c;
   padding: 97px 304px 155px 304px;
   display: flex;
   justify-content: center;
`
const StyledBestSlider = styled.div`
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
   transition: transform 1s ease 0s;
   &:hover {
      transform: rotate(9.34deg);
   }
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
const StyledAudioBooksCont = styled.div`
   width: 100%;
   padding: 150px 80px 0px 80px;
`
const StyledBookCardTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const StyledBookCardCont = styled.div`
   width: 1280px;
   height: 747px;
   display: flex;
   justify-content: space-between;
   .first {
      align-self: flex-end;
   }
   .second {
      align-self: center;
   }
`
const StyledBookCard = styled.div`
   width: 309px;
   display: flex;
   flex-direction: column;
`
const StyledBookCardName = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   text-transform: uppercase;
   color: #222222;
`
const StyledBookCardAuthor = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #334433;
`
const StyledBookCardTime = styled.span`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8c8c8c;
`
const StyledMainFooter = styled.div`
   /* height: 440px; */
   padding: 150px 0px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`
const StyledMailingCont = styled.div`
   width: 1091px;
   height: 111px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   & p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 120%;
      color: #222222;
   }
   & div {
      display: flex;
   }
`
const StyledSocialMedia = styled.div`
   display: flex;
   justify-content: space-between;
   width: 701px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 22px;
   line-height: 130%;
   color: #222222;
`
