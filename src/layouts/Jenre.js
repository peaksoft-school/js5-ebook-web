import styled from 'styled-components'
import { useState } from 'react'
import { Menu } from '@mui/material'
import GenreMenu from '../Components/UI/genreMenu/GenreMenu'

function Jenre({ text }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const onClickGenreBtn = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const onCloseGenreMenu = () => {
      setAnchorEl(null)
   }
   return (
      <Div>
         <Label>
            <JenreButton onClick={onClickGenreBtn} />
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

export default Jenre

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

const JenreButton = styled.button`
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
