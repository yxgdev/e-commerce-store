import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80)
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  margin: 10px 0px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &::disabled {
    color: green;
    cursor: not-allowed;
  }
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Error = styled.span`
  color: red;
`;
