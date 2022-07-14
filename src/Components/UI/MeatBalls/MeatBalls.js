import { useState } from "react";
import MeadBalls from '../../../assets/icons/MeatBalls/MeatBalls.jpg'
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
          
          {
            props.data.map((option) => {
              return <OptionMeadBalls 
                key={option.id} 
                onClick={()=> clickCloseHandler(option)} 
                >
                <div>{option.icon}</div>
                <Div >{option.text}</Div>
              </OptionMeadBalls>
            })
          }
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

const Div = styled.div`
width: 70%
`
