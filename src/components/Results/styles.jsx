import styled from 'styled-components';
import { colors } from '../../services';

export const Container = styled.div`
  padding: 20px;
  margin: 0 10%;

  @media (max-width:768px){
    margin 0px;
  }
`;

export const Buttons = styled.div`
  display: grid;
  margin: 30px;
  grid-template-columns: 1fr;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Break = styled.div`
  margin-top: 15px;
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
  border: 1px solid #d8d8d8;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;

  .label-age {
    margin-left: 20px;
  }

  label {
    margin-right: 10px;
  }

  p {
    font-weight: 700;
  }
`;
export const PrintButton = styled.div`
  a {
    text-decoration: none;
  }
  a:link {
    text-decoration: none;
  }
  width: 250px;
  justify-self: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 10px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  height: 20px;

  img {
    margin-right: 20px;
  }

  &:hover {
    background-color: #009ccc;
  }
`;
