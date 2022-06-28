import React from "react";
import coffeeLogo from "../../images/coffee_logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  FooterContainer,
  FooterWrapper,
  FooterContent,
  FooterLogo,
  BrandTitle,
  FooterText,
  MenuRight,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <FooterLogo>
            <img src={coffeeLogo} alt="EasyRent Logo" width="38" height="33" />
            <BrandTitle>CoffeeMe</BrandTitle>
          </FooterLogo>
          <MenuRight>
            <InstagramIcon sx={{ color: "white" }} />
            <FacebookIcon sx={{ color: "white" }} />
          </MenuRight>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
