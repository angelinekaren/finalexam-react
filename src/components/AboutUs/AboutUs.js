import React from "react";
import { Fade } from "@mui/material";
import { Container } from "../../GlobalStyles";
import store from "../../images/starbucks_store.jpeg";

import {
  WelcomeRow,
  WelcomeColumn,
  TextWrapper,
  TextTitle,
  Title,
  Subtitle,
  BtnWrapper,
  LearnBtn,
  LearnLink,
  ImgWrapper,
  Img,
} from "../Home/Home.elements";

import { Section } from "../Products/Products.elements";

const AboutUs = () => {
  return (
    <>
      <Section id="aboutus">
        <Container>
          <Fade in timeout={2500}>
            <WelcomeRow>
              <WelcomeColumn>
                <TextWrapper>
                  <TextTitle>
                    <Title>Opening Hours: 8am - 10pm</Title>
                  </TextTitle>
                  <Subtitle>
                    Jalan pegangsaan dua blok D5, 14250, DKI Jakarta, Jakarta
                    Utara, Kelapa Gading
                  </Subtitle>
                  <BtnWrapper>
                    <LearnBtn>
                      <LearnLink to="contactus">Contact Us</LearnLink>
                    </LearnBtn>
                  </BtnWrapper>
                </TextWrapper>
              </WelcomeColumn>
              <WelcomeColumn>
                <ImgWrapper>
                  <Img src={store} alt="Coffee Home Image" />
                </ImgWrapper>
              </WelcomeColumn>
            </WelcomeRow>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default AboutUs;
