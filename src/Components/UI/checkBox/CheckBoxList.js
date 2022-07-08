
import React from "react";
import CheckBox from "./CheckBox";
import { styled } from "@mui/material";

const CheckBoxList = () => {
  let name = "Бестселлер";
  return (
    <FormStyles>
      <CheckBox genres={name} />
    </FormStyles>
  );
};

export default CheckBoxList;

const FormStyles = styled("div")`
  height: 278px;
  width: 228px;

`;
