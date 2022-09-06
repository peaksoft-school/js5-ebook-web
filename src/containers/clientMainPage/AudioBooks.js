import styled, { css } from 'styled-components'

export const AudioBooks = () => {
   return (
      <StyledAudioBooksCont>
         <StyledTitle>
            <StyledBestText>Аудиокниги</StyledBestText>
            <StyledNavLink href="/">Смотреть все</StyledNavLink>
         </StyledTitle>
         <StyledBookCardCont>
            <StyledBookCard className="first">
               <ImageBlock className="imageBlock">
                  <Image
                     src="https://cv9.litres.ru/pub/c/audiokniga/cover_415/37402792-dzhen-sinsero-ni-sy-vostochnaya-mudrost-kotoraya-glasit-bud-uvere-37402792.jpg"
                     alt="book"
                  />
               </ImageBlock>
               <InfoBook>
                  <StyledBookCardName>НИ СЫ</StyledBookCardName>
                  <StyledBookCardAuthor>Джен Синсеро</StyledBookCardAuthor>
                  <StyledBookCardTitle>
                     <StyledBookCardTime>
                        19 ч. 44 мин. 19 сек.
                     </StyledBookCardTime>
                     <StyledBookPrice>234 с</StyledBookPrice>
                  </StyledBookCardTitle>
               </InfoBook>
            </StyledBookCard>
            <StyledBookCard className="second">
               <ImageBlock className="imageBlock">
                  <Image
                     src="https://img-gorod.ru/28/363/2836344_detail.jpg"
                     alt="book"
                  />
               </ImageBlock>
               <InfoBook>
                  <StyledBookCardName>Зеленый свет</StyledBookCardName>
                  <StyledBookCardAuthor>Мэттью Макконахи</StyledBookCardAuthor>
                  <StyledBookCardTitle>
                     <StyledBookCardTime>
                        19 ч. 44 мин. 19 сек.
                     </StyledBookCardTime>
                     <StyledBookPrice>234 с</StyledBookPrice>
                  </StyledBookCardTitle>
               </InfoBook>
            </StyledBookCard>
            <StyledBookCard className="third">
               <ImageBlock className="imageBlockThird">
                  <Image
                     src="https://cm.author.today/content/2021/11/23/48cb14773d40404c8200e22fb14fc4af.jpg"
                     alt="book"
                  />
               </ImageBlock>
               <InfoBook>
                  <StyledBookCardName>НИ СЫ</StyledBookCardName>
                  <StyledBookCardAuthor>Джен Синсеро</StyledBookCardAuthor>
                  <StyledBookCardTitle>
                     <StyledBookCardTime>
                        19 ч. 44 мин. 19 сек.
                     </StyledBookCardTime>
                     <StyledBookPrice>234 с</StyledBookPrice>
                  </StyledBookCardTitle>
               </InfoBook>
            </StyledBookCard>
         </StyledBookCardCont>
      </StyledAudioBooksCont>
   )
}

const InfoBook = styled('div')`
   /* border: 1px solid red; */
   padding-top: 20px;
`

const ImageBlock = styled('div')`
   /* border: 1px solid red; */
   width: 309px;
   height: 309px;
   overflow: hidden;
`

const Image = styled('img')`
   width: 100%;
   object-fit: cover;
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
   /* margin: 0; */
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

const StyledAudioBooksCont = styled.div`
   /* border: 1px solid red; */
   width: 100%;
   padding: 70px 0px;
`
const StyledBookCardTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const StyledBookCardCont = styled.div`
   /* border: 1px solid red; */
   width: 100%;
   height: 747px;
   display: flex;
   justify-content: space-between;
   flex-flow: row nowrap;
   /* justify-content: flex-start; */
   align-content: flex-start;
   .first {
      align-self: flex-end;
   }
   .second {
      align-self: center;
      width: 441px;
      .imageBlock {
         width: 441px;
         height: 441px;
         /* border: 1px solid red; */
      }
   }
   .third {
      align-self: flex-start;
      width: 344px;
      .imageBlockThird {
         width: 100%;
         height: 305px;
         /* border: 1px solid red; */
      }
   }
`
const StyledBookCard = styled.div`
   /* border: 1px solid red; */
   width: 309px;
   display: flex;
   flex-direction: column;
   /* ${(props) => props.second && css``} */
`
const StyledBookCardName = styled.p`
   margin: 0;
   margin-bottom: 10px;
   /* border: 1px solid red; */
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   text-transform: uppercase;
   color: #222222;
`
const StyledBookCardAuthor = styled.p`
   margin: 0;
   /* border: 1px solid red; */
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
