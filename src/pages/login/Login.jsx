import React from "react";
import {
  FormContainer,
  FormHeader,
  LoginContainer,
  LoginImg,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

import mealImg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div>
      <LoginContainer>
        <FormContainer onSubmit={handleSubmit}>
          <LoginImg src={mealImg} alt="img" />
          <FormHeader>{"<YMN/>"} RECİPE</FormHeader>
          <StyledForm>
            <StyledInput type="text" placeholder="Enter Username" />
            <StyledInput type="password" placeholder="Enter Password" />
            <StyledButton type="submit">Login</StyledButton>
          </StyledForm>
        </FormContainer>
      </LoginContainer>
    </div>
  );
};

export default Login;
