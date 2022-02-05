import React from "react";
import {
  Container,
  Wrapper,
  Form,
  Title,
  Input,
  Link,
  Button,
} from "./LoginStyles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>

          <Button>Login</Button>
          <Link> Dont remember password?</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
