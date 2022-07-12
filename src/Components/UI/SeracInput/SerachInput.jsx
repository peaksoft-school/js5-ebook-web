import { useState } from 'react'
import styled from 'styled-components'

import SearchIcons from '../../../assets/icons/SerachIcons.png'
import SearchMap from './SearchMap'

const User = [
   {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
         street: 'Kulas Light',
         suite: 'Apt. 556',
         city: 'Gwenborough',
         zipcode: '92998-3874',
         geo: {
            lat: '-37.3159',
            lng: '81.1496',
         },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
         name: 'Romaguera-Crona',
         catchPhrase: 'Multi-layered client-server neural-net',
         bs: 'harness real-time e-markets',
      },
   },
   {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
         street: 'Victor Plains',
         suite: 'Suite 879',
         city: 'Wisokyburgh',
         zipcode: '90566-7771',
         geo: {
            lat: '-43.9509',
            lng: '-34.4618',
         },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
         name: 'Deckow-Crist',
         catchPhrase: 'Proactive didactic contingency',
         bs: 'synergize scalable supply-chains',
      },
   },
   {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
         street: 'Douglas Extension',
         suite: 'Suite 847',
         city: 'McKenziehaven',
         zipcode: '59590-4157',
         geo: {
            lat: '-68.6102',
            lng: '-47.0653',
         },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
         name: 'Romaguera-Jacobson',
         catchPhrase: 'Face to face bifurcated interface',
         bs: 'e-enable strategic applications',
      },
   },
   {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
         street: 'Hoeger Mall',
         suite: 'Apt. 692',
         city: 'South Elvis',
         zipcode: '53919-4257',
         geo: {
            lat: '29.4572',
            lng: '-164.2990',
         },
      },
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: {
         name: 'Robel-Corkery',
         catchPhrase: 'Multi-tiered zero tolerance productivity',
         bs: 'transition cutting-edge web services',
      },
   },
   {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: {
         street: 'Skiles Walks',
         suite: 'Suite 351',
         city: 'Roscoeview',
         zipcode: '33263',
         geo: {
            lat: '-31.8129',
            lng: '62.5342',
         },
      },
      phone: '(254)954-1289',
      website: 'demarco.info',
      company: {
         name: 'Keebler LLC',
         catchPhrase: 'User-centric fault-tolerant solution',
         bs: 'revolutionize end-to-end systems',
      },
   },
   {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
         street: 'Norberto Crossing',
         suite: 'Apt. 950',
         city: 'South Christy',
         zipcode: '23505-1337',
         geo: {
            lat: '-71.4197',
            lng: '71.7478',
         },
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      company: {
         name: 'Considine-Lockman',
         catchPhrase: 'Synchronised bottom-line interface',
         bs: 'e-enable innovative applications',
      },
   },
   {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      address: {
         street: 'Rex Trail',
         suite: 'Suite 280',
         city: 'Howemouth',
         zipcode: '58804-1099',
         geo: {
            lat: '24.8918',
            lng: '21.8984',
         },
      },
      phone: '210.067.6132',
      website: 'elvis.io',
      company: {
         name: 'Johns Group',
         catchPhrase: 'Configurable multimedia task-force',
         bs: 'generate enterprise e-tailers',
      },
   },
   {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      address: {
         street: 'Ellsworth Summit',
         suite: 'Suite 729',
         city: 'Aliyaview',
         zipcode: '45169',
         geo: {
            lat: '-14.3990',
            lng: '-120.7677',
         },
      },
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
      company: {
         name: 'Abernathy Group',
         catchPhrase: 'Implemented secondary concept',
         bs: 'e-enable extensible e-tailers',
      },
   },
   {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      address: {
         street: 'Dayna Park',
         suite: 'Suite 449',
         city: 'Bartholomebury',
         zipcode: '76495-3109',
         geo: {
            lat: '24.6463',
            lng: '-168.8889',
         },
      },
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      company: {
         name: 'Yost and Sons',
         catchPhrase: 'Switchable contextually-based project',
         bs: 'aggregate real-time technologies',
      },
   },
   {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      address: {
         street: 'Kattie Turnpike',
         suite: 'Suite 198',
         city: 'Lebsackbury',
         zipcode: '31428-2261',
         geo: {
            lat: '-38.2386',
            lng: '57.2232',
         },
      },
   },
]
function Search({ ...props }) {
   const [query, setQuery] = useState('')

   const search = (data) => {
      return data.filter((item) =>
         item.name.toLocaleLowerCase().includes(query)
      )
   }

   return (
      <>
         <InputSerach
            type={props.type}
            placeholder={props.placeholder}
            onChange={(e) => setQuery(e.target.value)}
         />
         <Div>
            <ButtonIconsSerach>
               <ImgSerachIcons src={SearchIcons} />
            </ButtonIconsSerach>
         </Div>
         <SearchMap data={search(User)} />
      </>
   )
}
export default Search

const Div = styled.div`
   width: 900px;
   display: flex;
   justify-content: flex-end;
   margin-top: -4.6rem;
`

const InputSerach = styled.input`
   width: 895px;
   height: 40px;
   border: 1px solid #c4c4c4;
   margin-top: 10px;
   &::placeholder {
      padding: 18px;
      width: 306px;
      height: 18px;
      color: #969696;
      font-family: Open Sans;
      font-style: Regular;
      font-size: 14px;
      line-height: 18px;
      line-height: 130%;
      vertical-align: top;
   }
   &:hover {
      outline: none;
      border: 1px solid blue;
   }
   &:active,
   :focus {
      outline: none;
      outline-offset: 0;
      border-color: #f34901;
      color: black;
   }

   &:active::-webkit-input-placeholder {
      color: transparent;
   }
`

const ButtonIconsSerach = styled.button`
   outline: none;
   border: none;
   margin: 2.4rem 10px 10px;
   cursor: pointer;
   background: transparent;
   color: #969696;
   &:active {
      outline: none;
      color: #f34901;
   }
`

const ImgSerachIcons = styled.img`
   width: 20.31px;
   height: 20.31px;
   &:active {
      border: none;
      outline: none;
      filter: invert(0%) sepia(98%) saturate(500%) brightness(98%)
         contrast(102%);
      background: white;
   }
`
