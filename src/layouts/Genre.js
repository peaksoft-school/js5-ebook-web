import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Menu } from '@mui/material'
import GenreMenu from '../Components/UI/genreMenu/GenreMenu'
import { URL } from '../utils/constants/constants'

const requestObj = {
   genres: [1, 2],
   bookType: 'PAPER_BOOK',
   priceFrom: null,
   priceTo: null,
   languages: null,
   search: 'all',
   sortBy: null,
   page: null,
   size: null,
}
function test(obj) {
   let text = ''
   // eslint-disable-next-line no-restricted-syntax
   for (const key in obj) {
      if (obj[key] !== null) {
         if (text !== '') {
            if (key === 'genres') {
               text = `${text}&${genresFunc(obj[key])}`
            } else {
               text = `${text}&${key}=${obj[key]}`
            }
         } else if (key === 'genres') {
            text = `?${genresFunc(obj[key])}`
         } else {
            text = `?${key}=${obj[key]}`
         }
      }
   }
   return text
}

function genresFunc(genres) {
   let text = ''
   for (let i = 0; i < genres.length; i += 1) {
      if (text !== '') {
         text = `${text}&genres=${genres[i]}`
      } else {
         text = `genres=${genres[i]}`
      }
   }
   return text
}

console.log(genresFunc(requestObj.genres))

console.log(test(requestObj))

function Genre({ text }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   // const [books, setBooks] = useState(null)
   useEffect(() => {
      fetch(`${URL}/api/books${test(requestObj)}`)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            console.log(data)
         })
   }, [requestObj])
   const onClickGenreBtn = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const onCloseGenreMenu = () => {
      setAnchorEl(null)
   }
   return (
      <Div>
         <Label>
            <GenreButton onClick={onClickGenreBtn} />
            <LabelSpan>{text}</LabelSpan>
         </Label>
         <GenreMenuPopUp
            open={open}
            anchorEl={anchorEl}
            onClose={onCloseGenreMenu}
         >
            <GenreMenu />
         </GenreMenuPopUp>
      </Div>
   )
}

export default Genre

const GenreMenuPopUp = styled(Menu)`
   & div.MuiPaper-root {
      margin-top: 30px;
   }
   & ul {
      padding: 0;
   }
`

const Div = styled.div`
   position: relative;
   /* border: 1px solid red; */
`

const LabelSpan = styled.span`
   margin-left: 10px;
`

const Label = styled.label`
   font-family: 'Open Sans';
   font-size: 600;
   font-weight: 600;
   line-height: 21.79px;
   display: flex;
   align-items: center;
   cursor: pointer;
`

const GenreButton = styled.button`
   width: 37px;
   height: 18px;
   background-color: rgba(0, 0, 0, 0);
   border: none;
   border-top: 2px solid #222222;
   border-bottom: 2px solid #222222;
   /* position: relative; */
   cursor: pointer;
   &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 2px;
      width: 22px;
      background-color: #222222;
   }
`
