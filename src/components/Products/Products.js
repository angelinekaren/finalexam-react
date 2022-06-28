import React from "react";
import springDrinks from "../../images/spring_drinks.png";
import { Fade } from "@mui/material";
import { Container } from "../../GlobalStyles";

import {
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
} from "../Home/Home.elements";

import { ProductRow, ProductColumn, Section } from "./Products.elements";

const Products = () => {
  return (
    <>
      <Section id="product">
        <Container>
          <Fade in timeout={2500}>
            <ProductRow>
              <ProductColumn>
                <ImgWrapper>
                  <Img src={springDrinks} alt="Coffee Home Image" />
                </ImgWrapper>
              </ProductColumn>
              <ProductColumn>
                <TextWrapper>
                  <TextTitle>
                    <Title>New Spring Drink~</Title>
                  </TextTitle>
                  <Subtitle>
                    Introducing to you sakura drink. Only exclusive for this
                    month!
                  </Subtitle>
                  <BtnWrapper>
                    <LearnBtn>
                      <LearnLink to="aboutus">Order now</LearnLink>
                    </LearnBtn>
                  </BtnWrapper>
                </TextWrapper>
              </ProductColumn>
            </ProductRow>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default Products;
