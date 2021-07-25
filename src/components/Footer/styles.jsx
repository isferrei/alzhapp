import styled from "styled-components";
import colors from "../../services/colors";

export const Footerpage = styled.div`
  width: 100%;
  background-color: ${colors.white};
  justify-content: center;
  text-align: center;
  color: ${colors.black};
  padding: 20px;

  p {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Miniature = styled.div`
  background-color: ${colors.primary}
  width: 30px;
  height: 30px;
  paddig: 5px;
  border-radius: 50%;
`;
