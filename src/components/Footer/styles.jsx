import styled from "styled-components";
import { colors } from "../../services";

export const Footerpage = styled.div`
  width: 100%;
  background-color: ${colors.white};
  justify-content: center;
  text-align: center;
  color: ${colors.black};
  padding: 20px 0px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  a {
    text-decoration: none !important;
  }

  p {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const StyledButton = styled.div`
  color: ${colors.black};
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;

  label {
    text-decoration: none !important;
  }
`;

export const Miniature = styled.div`
  background-color: ${colors.primary};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${colors.white};
  display: flex;
  place-items: center;
  place-content: center;
`;
