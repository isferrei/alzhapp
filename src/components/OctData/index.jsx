import React from 'react';
import { Button, Container } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Form, Box, Break, Row, Percentis, PercentisCard } from './styles';
import { defaultReducer } from '../../reducers';
import colors from '../../services/colors';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import { Results } from '../../components';

const percentisControle = [
  {
    var: 'peripapillary',
    p1: 72.9,
    p5: 80.6,
    p10: 84.7,
    p25: 91.6,
    p50: 99.3,
    p75: 106.9,
    p90: 113.8,
    p95: 117.9,
    p99: 125.7,
  },
  {
    var: 'macular',
    p1: 242.9,
    p5: 252.4,
    p10: 257.4,
    p25: 265.8,
    p50: 275.1,
    p75: 284.4,
    p90: 292.8,
    p95: 297.9,
    p99: 307.3,
  },
  {
    var: 'GCL/IPL',
    p1: 57.6,
    p5: 62.2,
    p10: 64.7,
    p25: 68.8,
    p50: 73.4,
    p75: 77.9,
    p90: 82.1,
    p95: 84.5,
    p99: 89.1,
  },
  {
    var: 'GCL/IPL/RNFL',
    p1: 84.6,
    p5: 89.3,
    p10: 91.9,
    p25: 96.1,
    p50: 100.8,
    p75: 105.4,
    p90: 109.7,
    p95: 112.2,
    p99: 116.9,
  },
  {
    var: 'macular volume',
    p1: 7.2,
    p5: 7.5,
    p10: 7.6,
    p25: 7.9,
    p50: 8.2,
    p75: 8.4,
    p90: 8.7,
    p95: 8.8,
    p99: 9.1,
  },
];

function OctData(props) {
  const octDataInitialState = {
    peripapillary: {
      od: '',
      os: '',
    },
    macular_thickness: {
      od: '',
      os: '',
    },
    macular_volume: {
      od: '',
      os: '',
    },
    gcl_ipl: {
      od: '',
      os: '',
    },
    gcl_ipl_rnfl: {
      od: '',
      os: '',
    },
  };

  const [octData, setOctData] = React.useReducer(
    defaultReducer,
    octDataInitialState
  );
  const [background, setBackground] = React.useState();

  console.log(octData);

  function handlePercentis(data, value) {

    const percent = '';

    if (percentisControle.find((percent) => percent.var === data)) {
      const arr = percentisControle.find((percent) => percent.var === data);
      console.log(arr);
      if (value >= arr.p1 && value <= arr.p5) {
        return (percent = 'p1-p5');
      } else if (value >= arr.p5 && value <= arr.p10) {
        return (percent = 'p5-p10');
      } else if (value >= arr.p10 && value <= arr.p25) {
        return (percent = 'p10-p25');
      } else if (value >= arr.p25 && value <= arr.p50) {
        return (percent = 'p25-p50');
      } else if (value >= arr.p50 && value <= arr.p75) {
        return (percent = 'p50-p75');
      } else if (value >= arr.p75 && value <= arr.p90) {
        return (percent = 'p75-p90');
      } else if (value >= arr.p90 && value <= arr.p95) {
        return (percent = 'p90-p95');
      } else if (value >= arr.p95 && value <= arr.p99) {
        return (percent = 'p95-p99');
      }
    }

    return percent;
  }

  console.log(background);

  return (
    <>
      <Container>
        <label>OCT Data</label>
        <Break />
        <label>
          <strong>Peripapillary RNFL</strong>
        </label>
        <p>Average thickness (in microns)</p>
        <Form>
          <Row>
            <div>
              <Box>
                <label>OD</label>
                <input
                  type='text'
                  id='peripapillary'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      peripapillary: {
                        od: value,
                      },
                    });
                  }}
                  onInput={(event) =>
                    handlePercentis(event.target.id, event.target.value)
                  }
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      peripapillary: {
                        os: value,
                      },
                    });
                  }}
                />
              </Box>
            </div>
            <PercentisCard>
              <table>
                <tr>
                  <td>
                    <label>Controls</label>
                    <Percentis>{}</Percentis>
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
          <label>
            <strong>Total macular thickness(ILM/RPE)</strong>
          </label>
          <p>Total macular thickness (in microns)</p>
          <Row>
            <div>
              <Box>
                <label>OD</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      macular_thickness: {
                        od: value,
                      },
                    });
                  }}
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      macular_thickness: {
                        os: value,
                      },
                    });
                  }}
                />
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
          <label>
            <strong>Macular volume</strong>
          </label>
          <p>Average volume (in mm3)</p>
          <Row>
            <div>
              <Box>
                <label>OD</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      macular_volume: {
                        od: value,
                      },
                    });
                  }}
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      macular_volume: {
                        os: value,
                      },
                    });
                  }}
                />
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
          <label>
            <strong>GCL/IPL thickness</strong>
          </label>
          <p>Average thickness (in microns)</p>
          <Row>
            <div>
              <Box>
                <label>OD</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl: {
                        od: value,
                      },
                    });
                  }}
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl: {
                        os: value,
                      },
                    });
                  }}
                />
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
          <label>
            <strong>GCL/IPL/RNFL thickness</strong>
          </label>
          <p>Average thickness (in microns)</p>
          <Row>
            <div>
              <Box>
                <label>OD</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl_rnfl: {
                        od: parseInt(value),
                      },
                    });
                  }}
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl_rnfl: {
                        os: value,
                      },
                    });
                  }}
                />
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
      <BrowserRouter>
        <Link to='/results'>
          <Button variant='contained' color='primary' href='#contained-buttons'>
            Generate Results
          </Button>
        </Link>

        <Route path='/results' component={Results} />
      </BrowserRouter>
    </>
  );
}

export default OctData;
