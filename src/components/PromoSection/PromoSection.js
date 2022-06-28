import React from "react";
import { Fade } from "@mui/material";
import { Container } from "../../GlobalStyles";
import frappucino from "../../images/frappucino_image.jpg";

import {
  Section,
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

const PromoSection = () => {
  return (
    <>
      <Section id="promo">
        <Container>
          <Fade in timeout={2500}>
            <WelcomeRow>
              <WelcomeColumn>
                <TextWrapper>
                  <TextTitle>
                    <Title>50% OFF</Title>
                  </TextTitle>
                  <Subtitle>
                    on selected Frappucino with purchase of any handcrafted
                    beverage
                  </Subtitle>
                  <BtnWrapper>
                    <LearnBtn>
                      <LearnLink to="/">Order now</LearnLink>
                    </LearnBtn>
                  </BtnWrapper>
                </TextWrapper>
              </WelcomeColumn>
              <WelcomeColumn>
                <ImgWrapper>
                  <Img src={frappucino} alt="Coffee Home Image" />
                </ImgWrapper>
              </WelcomeColumn>
            </WelcomeRow>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default PromoSection;
