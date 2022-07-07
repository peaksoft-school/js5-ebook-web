import React from "react";
import CheckBox from "./CheckBox";
import { styled } from "@mui/material";

const chesckbox = [
  {
    id: "1",
    name: "Психология",
  },
  {
    id: "2",
    name: "Литература",
  },
  {
    id: "3",
    name: "Психология",
  },
  {
    id: "4",
    name: "Психология",
  },
  {
    id: "5",
    name: "Психология",
  },
  {
    id: "6",
    name: "Психология",
  },
  {
    id: "7",
    name: "Психология",
  },
  {
    id: "8",
    name: "Психология",
  },
  {
    id: "9",
    name: "Психология",
  },
];
const CheckBoxList = (props) => {
  return (
    <FormStyles>
      {chesckbox.map((genres) => {
        return <CheckBox key={genres.id} id={genres.id} genres={genres.name} />;
      })}
    </FormStyles>
  );
};

export default CheckBoxList;

const FormStyles = styled("div")`
border: 1px solid black;
  height: 278px;
  width: 228px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
   
    
  }
  
  ::-webkit-scrollbar-thumb{
    background: gray;
    border-radius: 10px;
    
  }
`;
