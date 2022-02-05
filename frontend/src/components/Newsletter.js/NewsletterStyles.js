import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightweight;
`;

export const Input = styled.input`
  border: none;
  flex: 8;
`;

export const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: white;
`;

export const Send = styled.div``;