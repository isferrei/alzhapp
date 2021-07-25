import styled from "styled-components";
import colors from "../../services/colors";

export const Card = styled.div`
  width: 100%;
  background-color: ${colors.primary};
  justify-content: center;
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  font-weight: 500;
  padding: 20px;

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;
