import styled from "styled-components";
import { colors } from "../../services";

export const Card = styled.div`
  background-color: ${colors.primary};
  justify-content: center;
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  font-weight: 500;
  padding: 20px 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  a {
    color: ${colors.black};
    text-decoration: none;
  }
`;

export const Icon = styled.div`
  display: flex;
  position: absolute;
  right: 30px;
  cursor: pointer;

  img {
    fill: ${colors.white} !important;
  }
`;
