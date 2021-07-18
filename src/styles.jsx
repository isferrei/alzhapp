import styled from 'styled-components';

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

input{
    width: 60%;
    margin-left: 15px;
    padding: 10px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
}
input:focus{
    outline-color: #3a86ff;
    
}

`;
