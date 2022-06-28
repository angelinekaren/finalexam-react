import styled from "styled-components";
import { Grid } from "@mui/material";

export const Section = styled.div`
  background: #faf7f7;
  padding: 130px 0 130px 0;
  color: #000;
`;

export const GridCustom = styled(Grid)`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
`;

export const BestSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0 80px;
  background: #faf7f7;
`;

export const ProductRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row-reverse;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ProductColumn = styled.div`
  max-width: 50%;
  flex-basis: 50%;
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  flex: 1;
  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-basis: 100%;
    max-width: 100%;
  }
`;
