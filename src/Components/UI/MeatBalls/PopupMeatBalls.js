import { useState } from 'react'
import { MenuItem } from '@mui/material'
import styled from 'styled-components'
import MeadIcon from '../../../assets/icons/MeatBalls/MeatBall.svg'
import PopUp from '../popup'

const PopUpMeatBalls = ({ options }) => {
   const [position, setPosition] = useState(null)
   const [openPopup, setOpenPopup] = useState(false)
   const toggleHandler = (e) => {
      e.stopPropagation()
      setPosition(e.currentTarget)
      setOpenPopup((prev) => !prev)
   }
   const closeHandler = () => {
      setOpenPopup((prev) => !prev)
   }
   return (
      <>
         <ImageBlock>
            <Img onClick={toggleHandler} src={MeadIcon} />
         </ImageBlock>
         <PopUp open={openPopup} onClose={closeHandler} anchorEl={position}>
            <WrapperMeatballs>
               {options.map((i, index) => {
                  return (
                     <MenuItem
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onClick={(e) => {
                           e.stopPropagation()
                           closeHandler()
                           i.onClick()
                        }}
                     >
                        <Icon>{i.icon}</Icon>
                        {i.text}
                     </MenuItem>
                  )
               })}
            </WrapperMeatballs>
         </PopUp>
      </>
   )
}
export default PopUpMeatBalls

const Icon = styled('span')`
   /* border: 1px solid red; */
   display: inline-block;
   margin-right: 10px;
`

const ImageBlock = styled('div')`
   /* border: 1px solid red; */
   width: 20px;
   height: 20px;
`
const WrapperMeatballs = styled.div`
   padding: 3px;
`
const Img = styled.img`
   /* border: 1px solid red; */
   width: 100%;
   height: 100%;
   cursor: pointer;
   /* height: 5px; */
`
