import React from "react";
import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  List,
  ListItem,
  Title,
  ContactItem,
} from "./FooterStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Some Titel</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          nulla, maxime tempora provident placeat laborum magnam voluptates.
          Quas voluptate doloribus quia, laborum quae expedita incidunt culpa
          eveniet qui eius! Voluptatibus!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem> Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MyLocationIcon style={{ marginRight: 10 }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: 10 }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: 10 }} />
          contact@something.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
