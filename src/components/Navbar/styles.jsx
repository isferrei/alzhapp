import styled from "styled-components";
import colors from "../../services/colors";

export const Card = styled.div`
  background-color: ${colors.primary};
  justify-content: center;
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  font-weight: 500;
  padding: 20px 0px;
  margin: 0 auto;

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;
