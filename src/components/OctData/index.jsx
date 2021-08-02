import React from 'react';
import { Button } from '@material-ui/core';
import {
  Container,
  Form,
  Box,
  Break,
  Row,
  Percentis,
  PercentisCard,
  NextButton,
} from './styles';
import { defaultReducer } from '../../reducers';
import { colors, percentisControle } from '../../services';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import { Results } from '../../components';
import { OctDataContext } from '../../context/octDataContext';

function OctData(props) {
  const { octData, setOctData } = React.useContext(OctDataContext);
  const [peripOsPerc, setPeripOsPerc] = React.useState();
  const [peripOdPerc, setPeripOdPerc] = React.useState();
  const [totalMacularOdPerc, setTotalMacularOdPerc] = React.useState();
  const [totalMacularOsPerc, setTotalMacularOsPerc] = React.useState();
  const [macularVolOdPerc, setMacularVolOdPerc] = React.useState();
  const [macularVolOsPerc, setMacularVolOsPerc] = React.useState();
  const [gclIplOdPerc, setGclIplOdPerc] = React.useState();
  const [gclIplOsPerc, setGclIplOsPerc] = React.useState();
  const [gclIplRnflOdPerc, setGclIplRnflOdPerc] = React.useState();
  const [gclIplRnflOsPerc, setGclIplRnflOsPerc] = React.useState();

  function handlePercentis(data, value) {
    if (percentisControle.find((percent) => percent.var === data)) {
      const arr = percentisControle.find((percent) => percent.var === data);

      if (value < arr.p1) {
        return <Percentis background={colors.red}>{`< p1`}</Percentis>;
      } else if (value >= arr.p1 && value <= arr.p5) {
        return <Percentis background={colors.yellow}>p1-p5</Percentis>;
      } else if (value >= arr.p5 && value <= arr.p10) {
        return <Percentis background={colors.orange}>p5-p10</Percentis>;
      } else if (value >= arr.p10 && value <= arr.p25) {
        return <Percentis background={colors.green}>p10-p25</Percentis>;
      } else if (value >= arr.p25 && value <= arr.p50) {
        return <Percentis background={colors.green}>p25-p50</Percentis>;
      } else if (value >= arr.p50 && value <= arr.p75) {
        return <Percentis background={colors.green}>p50-p75</Percentis>;
      } else if (value >= arr.p75 && value <= arr.p90) {
        return <Percentis background={colors.green}>p75-p90</Percentis>;
      } else if (value >= arr.p90 && value <= arr.p95) {
        return <Percentis background={colors.green}>p90-p95</Percentis>;
      } else if (value >= arr.p95 && value <= arr.p99) {
        return <Percentis background={colors.white}>p95-p99</Percentis>;
      }
    }
  }

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
                        os: '',
                      },
                    });
                  }}
                  onInput={(event) =>
                    setPeripOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  id='peripapillary'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      peripapillary: { ...octData.peripapillary.od, os: value },
                    });
                  }}
                  onInput={(event) =>
                    setPeripOsPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
            </div>
            <PercentisCard>
              <table>
                <tr>
                  <td>
                    <label>Controls</label>
                    {peripOdPerc ? peripOdPerc : <Percentis />}
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td>{peripOsPerc ? peripOsPerc : <Percentis />}</td>
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
                  id='total_macular'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      macular_thickness: {
                        od: value,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setTotalMacularOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  id='total_macular'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      macular_thickness: {
                        os: value,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setTotalMacularOsPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
            </div>
            <PercentisCard>
              <table>
                <tr>
                  <td>
                    <label>Controls</label>
                    {totalMacularOdPerc ? totalMacularOdPerc : <Percentis />}
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td>
                    {totalMacularOsPerc ? totalMacularOsPerc : <Percentis />}
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
                  id='macular_volume'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      macular_volume: {
                        od: value,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setMacularVolOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  id='macular_volume'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      macular_volume: {
                        os: value,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setMacularVolOsPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
            </div>
            <PercentisCard>
              <table>
                <tr>
                  <td>
                    <label>Controls</label>
                    {macularVolOdPerc ? macularVolOdPerc : <Percentis />}
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td>{macularVolOsPerc ? macularVolOsPerc : <Percentis />}</td>
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
                  id='GLC/IPL'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl: {
                        od: value,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setGclIplOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  id='GLC/IPL'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl: {
                        os: value,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setGclIplOsPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
            </div>
            <PercentisCard>
              <table>
                <tr>
                  <td>
                    <label>Controls</label>
                    {gclIplOdPerc ? gclIplOdPerc : <Percentis />}
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td> {gclIplOsPerc ? gclIplOsPerc : <Percentis />}</td>
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
                  id='GLC/IPL/RNFL'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl_rnfl: {
                        od: parseInt(value),
                      },
                    });
                  }}
                  onInput={(event) =>
                    setGclIplRnflOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type='text'
                  id='GLC/IPL/RNFL'
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl_rnfl: {
                        os: value,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setGclIplRnflOsPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
              </Box>
            </div>
            <PercentisCard>
              <table>
                <tr>
                  <td>
                    <label>Controls</label>
                    {gclIplRnflOdPerc ? gclIplRnflOdPerc : <Percentis />}
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td>{gclIplRnflOsPerc ? gclIplRnflOsPerc : <Percentis />}</td>
                </tr>
              </table>
            </PercentisCard>
          </Row>
        </Form>
        <Break />
      </Container>
      <NextButton>
        <BrowserRouter>
          <Link to='/results'>
            <Button
              variant='contained'
              color='primary'
              href='#contained-buttons'
            >
              Generate Results
            </Button>
          </Link>

          <Route path='/results' component={Results} />
        </BrowserRouter>
      </NextButton>
    </>
  );
}

export default OctData;
