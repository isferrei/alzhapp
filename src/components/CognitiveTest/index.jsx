import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  Container,
  Form,
  Box,
  Break,
  NextButton,
  SexAgeInputs,
} from './styles';
import { CognitiveTestContext } from '../../context/cognitiveTestContext';
import { NavLink } from 'react-router-dom';

function CognitiveTest({ history }) {
  const { cognitiveTest, setCognitiveTest } =
    React.useContext(CognitiveTestContext);

  return (
    <Container>
      <label>
        <strong>Please, enter the patient data:</strong>
      </label>
      <Break />
      <Form>
        <Box>
          <label>Physician:</label>
          <input
            type='text'
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                physician: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Patient:</label>
          <input
            type='text'
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                patient: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>ID number:</label>
          <input
            type='text'
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                idNumber: value,
              });
            }}
          />
        </Box>
        <Box>
          <SexAgeInputs>
            <div className='sex-input'>
              <label>Sex:</label>
              <input
                type='text'
                onChange={(event) => {
                  const value = event.target.value;
                  setCognitiveTest({
                    sex: value,
                  });
                }}
              />
            </div>
            <div className='age-input'>
              <label> Age:</label>
              <input
                type='text'
                onChange={(event) => {
                  const value = event.target.value;
                  setCognitiveTest({
                    age: value,
                  });
                }}
              />
            </div>
          </SexAgeInputs>
        </Box>
        <Box>
          <label>Diagnosis:</label>
          <FormControl fullWidth variant='outlined' className='select'>
            <Select
              value={cognitiveTest.diagnosis}
              renderValue={(value) => `${value}`}
              onChange={(event) => {
                const value = event.target.value;
                setCognitiveTest({
                  diagnosis: value,
                });
              }}
            >
              <MenuItem value='Please select the Diagnosis:' selected>
                <em>Please select the Diagnosis:</em>
              </MenuItem>
              <MenuItem value={'Dementia'}>Dementia</MenuItem>
              <MenuItem value={"Parkinson's disease"}>
                Parkinson's disease
              </MenuItem>
              <MenuItem value={'Mild cognitive impairment'}>
                Mild cognitive impairment
              </MenuItem>
              <MenuItem value={"Alzheimer's disease"}>
                Alzheimer's disease
              </MenuItem>
              <MenuItem value={'Others'}>Others</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <label>Cognitive test A:</label>
          <input
            type='text'
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                cognitiveTestA: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Score value:</label>
          <input
            type='text'
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                scoreA: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Cognitive test B:</label>
          <input
            type='text'
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                cognitiveTestB: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Score value:</label>
          <input
            type='text'
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                scoreB: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Ocular disease:</label>
          <input
            type='text'
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                ocularDisease: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>OCT model:</label>
          <FormControl fullWidth variant='outlined' className='select'>
            <Select
              value={cognitiveTest.octModel}
              renderValue={(value) => `${value}`}
              onChange={(event) => {
                const value = event.target.value;
                setCognitiveTest({
                  octModel: value,
                });
              }}
            >
              <MenuItem value='Please select the OCT Model:' selected>
                <em>Please select the OCT Model:</em>
              </MenuItem>
              <MenuItem value={'Topcon'}>Topcon</MenuItem>
              <MenuItem value={'Cirrus'}>Cirrus</MenuItem>
              <MenuItem value={'Spectralis'}>Spectralis</MenuItem>
              <MenuItem value={'RTVue'}>RTVue</MenuItem>
              <MenuItem value={'Others'}>Others</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Form>
      <Break />

      <NextButton>
        <NavLink to='/oct_data'>
          <button href='#contained-buttons'>OCT data</button>
        </NavLink>
      </NextButton>
    </Container>
  );
}

export default CognitiveTest;
