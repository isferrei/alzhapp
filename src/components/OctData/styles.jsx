import styled from "styled-components";
import { colors } from "../../services";

export const Container = styled.div`
  padding: 20px;
  margin: 0 10%;

  @media (max-width:768px){
    margin 0px;
  }

  

`;

export const NextButton = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  button {
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 15px;
    border-radius: 50px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #009ccc;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  div {
    line-height: 8px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;

export const Break = styled.div`
  margin-top: 20px;
`;

export const PercentisImg = styled.div`
  margin-left: 20px;
`;
export const PercentisCard = styled.div`
  margin-left: 20px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  td {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const Percentis = styled.div`
  width: 90px;
  height: 20px;
  background: ${({ background }) => background};
  border: 1px solid #d8d8d8;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Box = styled.div`
  margin-top: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    width: 60%;
    margin-left: 15px;
    padding: 10px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
  }
  input:focus {
    outline-color: #3a86ff;
  }
`;
