import React from "react";
import springDrinks from "../../images/spring_drinks.png";
import americano from "../../images/americano.jpg";
import caramelMacchiato from "../../images/caramel_macchiato.jpg";
import latte from "../../images/latte.jpg";
import {
  Fade,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Container } from "../../GlobalStyles";

import {
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

import {
  HeadingWrapper,
  HeadingLine,
  ContactHeading,
} from "../../ContactUs/ContactUs.elements";

import {
  ProductRow,
  ProductColumn,
  Section,
  Wrapper,
  BestSection,
  GridCustom,
} from "./Products.elements";

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
        <BestSection>
          <Container>
            <HeadingWrapper>
              <HeadingLine />
              <ContactHeading>Our best menu</ContactHeading>
            </HeadingWrapper>
            <Wrapper>
              <Card sx={{ padding: "0 20px" }}>
                <CardMedia
                  component="img"
                  image={caramelMacchiato}
                  height="300"
                  width="300"
                />
                <CardContent>
                  <Typography component="h2" variant="h5">
                    Caramel Macchiato
                  </Typography>
                  <Typography component="h5" gutterBottom>
                    Rp. 40.000
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullwidth>Order Now</Button>
                </CardActions>
              </Card>
              <Card>
                <CardMedia
                  image={latte}
                  component="img"
                  height="300"
                  width="300"
                />
                <CardContent>
                  <Typography component="h2" variant="h5">
                    Vanilla Latte
                  </Typography>
                  <Typography component="h5" gutterBottom>
                    Rp. 45.000
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullwidth>Order Now</Button>
                </CardActions>
              </Card>
              <Card>
                <CardMedia
                  src={americano}
                  component="img"
                  height="300"
                  width="300"
                />
                <CardContent>
                  <Typography component="h2" variant="h5">
                    Americano
                  </Typography>
                  <Typography component="h5" gutterBottom>
                    Rp. 30.000
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullwidth>Order Now</Button>
                </CardActions>
              </Card>
            </Wrapper>
          </Container>
        </BestSection>
      </Section>
    </>
  );
};

export default Products;
