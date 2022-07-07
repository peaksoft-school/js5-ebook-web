import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox";
import { styled } from "@mui/material";
import { useState } from "react";
const CheckBox = (props) => {
  const [state,setState]=useState('')

  const checkBoxHandler=(e)=>{
    setState(e.target.value)
  }
  console.log(state);
  return (
    <FormGroup>
    
      <FormLabelStyle control={<ChesckboxStyle  value={props.genres} />} label={props.genres} onChange={checkBoxHandler}/>
   
    </FormGroup>
  );
};

export default CheckBox;

const FormLabelStyle = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    color: black;
    font-size: 16px;
  }
`;
const ChesckboxStyle = styled(MuiCheckbox)`
  .MuiSvgIcon-root {
    width: 26px;
    height: 26px;
  }

  &.Mui-checked {
    color: #f34901;
  }
`;
