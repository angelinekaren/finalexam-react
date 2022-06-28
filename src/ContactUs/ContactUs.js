import React from "react";
import { Container } from "../GlobalStyles";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import {
  SectionNew,
  HeadingWrapper,
  HeadingLine,
  ContactHeading,
  ContactSubheading,
  ContactContainer,
  ContactCard,
  ContactCardDetail,
  ContactCardIcon,
  ContactCardTitle,
  Form,
} from "./ContactUs.elements";
import { WelcomeColumn, WelcomeRow } from "../components/Home/Home.elements";
import Instagram from "@mui/icons-material/Instagram";

const ContactUs = () => {
  return (
    <>
      <SectionNew id="contactus">
        <Container>
          <HeadingWrapper>
            <HeadingLine />
            <ContactHeading>Need help?</ContactHeading>
            <ContactSubheading>Freely contact us</ContactSubheading>
          </HeadingWrapper>
          <WelcomeRow>
            <WelcomeColumn>
              <ContactContainer>
                <ContactCard>
                  <ContactCardDetail>
                    <ContactCardIcon>
                      <MailIcon sx={{ fontSize: "65px" }} />
                    </ContactCardIcon>
                    <ContactCardTitle>coffeeme@gmail.com</ContactCardTitle>
                  </ContactCardDetail>
                </ContactCard>
                <ContactCard>
                  <ContactCardDetail>
                    <ContactCardIcon>
                      <PhoneIcon sx={{ fontSize: "65px" }} />
                    </ContactCardIcon>
                    <ContactCardTitle>+62823595467</ContactCardTitle>
                  </ContactCardDetail>
                </ContactCard>
                <ContactCard>
                  <ContactCardDetail>
                    <ContactCardIcon>
                      <Instagram sx={{ fontSize: "65px" }} />
                    </ContactCardIcon>
                    <ContactCardTitle>@coffeeme</ContactCardTitle>
                  </ContactCardDetail>
                </ContactCard>
              </ContactContainer>
            </WelcomeColumn>
            <WelcomeColumn>
              <Card>
                <CardContent>
                  <Typography>Feedback</Typography>
                  <Form>
                    <Grid container columns={16}>
                      <TextField
                        fullWidth
                        className="listingName-input"
                        required
                        size="small"
                        id="listingName"
                        label="First Name"
                        variant="outlined"
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextField
                        fullWidth
                        className="listingName-input"
                        required
                        size="small"
                        id="listingName"
                        label="Last Name"
                        variant="outlined"
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextField
                        fullWidth
                        className="listingName-input"
                        required
                        size="small"
                        id="listingName"
                        label="Phone number"
                        variant="outlined"
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextField
                        fullWidth
                        className="listingName-input"
                        required
                        size="small"
                        id="listingName"
                        label="Email"
                        variant="outlined"
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextField
                        fullWidth
                        multiline
                        className="listingName-input"
                        required
                        size="small"
                        id="listingName"
                        label="Your feedback"
                        variant="outlined"
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <Button
                        type="submit"
                        variant="outlined"
                        color="success"
                        sx={{ marginTop: "2rem", width: "100%" }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Form>
                </CardContent>
              </Card>
            </WelcomeColumn>
          </WelcomeRow>
        </Container>
      </SectionNew>
    </>
  );
};

export default ContactUs;
