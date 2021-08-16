import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 200px;
  background: #fff;
  border: 1px solid #f8f8f8;

  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
  }

  font-weight: 600;

  p {
    box-shadow: 0px 3px 6px #d8d8d8;
    padding: 20px;
  }

  h5 a {
    overflow-wrap: anywhere;
    width: 320px;
    text-overflow: clip;
    white-space: normal;
  }
`;
