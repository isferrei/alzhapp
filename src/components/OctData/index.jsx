import React from "react";
import { Button, Container } from "@material-ui/core";
import { Form, Box, Break, Row, Percentis, PercentisCard } from "./styles";
import { defaultReducer } from "../../reducers";
import colors from "../../services/colors";
import { Route, Link, BrowserRouter } from "react-router-dom";
import { Results } from "../../components";

const percentisControle = [
  {
    var: "peripapillary",
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
    var: "total_macular",
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
    var: "GCL/IPL",
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
    var: "GCL/IPL/RNFL",
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
    var: "macular_volume",
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
      od: "",
      os: "",
    },
    macular_thickness: {
      od: "",
      os: "",
    },
    macular_volume: {
      od: "",
      os: "",
    },
    gcl_ipl: {
      od: "",
      os: "",
    },
    gcl_ipl_rnfl: {
      od: "",
      os: "",
    },
  };

  const [octData, setOctData] = React.useReducer(
    defaultReducer,
    octDataInitialState
  );
  const [background, setBackground] = React.useState();
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

  console.log(peripOsPerc);

  function handlePercentis(data, value) {
    if (percentisControle.find((percent) => percent.var === data)) {
      const arr = percentisControle.find((percent) => percent.var === data);

      console.log(value);
      if (value >= arr.p1 && value <= arr.p5) {
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
                  type="text"
                  id="peripapillary"
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      peripapillary: {
                        od: value,
                        os: "",
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
                  type="text"
                  id="peripapillary"
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      peripapillary: {
                        os: value,
                      },
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
                  type="text"
                  id="total_macular"
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
                  type="text"
                  id="total_macular"
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
                  type="text"
                  id="macular_volume"
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
                  type="text"
                  id="macular_volume"
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
                  type="text"
                  id="GLC/IPL"
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
                  type="text"
                  id="GLC/IPL"
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
                  type="text"
                  id="GLC/IPL/RNFL"
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
                  type="text"
                  id="GLC/IPL/RNFL"
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl_rnfl: {
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
      <BrowserRouter>
        <Link to="/results">
          <Button variant="contained" color="primary" href="#contained-buttons">
            Generate Results
          </Button>
        </Link>

        <Route path="/results" component={Results} />
      </BrowserRouter>
    </>
  );
}

export default OctData;
