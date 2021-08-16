import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 200px;
  background: #fff;
  border: 1px solid #f8f8f8;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
  }

  .pos {
    position: absolute;
    z-index: 0;
    left: 0px;
    top: 0px;
  }

  div {
    box-shadow: 0px 3px 6px #d8d8d8;
    padding: 20px;
  }
`;
