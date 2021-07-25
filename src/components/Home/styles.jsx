import styled from "styled-components";
import colors from "../../services/colors";

export const Homepage = styled.div`
  width: 100%;
  height: 30vh;
  margin: 0 auto;
  background-color: ${colors.white};
  justify-content: center;
  text-align: center;
  color: ${colors.black};
  font-size: 28px;
  font-weight: 500;
  padding: 100px 20px;

  p {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Subtitle = styled.div`
  margin-top: 15px;
  font-size: 18px;
`;
