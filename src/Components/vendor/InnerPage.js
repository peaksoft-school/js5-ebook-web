import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal'
import About from './About'
import BookFragment from './BookFragment'
import likeIcon from '../../assets/icons/like.png'
import warningIcon from '../../assets/icons/warning.svg'
import plusIcon from '../../assets/icons/plus.svg'
import InputText from '../UI/Inputs/InputText'
import Breadcrumbs from '../UI/breadCrumbs/Breadcrumbs'
import { books } from './books'
import { TabInnerPage } from '../TabInnerPage'
// import appFetch from '../../hooks/appFetch'
import { URL } from '../../utils/constants/constants'

export const InnerPage = () => {
   // const [books, setBooks] = useState(null)
   const { bookId } = useParams()
   const token = useSelector((store) => store.auth.user.token)
   const selectedItem = books.find((item) => item.id === bookId)

   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   const handleOpenDeleteModal = () => setIsOpenDeleteModal(true)
   const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)

   const [isOpenPromoModal, setIsOpenPromoModal] = useState(false)
   const handleOpenPromoModal = () => setIsOpenPromoModal(true)
   const handleClosePromoModal = () => setIsOpenPromoModal(false)

   const deleteBookHandler = () => {
      fetch(`${URL}/api/book/delete/${bookId}`, {
         method: 'DELETE',
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            console.log(data)
         })
   }

   const pathTranslate = {
      books: 'Главная',
      [bookId]: selectedItem.name,
   }

   return (
      <>
         <StyledBtnBlock>
            <StyledPromoBtnBlock>
               <Button
                  onClick={handleOpenPromoModal}
                  variant="universal"
                  color="#f34901"
                  border="1px solid"
                  background="none"
                  width="177px"
                  height="42px"
                  padding="10px 16px"
               >
                  Создать промокод
               </Button>
               <Modal
                  open={isOpenPromoModal}
                  onClose={handleClosePromoModal}
                  variant="mini"
                  justifyContent="space-around"
                  width="523px"
                  height="258px"
               >
                  <div>
                     <StyledPromoLabel>Промокод</StyledPromoLabel>
                     <InputText placeholder="Напишите промокод" />
                     <StyledDateFormBlock>
                        <div>
                           <StyledPromoLabel>Дата начала</StyledPromoLabel>
                           <InputText width="158px" type="date" />
                        </div>
                        <div>
                           <StyledPromoLabel>Дата завершения</StyledPromoLabel>
                           <InputText width="158px" type="date" />
                        </div>
                        <div>
                           <StyledPromoLabel>Процент скидки</StyledPromoLabel>
                           <InputText
                              width="127px"
                              placeholder="%"
                              type="text"
                              position="absolute"
                              left="80%"
                           />
                        </div>
                     </StyledDateFormBlock>
                     <StyledPromoFormBtn>
                        <Button variant="default">Создать</Button>
                     </StyledPromoFormBtn>
                  </div>
               </Modal>
               <img src={warningIcon} alt="icon" />
            </StyledPromoBtnBlock>
            <Button width="210px" height="42px" padding="10px 24px">
               <img src={plusIcon} alt="icon" />
               Добавить книгу
            </Button>
         </StyledBtnBlock>
         <Breadcrumbs translate={pathTranslate} />
         <StyledMain>
            <StyledBookImageCont>
               <StyledBookImage src={selectedItem.images.mainImg} />
               <StyledBookImage2>
                  {selectedItem.images.secondImg && (
                     <img src={selectedItem.images.secondImg} alt="book" />
                  )}
               </StyledBookImage2>
            </StyledBookImageCont>
            <div>
               <StyledAmountBlock>
                  В корзине({selectedItem.id})
               </StyledAmountBlock>
               <StyledAmountBlock>
                  <img src={likeIcon} alt="icon" />({selectedItem.id})
                  {/* {selectedItem.audioValues.audioRecording && (
                     // eslint-disable-next-line jsx-a11y/media-has-caption
                     <audio
                        controls
                        src={selectedItem.audioValues.audioFragment}
                     />
                  )} */}
               </StyledAmountBlock>
               <StyledBookName>{selectedItem.name}</StyledBookName>
               <div>
                  <StyledPrice>{selectedItem.price}</StyledPrice>
               </div>
               <StyledInfo>
                  <div>
                     <StyledInfoTitle>Автор</StyledInfoTitle>
                     <StyledInfoTitle>Жанр</StyledInfoTitle>
                     <StyledInfoTitle>Язык</StyledInfoTitle>
                     <StyledInfoTitle>Издательство</StyledInfoTitle>
                     <StyledInfoTitle>Год выпуска</StyledInfoTitle>
                     <StyledInfoTitle>Обьем</StyledInfoTitle>
                  </div>
                  <div>
                     <StyledInfoText>{selectedItem.author}</StyledInfoText>
                     <StyledInfoText>{selectedItem.genre}</StyledInfoText>
                     <StyledInfoText>{selectedItem.language}</StyledInfoText>
                     <StyledInfoText>
                        {selectedItem.publishingHouse}
                     </StyledInfoText>
                     <StyledInfoText>{selectedItem.year}</StyledInfoText>
                     <StyledInfoText>{selectedItem.volume}</StyledInfoText>
                  </div>
               </StyledInfo>
               <StyledBtnCont>
                  <Button
                     onClick={handleOpenDeleteModal}
                     variant="universal"
                     color="#f34901"
                     border="1px solid"
                     background="none"
                     width="224px"
                  >
                     Удалить
                  </Button>
                  <Modal
                     open={isOpenDeleteModal}
                     onClose={handleCloseDeleteModal}
                     variant="mini"
                     width="460px"
                     height="172px"
                     justifyContent="space-around"
                  >
                     <div>
                        <StyledInfoText>
                           Вы уверены, что хотите удалить
                        </StyledInfoText>
                        <StyledInfoTitle>
                           “{selectedItem.name}” ?
                        </StyledInfoTitle>
                     </div>
                     <StyledModalBtnCont>
                        <Button
                           variant="default"
                           background="white"
                           color="#A3A3A3"
                           onClick={handleCloseDeleteModal}
                        >
                           Отменить
                        </Button>
                        <Button variant="default" onClick={deleteBookHandler}>
                           Удалить
                        </Button>
                     </StyledModalBtnCont>
                  </Modal>
                  <Button width="224px">
                     <StyledLink to={`/books/:${selectedItem.id}/addBook`}>
                        Редактировать
                     </StyledLink>
                  </Button>
               </StyledBtnCont>
            </div>
         </StyledMain>
         <StyledMainFooter>
            <TabInnerPage about={<About />} bookFragment={<BookFragment />} />
            {selectedItem.images.thirdImg && (
               <img src={selectedItem.images.thirdImg} alt="book" />
            )}
         </StyledMainFooter>
      </>
   )
}

export const StyledNavLink = styled(NavLink)`
   color: #c4c4c4;
   width: 72px;
   height: 23px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 130%;
   text-decoration: none;
   &.${(props) => props.activeClassName} {
      color: #f34901;
   }
`
export const StyledLink = styled(Link)`
   color: white;
   text-decoration: none;
`
const StyledDateFormBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 19px;
`
const StyledMainFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   padding-bottom: 20px;
`
const StyledPromoLabel = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
`
const StyledPromoFormBtn = styled.div`
   display: flex;
   justify-content: flex-end;
`
const StyledAmountBlock = styled.p`
   display: flex;
   align-items: center;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
   & :nth-child(1) {
      margin-right: 9px;
   }
`
const StyledBtnBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 43px;
`
const StyledPromoBtnBlock = styled.div`
   width: 213px;
   height: 42px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const StyledBookImage2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   & img {
      width: 100%;
      margin: 0px 0px 20px 20px;
   }
`
const StyledBookName = styled.h3`
   width: 504px;
   height: 36px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 28px;
   line-height: 130%;
`
const StyledInfoText = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
`
const StyledInfoTitle = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #222222;
`
const StyledBookImage = styled.img`
   width: 357px;
   margin-bottom: 185px;
`
const StyledMain = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 20px;
`
const StyledInfo = styled.div`
   display: flex;
   justify-content: space-between;
   width: 401px;
   margin-bottom: 76px;
`
const StyledBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
   width: 468px;
`
const StyledModalBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
   width: 278px;
   height: 42px;
`
const StyledPrice = styled.p`
   width: 40px;
   height: 19px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
   color: #f34901;
`
const StyledBookImageCont = styled.div`
   display: flex;
   width: 531px;
`
