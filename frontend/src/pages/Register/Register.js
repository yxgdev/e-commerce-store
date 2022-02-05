import React from "react";
import {
  Container,
  Wrapper,
  Form,
  Title,
  Input,
  Agreement,
  Button,
} from "./RegisterStyles";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <Agreement>
            By creating an account i consent to processing of my personal data
            ina ccordance with <b>privacy policy</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
