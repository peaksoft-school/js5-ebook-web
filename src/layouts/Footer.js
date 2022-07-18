import styled from 'styled-components'
import Logotype from './Logotype'

const arr = [
   {
      name: 'Жанры',
      id: 1,
   },
   {
      name: 'Аудиокниги',
      id: 2,
   },
   {
      name: 'Электронные книги',
      id: 3,
   },
   {
      name: 'Бестселлеры',
      id: 4,
   },
   {
      name: 'Промокоды',
      id: 5,
   },
   {
      name: 'Политика конфиденсиональности',
      id: 6,
   },
]

function Footer() {
   return (
      <FooterBlock>
         <Logotype backgroundColor="#1C1C1C" flexGrow="1" justifyContent="flex-start" alignItems="flex-start" />
         <FooterList>
            {arr.map((elem) => {
               return (
                  <FooterItem key={elem.id}>
                     <FooterItemLink>{elem.name}</FooterItemLink>
                  </FooterItem>
               )
            })}
         </FooterList>
         <Address>
            <AddressItem>
               <AddressLink>Свяжитесь с нами</AddressLink>
            </AddressItem>
            <AddressItem>
               <AddressLink>+ 996 707 123 456</AddressLink>
            </AddressItem>
            <AddressItem>
               <AddressLink>Г. Бишкек уд.Исанова 45</AddressLink>
            </AddressItem>
         </Address>
      </FooterBlock>
   )
}

export default Footer

const FooterList = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   justify-content: flex-start;
   flex-flow: column wrap;
   flex-basis: auto;
   max-height: 150px;
   flex-grow: 6;
`
const FooterItem = styled.li`
   flex-shrink: 0;
   flex-grow: 1;
`
const FooterItemLink = styled.span`
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 1rem;
   line-height: 22px;
   cursor: pointer;
   position: relative;
   padding: 10px 20px;
   display: inline-block;
   transition: ease-in 0.2s;
   &:hover {
      color: #f34901;
   }
   &:after {
      content: '';
      position: absolute;
      top: 90%;
      left: 0%;
      /* transform: translate(-50%, -50%); */
      /* height: 0%; */
      width: 0%;
      transition: ease-in 0.2s;
   }
   &:hover:after {
      width: 100%;
      /* height: 100%; */
      border-bottom: 2px solid #f34901;
   }
`
const Address = styled(FooterList)`
   flex-grow: 1;
`
const AddressItem = styled(FooterItem)`
   &:first-child > span {
      font-weight: 600;
      font-size: 20px;
   }
`
const AddressLink = styled(FooterItemLink)``

const FooterBlock = styled.div`
   padding: 75px 0;
   color: #fff;
   display: flex;
   flex-flow: row nowrap;
   width: 100%;
`
