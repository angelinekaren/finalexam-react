import React from "react";
import coffeeHome from "../../images/coffee_home.jpg";
import { Fade } from "@mui/material";
import { Container } from "../../GlobalStyles";

import {
  Section,
  WelcomeRow,
  WelcomeColumn,
  TextWrapper,
  TextTitle,
  Title,
  WelcomeTitle,
  Subtitle,
  BtnWrapper,
  LearnBtn,
  LearnLink,
  ImgWrapper,
  Img,
} from "./Home.elements";

const HomeSection = () => {
  return (
    <>
      <Section id="home">
        <Container>
          <Fade in timeout={2500}>
            <WelcomeRow>
              <WelcomeColumn>
                <TextWrapper>
                  <TextTitle>
                    <Title>Welcome to</Title>
                    <WelcomeTitle>CofeeMe</WelcomeTitle>
                  </TextTitle>
                  <Subtitle>
                    CoffeeMe is built since 2022 and here we offer you the best
                    quality coffee bean!
                  </Subtitle>
                  <BtnWrapper>
                    <LearnBtn>
                      <LearnLink to="aboutus">Learn More</LearnLink>
                    </LearnBtn>
                  </BtnWrapper>
                </TextWrapper>
              </WelcomeColumn>
              <WelcomeColumn>
                <ImgWrapper>
                  <Img src={coffeeHome} alt="Coffee Home Image" />
                </ImgWrapper>
              </WelcomeColumn>
            </WelcomeRow>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default HomeSection;
