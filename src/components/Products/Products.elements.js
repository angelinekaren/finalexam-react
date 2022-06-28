import styled from "styled-components";

export const Section = styled.div`
  background: #f7f2f3;
  padding: 130px 0 130px 0;
  color: #000;
`;

export const ProductRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row-reverse;
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
