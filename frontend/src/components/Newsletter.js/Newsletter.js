import React from "react";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./NewsletterStyles";
import Send from "@mui/icons-material/Send";
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your fav products</Desc>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
