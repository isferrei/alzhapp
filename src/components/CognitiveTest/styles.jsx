import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 0 10%;

  .select{
    background-color: #fff;
    margin-left: 15px;
  }

  .age-input{
    margin-left: 25px;
  }

  .sex-input{
    width: 150px;
    margin-left: -10px;
  }

  @media (max-width:768px){
    margin 0px;
  }
`;

export const NextButton = styled.div`
  text-align: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Break = styled.div`
  margin-top: 20px;
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
