import React from "react";
import {
  Container,
  Arrow,
  Wrapper,
  InfoContainer,
  Image,
  ImgContainer,
} from "./SliderStyles";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer></InfoContainer>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
