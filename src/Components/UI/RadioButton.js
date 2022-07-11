import styled from "styled-components";
import React, { useRef } from "react";

function RadioItem({ name, handleChange }) {
  const nameRef = useRef();

  const onHandleChange = () => {
    handleChange(nameRef.current.innerHTML);
  };

  return (
    <Div2>
      <InputRadio
        type="radio"
        id="html"
        name="radio"
        onClick={onHandleChange}
      />
      <span ref={nameRef}>{name}</span>
    </Div2>
  );
}

const RadioButton = ({ data, handleChange }) => {
  return (
    <RadioContainer>
      <Div>
        <RadioHeader>Тип</RadioHeader>
        {data.map((elem) => {
          return (
            <RadioItem
              key={elem.id}
              name={elem.name}
              handleChange={handleChange}
            />
          );
        })}
      </Div>
    </RadioContainer>
  );
};
export default RadioButton;

const RadioContainer = styled.div`
  display: inline-block;
`

const RadioHeader = styled.div`
  width: 100%;
  font-family: "Open Sans";
  font-size: 1rem;
  font-weight: 400;
`;

const InputRadio = styled.input`
  width: 26px;
  height: 26px;
  margin-right: 10px;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  height: 59px;
  padding: 10px;
  accent-color: #f34901;
`;
const Div2 = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 1rem;
  margin-right: 36px;
`;
