import styled from 'styled-components';
import { colors } from '../../services';

export const Container = styled.div`
  padding: 20px;
  margin: 0 10%;

  .select{
    background-color: ${colors.white};
    margin-left: 15px;
    
    input {
      padding-top: 13px !important;
      height: 13px !important;
    }
  }

.MuiInputBase-root {
  height: 42px;
}
  
  // .age-input{
  //   margin-right: 44%;
  //   align-items:center;
  //   display: flex;
  //   flex-direction: row;   

  //     @media only screen and (max-width: 425px) {
  //       margin-left: 50px;  
  //       margin-right: 5px;
  //       width: 100px
  //     }
  // }

  // .sex-input{
  //   width: 150px;
  //   margin-left: 10px;
  //   display: flex;
  //   flex-direction: row;
  //   align-items:center;

  //   @media only screen and (max-width: 425px) {
  //     width: 150px
  //   }
  // }

  button{
    margin-top: 10px;
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 15px;
    border-radius: 50px;
    border: none;
    cursor: pointer;

    &:hover{
      background-color: #009CCC;
    }
  }

  @media (max-width:768px){
    margin 0px;
  }
`;

export const SexAgeInputs = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 50px;
  gap: 10px;
  align-items: center;

  .sex-input {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }

  .age-input {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    gap: 150px !important;
  }
`;

export const NextButton = styled.div`
  text-align: center;

  button {
    width: 250px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
