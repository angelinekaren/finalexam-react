import React, { useState } from "react";
import coffeeLogo from "../../images/coffee_logo.png";
import { animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

import {
  NavbarSection,
  NavContainer,
  Navlogo,
  BrandHeader,
  NavMenu,
  NavItem,
  Navlink,
  NavMenuRight,
  NavItemLogin,
  NavLoginLink,
  Btn,
  NavSignupLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [navChangeColor, setNavChangeColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavChangeColor(true);
    } else {
      setNavChangeColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleToggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      =
      <NavbarSection className={navChangeColor ? "navbar active" : "navbar"}>
        <NavContainer>
          <Navlogo to="/" onClick={handleToggleHome}>
            <img src={coffeeLogo} alt="Coffee Logo" width="38" height="33" />
            <BrandHeader>CoffeeMe</BrandHeader>
          </Navlogo>
          <NavMenu>
            <NavItem>
              <Navlink to="home" smooth={true} duration={500} spy={true}>
                Home
              </Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="product" smooth={true} duration={500} spy={true}>
                Product
              </Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="aboutus" smooth={true} duration={500} spy={true}>
                About Us
              </Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="contactus" smooth={true} duration={500} spy={true}>
                Contact Us
              </Navlink>
            </NavItem>
          </NavMenu>
          <NavMenuRight>
            <NavItemLogin>
              <NavLoginLink to="/login">Log In</NavLoginLink>
            </NavItemLogin>
            <Btn>
              <NavSignupLink to="/signup">Sign Up</NavSignupLink>
            </Btn>
          </NavMenuRight>
        </NavContainer>
      </NavbarSection>
    </>
  );
};

export default Navbar;
