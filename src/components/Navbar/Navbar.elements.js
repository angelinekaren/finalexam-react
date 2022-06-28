import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const NavbarSection = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100px;
  z-index: 100;
  @media screen and (max-width: 960px) {
    transition: 0.2s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  align-items: center;
`;

export const Navlogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;
  cursor: pointer;
  margin: 30px 20px 0 24px;
  text-decoration: none;
  @media screen and (max-width: 960px) {
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const BrandHeader = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 20px;
  padding-left: 0.7rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: center;
  width: 100vw;
  white-space: nowrap;
`;

export const NavItem = styled.li`
  margin-top: 10px;
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavMenuRight = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding: 0px 5px;
  list-style-type: none;
  margin: 10px 20px 0 24px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItemLogin = styled.li`
  padding-right: 50px;
  align-self: center;
`;

export const Navlink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  height: 100%;
  font-weight: bold;
  padding: 0.5rem 1.3rem;
  font-size: 16px;
  &.active {
    color: #2bc66a;
  }
  &:hover {
    color: #2bc66a;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    display: table;
    text-align: center;
    padding: 2rem;
  }
`;

export const NavLoginLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  height: 100%;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    color: #2bc66a;
  }
`;

export const Btn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavSignupLink = styled(Link)`
  border-radius: 22px;
  background: #2bc66a;
  padding: 10px 30px;
  height: 1005;
  width: 100%;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25 ease-in-out;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background: green;
  }
  @media screen and (max-width: 960px) {
    padding: 12px 64px;
  }
`;
