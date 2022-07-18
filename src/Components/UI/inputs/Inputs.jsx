import { styled } from '@mui/material'

import { useState, forwardRef, useEffect } from 'react'

const Input = forwardRef(
   ({
      ref,
      onChange,
      type,
      placeholder,
      value,
      icon,
      focusBorder,
      iconColor,
      iconTwo,
      iconThree,
   }) => {
      const [bool, setBool] = useState(false)
      const [isPassword, setIsPassword] = useState(false)
      const [stateIcon, setStateIcon] = useState('')

      const onFocusHandler = () => {
         setBool(true)
      }
      const onBlurHandler = () => {
         setBool(false)
      }

      const onClickIconHandler = () => {
         setIsPassword(!isPassword)
      }

      useEffect(() => {
         if (isPassword && iconThree) {
            setStateIcon(iconThree)
         } else if (bool) {
            setStateIcon(iconTwo)
         } else {
            setStateIcon(icon)
         }
      }, [bool, isPassword])

      return (
         <FormStyle>
            <InputStyle
               type={isPassword && iconThree ? 'text' : type}
               ref={ref}
               onChange={onChange}
               placeholder={placeholder}
               value={value}
               search={focusBorder}
               onFocus={onFocusHandler}
               onBlur={onBlurHandler}
               icon={icon}
            />
            <Icon
               focus={bool}
               iconColor={iconColor}
               onClick={onClickIconHandler}
            >
               {stateIcon}
            </Icon>
         </FormStyle>
      )
   }
)
export default Input
const Icon = styled('button')`
   border: none;
   background-color: rgba(0, 0, 0, 0);
   display: flex;
   align-items: center;
   justify-content: flex-start;
   position: absolute;
   width: 40px;
   right: 0px;
   top: 0;
   bottom: 0;
   z-index: 10;
   cursor: pointer;
   color: ${(props) => (props.focus ? props.iconColor : '#c4c4c4')};
`
const FormStyle = styled('div')`
   width: 100%;
   display: flex;
   justify-content: space-between;
   position: relative;
   background-color: ${(props) => props.focus && 'white'};
`
const InputStyle = styled('input')`
   background: #f8f8f8;
   width: 100%;
   outline: none;
   padding: 10px;
   padding-right: ${(props) => (props.icon ? '40px' : '10px')};
   border: 1px solid #c4c4c4;
   &:focus {
      background-color: white;
      border: ${(props) => props.search || ''};
   }
`
