import styled from "styled-components"
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useState } from "react"


function Input(){

    const [password, setPassword] = useState(false)


    const toggleBtn = () => {
        setPassword(prevState => !prevState)
    }

    return (
        <div>
           <InputN type={password ? 'text' : 'password'} placeholder="Напишите ваше имя"/>
    <Div>
    <ButtonIcons onClick={toggleBtn}>
        {
         password ? <AiOutlineEyeInvisible/> :
              <AiOutlineEye/>

        }
    </ButtonIcons>
    </Div>

    
        </div>
     
    )
}

export default Input


const Div = styled.div`
    width: 510px;
    display: flex;
    justify-content: flex-end;
    margin-top: -3.4rem;
`



const InputN = styled.input `
   width: 514px;
   height: 38px;
   padding-left: 18px;
   border: 1px solid #C4C4C4;
   margin-top: 19px;

   &:hover {
    border: 1px solid blue;
   }
   &:active, :focus {
    outline: none;
    border: 1px solid red;
    color: black;
   }

   
   

`

const ButtonIcons = styled.button`

    width: 18.03px;
    margin-top: 19px;
    font-size: 1.5rem;
    outline: none;
    border: none;
    background-color: transparent;
    margin-left: -2.4rem;
    cursor: pointer;
    background: transparent;
    color: #C4C4C4;
    &:active {
        /* outline: none; */
        color:  black;
        background: transparent;

    }


`