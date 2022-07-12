import { useState } from "react";
import MeadBalls from "../../../assets/images/MeatBalls.jpg"
import styled from "styled-components";

const MeadBall = (props) => {

  const [state, setState] = useState(false);

  const clickHandler = () => {
    setState((prevstate) => !prevstate);
  };

  const clickCloseHandler = (option) => {
    setState(false)
    option.onClick(option)
  }

  return (
    <DivBlock>
      <Img
        onClick={clickHandler}
        src={MeadBalls}
      />
      {state && (
        
        <DivMeatBalls>
          
          {props.arrays.map((option) =>
          <> 
              <OptionMeadBalls key={option.id} onClick={()=> clickCloseHandler(option)} ><div>{option.icon}</div><Div >{option.text}</Div></OptionMeadBalls>
              <Hr/>
              
          </>
          )}
          <header/>
        </DivMeatBalls>
      )}
    </DivBlock>
  );
};

export default MeadBall;

const DivBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
width: 3.75px;
height: 16px;
`;

const DivMeatBalls = styled.div`
  width: 180px;
  height: 117px;
  border: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & header{
    height: 4px;
    background-color: white;
    margin-top: -10px;
  }
`;

const OptionMeadBalls = styled.span`
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #5d5d5d;
`;

const Hr = styled.hr`
width: 133px;
border-bottom: 1px solid black;
`

const Div = styled.div`
width: 70%
`
