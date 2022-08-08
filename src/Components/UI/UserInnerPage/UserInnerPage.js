// import styled from '@emotion/styled'
// // import { useState } from 'react'
// import { Link, NavLink, Route, useParams } from 'react-router-dom'
// import Button from '../Button/Button'
// // import Modal from '../Modal'
// import About from './About'
// import BookFragment from './BookFragment'
// // import likeIcon from '../../assets/icons/like.svg'
// import { books } from './books'
// import Message from '../Message/Message'

// const DataValueSpan = [
//    { text: 'Здравствуйте', id: '1' },
//    { text: 'Хочу купить!', id: '2' },
//    { text: 'Я заинтересован', id: '3' },
//    { text: 'Торг возможен?', id: '4' },
// ]

// export const InnerPage = () => {
//    const params = useParams()
//    const selectedItem = books.find((item) => item.id === params.bookId)

//    return (
//       <>
//          <StyledMain>
//             <StyledBookImage src={selectedItem.image} />
//             <div>
//                <p>В корзине(13)</p>
//                {/* <p>
//                   <img src={likeIcon} />
//                   (12)
//                </p> */}
//                <StyledBookName>{selectedItem.name}</StyledBookName>
//                <StyledPrice>{selectedItem.price}</StyledPrice>
//                <StyledInfo>
//                   <div>
//                      <StyledInfoTitle>Автор</StyledInfoTitle>
//                      <StyledInfoTitle>Жанр</StyledInfoTitle>
//                      <StyledInfoTitle>Язык</StyledInfoTitle>
//                      <StyledInfoTitle>Издательство</StyledInfoTitle>
//                      <StyledInfoTitle>Год выпуска</StyledInfoTitle>
//                      <StyledInfoTitle>Обьем</StyledInfoTitle>
//                   </div>
//                   <div>
//                      <StyledInfoText>{selectedItem.author}</StyledInfoText>
//                      <StyledInfoText>{selectedItem.genre}</StyledInfoText>
//                      <StyledInfoText>{selectedItem.language}</StyledInfoText>
//                      <StyledInfoText>
//                         {selectedItem.publishingHouse}
//                      </StyledInfoText>
//                      <StyledInfoText>{selectedItem.year}</StyledInfoText>
//                      <StyledInfoText>{selectedItem.volume}</StyledInfoText>
//                   </div>
//                </StyledInfo>
//                <StyledBtnCont>
//                   <Button
//                      variant="universal"
//                      color="#f34901"
//                      border="1px solid"
//                      background="none"
//                      width="224px"
//                   >
//                      B избранное
//                   </Button>
//                   {/* <Modal
//                      open={open}
//                      onClose={handleClose}
//                      variant="mini"
//                      width="460px"
//                      height="172px"
//                      justifyContent="space-around"
//                   >
//                      <div>
//                         <StyledInfoText>
//                            Вы уверены, что хотите удалить
//                         </StyledInfoText>
//                         <StyledInfoTitle>
//                            {' '}
//                            “{selectedItem.name}” ?
//                         </StyledInfoTitle>
//                      </div>
//                      <StyledModalBtnCont>
//                         <Button
//                            variant="default"
//                            background="white"
//                            color="#A3A3A3"
//                            onClick={handleClose}
//                         >
//                            Отменить
//                         </Button>
//                         <Button variant="default">Удалить</Button>
//                      </StyledModalBtnCont>
//                   </Modal> */}
//                   <Button width="224px">
//                      <StyledLink to="/addBook">Добавить в корзину</StyledLink>
//                   </Button>
//                </StyledBtnCont>
//                <Divmessage>
//                   <Message />
//                </Divmessage>
//             </div>
//          </StyledMain>
//          <StyledNavBar>
//             <StyledUl>
//                <li>
//                   <StyledNavLink
//                      activeClassName="selected"
//                      to={`/book-detail/${selectedItem.id}/about`}
//                   >
//                      О книге
//                   </StyledNavLink>
//                </li>
//                <li>
//                   <StyledNavLink
//                      activeClassName="selected"
//                      to={`/book-detail/${selectedItem.id}/fragment`}
//                   >
//                      Читать фрагмент
//                   </StyledNavLink>
//                </li>
//             </StyledUl>
//             <Route path="/book-detail/:bookId/about">
//                <About />
//             </Route>
//             <Route path="/book-detail/:bookId/fragment">
//                <BookFragment />
//             </Route>
//          </StyledNavBar>
//       </>
//    )
// }

// export const StyledNavLink = styled(NavLink)`
//    color: #c4c4c4;
//    width: 72px;
//    height: 23px;
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 18px;
//    line-height: 130%;
//    text-decoration: none;
//    &.${(props) => props.activeClassName} {
//       color: #f34901;
//    }
// `
// export const StyledLink = styled(Link)`
//    color: white;
//    text-decoration: none;
// `
// const StyledUl = styled.ul`
//    width: 302px;
//    height: 100%;
//    list-style: none;
//    display: flex;
//    padding: 0;
//    margin: 0;
//    align-items: center;
//    justify-content: space-between;
//    margin-bottom: 84px;
// `
// const StyledBookName = styled.h3`
//    width: 504px;
//    height: 36px;
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 28px;
//    line-height: 130%;
// `
// const StyledInfoText = styled.p`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 14px;
//    line-height: 130%;
//    color: #222222;
// `
// const StyledInfoTitle = styled.p`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 14px;
//    line-height: 130%;
//    color: #222222;
// `
// const StyledBookImage = styled.img`
//    width: 357px;
//    /* height: 571px; */
//    margin-bottom: 185px;
// `
// const StyledMain = styled.div`
//    display: flex;
//    justify-content: space-between;
// `
// const StyledInfo = styled.div`
//    display: flex;
//    justify-content: space-between;
//    width: 401px;
//    margin-bottom: 76px;
// `
// const StyledBtnCont = styled.div`
//    display: flex;
//    justify-content: space-between;
//    width: 468px;
// `
// // const StyledModalBtnCont = styled.div`
// //    display: flex;
// //    justify-content: space-between;
// //    width: 278px;
// //    height: 42px;
// // `
// const StyledPrice = styled.p`
//    width: 40px;
//    height: 19px;
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 16px;
//    line-height: 120%;
//    color: #f34901;
// `
// const StyledNavBar = styled.nav``

// const Divmessage = styled.div`
//    padding-top: 20px;
// `

import styled from '@emotion/styled'
// import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, Route, useParams } from 'react-router-dom'
import Button from '../Button/Button'
// import Modal from '../Modal'
import About from './About'
import BookFragment from './BookFragment'
// import likeIcon from '../../assets/icons/like.png'
// import warningIcon from '../../assets/icons/warning.svg'
// import plusIcon from '../../assets/icons/plus.svg'
// import { books } from './books'
import Breadcrumbs from '../breadCrumbs/Breadcrumbs'
// import InputText from '../Inputs/InputText'

export const InnerPage = () => {
   // const [books, setBooks] = useState(null)
   const isvalid = useSelector((state) => state.addbook.bookContainer)
   console.log(isvalid)
   const { bookId } = useParams()
   const selectedItem = isvalid.find((item) => item.id === bookId)

   // const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   // const handleOpenDeleteModal = () => setIsOpenDeleteModal(true)
   // // const handleCloseDeleteModal = () => setIsOpenDeleteModal(false)

   // const [isOpenPromoModal, setIsOpenPromoModal] = useState(false)
   // const handleOpenPromoModal = () => setIsOpenPromoModal(true)
   // const handleClosePromoModal = () => setIsOpenPromoModal(false)

   const pathTranslate = {
      books: 'Главная',
      [bookId]: selectedItem.bookname,
   }

   return (
      <>
         <StyledBtnBlock>
            <StyledPromoBtnBlock>
               {/* <Button
                  // onClick={handleOpenPromoModal}
                  variant="universal"
                  color="#f34901"
                  border="1px solid"
                  background="none"
                  width="177px"
                  height="42px"
                  padding="10px 16px"
               >
                  Создать промокод
               </Button> */}
               {/* <Modal
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
                           <InputText type="date" />
                        </div>
                        <div>
                           <StyledPromoLabel>Дата завершения</StyledPromoLabel>
                           <InputText type="date" />
                        </div>
                        <div>
                           <StyledPromoLabel>Процент скидки</StyledPromoLabel>
                           <InputText
                              placeholder="%"
                              type="text"
                              position="absolute"
                              left="70%"
                           />
                        </div>
                     </StyledDateFormBlock>
                     <StyledPromoFormBtn>
                        <Button variant="default">Создать</Button>
                     </StyledPromoFormBtn>
                  </div>
               </Modal> */}
               {/* <img src={warningIcon} alt="icon" /> */}
            </StyledPromoBtnBlock>
            <Button width="210px" height="42px" padding="10px 24px">
               {/* <img src={plusIcon} alt="icon" /> */}
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
                  {selectedItem.images.thirdImg && (
                     <img src={selectedItem.images.thirdImg} alt="book" />
                  )}
               </StyledBookImage2>
            </StyledBookImageCont>
            <div>
               <StyledAmountBlock>
                  В корзине({selectedItem.id})
               </StyledAmountBlock>
               <StyledAmountBlock>
                  {/* <img src={likeIcon} alt="icon" />({selectedItem.id}) */}
                  {selectedItem.audioValues.audioFragment !== '' ? (
                     <h1>Audio</h1>
                  ) : (
                     <h1>not found Audio</h1>
                  )}
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
                     // onClick={handleOpenDeleteModal}
                     variant="universal"
                     color="#f34901"
                     border="1px solid"
                     background="none"
                     width="224px"
                  >
                     Удалить
                  </Button>
                  {/* <Modal
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
                           {' '}
                           "{selectedItem.name}" ?
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
                        <Button variant="default">Удалить</Button>
                     </StyledModalBtnCont>
                  </Modal> */}
                  <Button width="224px">
                     <StyledLink to={`/books/:${selectedItem.id}/addBook`}>
                        Редактировать
                     </StyledLink>
                  </Button>
               </StyledBtnCont>
            </div>
         </StyledMain>
         <nav>
            <StyledUl>
               <li>
                  <StyledNavLink
                     activeClassName="selected"
                     to={`/books/${selectedItem.id}/about`}
                  >
                     О книге
                  </StyledNavLink>
               </li>
               <li>
                  <StyledNavLink
                     activeClassName="selected"
                     to={`/books/${selectedItem.id}/fragment`}
                  >
                     Читать фрагмент
                  </StyledNavLink>
               </li>
            </StyledUl>
            <Route path="/books/:bookId/about">
               <About />
            </Route>
            <Route path="/books/:bookId/fragment">
               <BookFragment />
            </Route>
         </nav>
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
// const StyledDateFormBlock = styled.div`
//    display: flex;
//    align-items: center;
//    margin-bottom: 19px;
// `
// const StyledPromoLabel = styled.p`
//    font-family: 'Open Sans';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 14px;
//    line-height: 130%;
// `
// const StyledPromoFormBtn = styled.div`
//    display: flex;
//    justify-content: flex-end;
// `
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
const StyledUl = styled.ul`
   width: 302px;
   height: 100%;
   list-style: none;
   display: flex;
   padding: 0;
   margin: 0;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 84px;
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
// const StyledModalBtnCont = styled.div`
//    display: flex;
//    justify-content: space-between;
//    width: 278px;
//    height: 42px;
// `
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
   border: 1px solid red;
   /* height: 571px; */
`
