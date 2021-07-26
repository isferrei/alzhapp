import styled from "styled-components";
import colors from "../../services/colors";

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
    text-decoration: none;
  }
`;

export const Miniature = styled.div`
  background-color: ${colors.primary};
  width: 50px;
  height: 50px;
  paddig: 5px;
  border-radius: 50%;
`;
