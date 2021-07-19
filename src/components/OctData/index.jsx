import React from 'react';
import { Button, Container } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Form, Box, Break, Row, Percentis, PercentisCard } from './styles';
import { defaultReducer } from '../../reducers';
import { colors } from '../../services/colors'
import { color } from '@material-ui/system';

const percentisControle = [
  {var: 'peripapillary', p1: 72.9, p5: 80.6, p10:84.7, p25: 91.6, p50: 99.3, p75: 106.9, p90:113.8, p95:117.9, p99: 125.7},
  {var: 'macular', p1: 242.9, p5: 252.4, p10:257.4, p25: 265.8, p50: 275.1, p75: 284.4, p90:292.8, p95:297.9, p99: 307.3},
  {var: 'GCL/IPL', p1: 57.6, p5: 62.2, p10:64.7, p25: 68.8, p50: 73.4, p75: 77.9, p90:82.1, p95:84.5, p99: 89.1},
  {var: 'GCL/IPL/RNFL', p1: 84.6, p5: 89.3, p10:91.9, p25: 96.1, p50: 100.8, p75: 105.4, p90:109.7, p95:112.2, p99: 116.9},
  {var: 'macular volume', p1: 7.2, p5: 7.5, p10:7.6, p25: 7.9, p50: 8.2, p75: 8.4, p90:8.7, p95:8.8, p99: 9.1}
]

function OctData(props) {
  const [cognitiveTest, setCognitiveTest] = React.useReducer(defaultReducer);
  const [background, setBackground] = React.useState();

  function handlePercentis(data, value){
      console.log(percentisControle.find(percent => percent.var === data));

    if(percentisControle.find(percent => percent.var === data)){
      const arr = percentisControle.find(percent => percent.var === data);
      console.log(arr.filter(percentage => percentage === value));
      if(arr.find(percentage => percentage === value)){

      }
    }
  }

  return (
    <Container>
      <label>OCT Data</label>
      <Break />
      <label><strong>Peripapillary RNFL</strong></label>
      <p>Average thickness (in microns)</p>
      <Form>
        <Row>
          <div>
            <Box>
              <label>OD</label>
              <input type='text' id='peripapillary' onChange={event => {
                const value = event.target.value;
                setCognitiveTest({
                  physician: value,
                })
              }} onInput={event => handlePercentis(event.target.id, event.target.value)}/>
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
          </div>
          <PercentisCard>
          <table>
            <tr>
              <td>
              <label>Controls</label>
              <Percentis style={{ backgroundColor: background}}>p10-p25</Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
              <Percentis>p25-p50</Percentis>
              </td>
            </tr>
          </table>
          </PercentisCard>
        </Row>
        <Break />
        <label><strong>Total macular thickness(ILM/RPE)</strong></label>
        <p>Total macular thickness (in microns)</p>
        <Row>
          <div>
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
          </div>
          <PercentisCard>
          <table>
            <tr>
              <td>
              <label>Controls</label>
              <Percentis></Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
              <Percentis></Percentis>
              </td>
            </tr>
          </table>
          </PercentisCard>
        </Row>
        <Break />
        <label><strong>Macular volume</strong></label>
        <p>Average volume (in mm3)</p>
        <Row>
          <div>
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
          </div>
          <PercentisCard>
          <table>
            <tr>
              <td>
              <label>Controls</label>
              <Percentis></Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
              <Percentis></Percentis>
              </td>
            </tr>
          </table>
          </PercentisCard>
        </Row>
        <Break />
        <label><strong>GCL/IPL thickness</strong></label>
        <p>Average thickness (in microns)</p>
        <Row>
          <div>
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
          </div>
          <PercentisCard>
          <table>
            <tr>
              <td>
              <label>Controls</label>
              <Percentis></Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
              <Percentis></Percentis>
              </td>
            </tr>
          </table>
          </PercentisCard>
        </Row>
        <Break />
        <label><strong>GCL/IPL/RNFL thickness</strong></label>
        <p>Average thickness (in microns)</p>
        <Row>
          <div>
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
          </div>
          <PercentisCard>
          <table>
            <tr>
              <td>
              <label>Controls</label>
              <Percentis></Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
              <Percentis></Percentis>
              </td>
            </tr>
          </table>
          </PercentisCard>
        </Row>
      </Form>
      <Break />
    </Container>
  );
}

export default OctData;
