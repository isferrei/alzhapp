import React from 'react';
import { Homepage, Subtitle } from './styles';
import alzhlogo from '../../img/alzhlogo.svg';

function Home() {
  return (
    <Homepage>
      <img src={alzhlogo} width='200px' />
      <h2>AlzhApp</h2>
      <Subtitle>ALZHEIMER RISK CALCULATOR</Subtitle>
      <p>Enter patient data information</p>
    </Homepage>
  );
}

export default Home;
