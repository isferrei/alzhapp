import React from 'react';
import { Button, Container } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Form, Box, Break } from './styles';
import { defaultReducer } from '../../reducers';


function OctData(props) {
  const [cognitiveTest, setCognitiveTest] = React.useReducer(defaultReducer);

  return (
    <Container>
      <label>OCT Data</label>
      <Break />
      <label><strong>Peripapillary RNFL</strong></label>
      <p>Average thickness (in microns)</p>
      <Form>
        <Box>
          <label>OD</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              physician: value,
            });
          }} />
        </Box>
        <Box>
          <label>OS</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              patient: value,
            });
          }} /></Box>
        <Break />
        <label><strong>Total macular thickness(ILM/RPE)</strong></label>
        <p>Total macular thickness (in microns)</p>
        <Box>
          <label>OD</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              physician: value,
            });
          }} />
        </Box>
        <Box>
          <label>OS</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              patient: value,
            });
          }} />
        </Box>
        <Break />
        <label><strong>Macular volume</strong></label>
        <p>Macular volume (in mm3)</p>
        <Box>
          <label>OD</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              physician: value,
            });
          }} />
        </Box>
        <Box>
          <label>OS</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              patient: value,
            });
          }} />
        </Box>
        <Break />
        <label><strong>GCL/IPL thickness</strong></label>
        <p>Average thickness (in microns)</p>
        <Box>
          <label>OD</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              physician: value,
            });
          }} />
        </Box>
        <Box>
          <label>OS</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              patient: value,
            });
          }} />
        </Box>
        <Break />
        <label><strong>GCL/IPL/RNFL thickness</strong></label>
        <p>Average thickness (in microns)</p>
        <Box>
          <label>OD</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              physician: value,
            });
          }} />
        </Box>
        <Box>
          <label>OS</label>
          <input type='text' onChange={event => {
            const value = event.target.value;
            setCognitiveTest({
              patient: value,
            });
          }} />
        </Box>
      </Form>
      <Break />
    </Container>
  );
}

export default OctData;
