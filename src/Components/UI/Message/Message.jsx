import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { ReactComponent as IconMessage } from '../../../assets/icons/Chat.svg'
import Button from '../Button/Button'

function Message({ spanValues, onClick, saveText }) {
   const [textValue, setTextValue] = useState('')

   const textValueHandle = (id) => {
      const filterSpanValues = spanValues.filter((element) => element.id === id)
      const saveTextValue = filterSpanValues.map((element) => {
         return element.text
      })
      setTextValue((prevState) => `${prevState} ${saveTextValue}`)
   }

   const onTextareaChangeHandler = (e) => {
      setTextValue(e.target.value)
   }

   useEffect(() => {
      saveText(textValue)
   }, [textValue])

   return (
      <form>
         <TextareaBlock>
            <TextareaStyled
               placeholder="Сообщение..."
               value={textValue}
               onChange={onTextareaChangeHandler}
            />
            <SpanBlock>
               {spanValues.map((text) => (
                  <Span key={text.id} onClick={() => textValueHandle(text.id)}>
                     {text.text}
                  </Span>
               ))}
            </SpanBlock>
         </TextareaBlock>
         <div>
            <Button
               background="#00AB1B"
               backgroundHover="#00AB1B"
               width="505px"
               padding="20px 24px"
               fontSize="14px"
               fontFamily="Open Sans"
               onClick={onClick}
            >
               Отправить <IconMessage />
            </Button>
         </div>
      </form>
   )
}

export default Message

const TextareaStyled = styled.textarea`
   width: 100%;
   height: 116px;
   border-radius: 0px;
   padding: 10px, 24px, 10px, 24px;
   resize: none;
   border: 3px solid #f8f8f8;
   &::placeholder {
      font-size: 16px;
      font-family: Open Sans;
      padding-top: 10px;
      color: #969696;
   }
`

const TextareaBlock = styled.div`
   position: relative;
   width: 505px;
   overflow: hidden;
`

const SpanBlock = styled.div`
   position: absolute;
   bottom: 20px;
   display: flex;
   justify-content: flex-start;
   overflow: auto;
   flex-direction: row;
   flex-wrap: nowrap;
   width: 106%;
   ::-webkit-scrollbar {
      height: 0px;
   }
   /* Track */
   ::-webkit-scrollbar-track {
      background: #f1f1f1;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
   }
   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
   &:last-child {
      margin-right: 0;
   }
`

const Span = styled.span`
   background-color: #f2f2f2;
   padding: 10px 14px;
   min-width: 120px;
   border-radius: 20px;
   color: #969696;
   cursor: pointer;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   justify-content: flex-start;
   margin-right: 10px;
   text-align: center;
   &:active {
      background: #969696;
      color: #f8f8f8;
   }
`
