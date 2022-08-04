import styled from '@emotion/styled'
import { useState } from 'react'
import { Link, NavLink, Route, useParams } from 'react-router-dom'
import Button from '../Button/Button'
import Modal from '../Modal'
import About from './About'
import BookFragment from './BookFragment'
// import likeIcon from '../../assets/icons/like.svg'
import { books } from './books'
import { Message } from '../Message/Message'

export const InnerPage = () => {
   const params = useParams()
   const selectedItem = books.find((item) => item.id === params.bookId)

   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)
   return (
      <>
         <StyledMain>
            <StyledBookImage src={selectedItem.image} />
            <div>
               <p>В корзине(13)</p>
               {/* <p>
                  <img src={likeIcon} />
                  (12)
               </p> */}
               <StyledBookName>{selectedItem.name}</StyledBookName>
               <StyledPrice>{selectedItem.price}</StyledPrice>
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
                     onClick={handleOpen}
                     variant="universal"
                     color="#f34901"
                     border="1px solid"
                     background="none"
                     width="224px"
                  >
                     B избранное
                  </Button>
                  <Modal
                     open={open}
                     onClose={handleClose}
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
                           “{selectedItem.name}” ?
                        </StyledInfoTitle>
                     </div>
                     <StyledModalBtnCont>
                        <Button
                           variant="default"
                           background="white"
                           color="#A3A3A3"
                           onClick={handleClose}
                        >
                           Отменить
                        </Button>
                        <Button variant="default">Удалить</Button>
                     </StyledModalBtnCont>
                  </Modal>
                  <Button width="224px">
                     <StyledLink to="/addBook">Добавить в корзину</StyledLink>
                  </Button>
               </StyledBtnCont>
               <Divmessage>
                  <Message />
               </Divmessage>
            </div>
         </StyledMain>
         <StyledNavBar>
            <StyledUl>
               <li>
                  <StyledNavLink
                     activeClassName="selected"
                     to={`/book-detail/${selectedItem.id}/about`}
                  >
                     О книге
                  </StyledNavLink>
               </li>
               <li>
                  <StyledNavLink
                     activeClassName="selected"
                     to={`/book-detail/${selectedItem.id}/fragment`}
                  >
                     Читать фрагмент
                  </StyledNavLink>
               </li>
            </StyledUl>
            <Route path="/book-detail/:bookId/about">
               <About />
            </Route>
            <Route path="/book-detail/:bookId/fragment">
               <BookFragment />
            </Route>
         </StyledNavBar>
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
   /* height: 571px; */
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
const StyledNavBar = styled.nav``

const Divmessage = styled.div`
   padding-top: 20px;
`
