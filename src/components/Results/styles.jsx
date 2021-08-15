import styled from "styled-components";
import { colors } from "../../services";

export const Container = styled.div`
  padding: 20px;
  margin: 0 10%;

  @media (max-width:768px){
    margin 0px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Break = styled.div`
  margin-top: 20px;
`;

export const PercentisCard = styled.div`
  margin-left: 20px;
  align-self: center;

  td {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const Percentis = styled.div`
  width: 90px;
  height: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Box = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    margin-right: 10px;
  }

  p {
    font-weight: 700;
  }

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
export const PrintButton = styled.div`
  text-decoration: none;
  width: 250px;
  justify-self: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 15px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin: 0 auto; 

  img {
    margin-right: 20px;
  }

  &:hover {
    background-color: #009ccc;
  }
`;
