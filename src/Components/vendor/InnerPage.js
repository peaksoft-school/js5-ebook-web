import styled from '@emotion/styled'
import { useState } from 'react'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal'
import { Link, NavLink, Route } from 'react-router-dom'
import About from './About'
import BookFragment from './BookFragment'
import likeIcon from '../../assets/icons/like.svg'
import { books } from './books'
import { useParams } from 'react-router-dom'

export const InnerPage = () => {
   const params = useParams()
   const selectedItem = books.find((item) => item.id === params.bookId)
   console.log(selectedItem);

   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)
   return (
      <>
         <StyledMain>
            <StyledBookImage src={selectedItem.image} />
            <div>
               <p>В корзине(13)</p>
               <p>
                  <img src={likeIcon} />
                  (12)
               </p>
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
                     <StyledInfoText>{selectedItem.publishingHouse}</StyledInfoText>
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
                  >
                     Удалить
                  </Button>
                  <Modal
                     open={open}
                     onClose={handleClose}
                     variant="mini"
                     width="460px"
                     height="172px"
                  >
                     <span>Вы уверены, что хотите удалить</span>
                     <span> “{selectedItem.name}” ?</span>
                     <StyledBtnCont>
                        <Button
                           variant="default"
                           background="white"
                           color="#A3A3A3"
                           onClick={handleClose}
                        >
                           Отменить
                        </Button>
                        <Button variant="default">Удалить</Button>
                     </StyledBtnCont>
                  </Modal>
                  <Button>
                     <StyledLink to="/edit">Редактировать</StyledLink>
                  </Button>
               </StyledBtnCont>
            </div>
         </StyledMain>
         <StyledNavBar>
            <StyledUl>
               <li>
                  <StyledNavLink activeClassName="selected" to="/about">
                     О книге
                  </StyledNavLink>
               </li>
               <li>
                  <StyledNavLink activeClassName="selected" to="/fragment">
                     Читать фрагмент
                  </StyledNavLink>
               </li>
            </StyledUl>
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
   /* height: 160px; */
`
const StyledBtnCont = styled.div`
   display: flex;
   justify-content: space-between;
`
const StyledPrice = styled.p`
   color: #f34901;
`
const StyledNavBar = styled.nav``
