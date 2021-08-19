import React from "react";
import {
  Container,
  Form,
  Box,
  Break,
  Row,
  Percentis,
  PercentisCard,
  NextButton,
  Title,
  PercentisImg,
  Footer,
} from "./styles";
import { colors, percentisControle } from "../../services";
import { NavLink } from "react-router-dom";
import { OctDataContext } from "../../context/octDataContext";
import graph1 from "../../img/graph1.png";
import graph2 from "../../img/graph2.png";
import graph3 from "../../img/graph3.png";
import percentis from "../../img/percentis.svg";

function OctData(props) {
  const {
    octData,
    setOctData,
    setGclIplRnflOdPerc,
    gclIplRnflOdPerc,
    gclIplRnflOsPerc,
    setGclIplRnflOsPerc,
    gclIplOsPerc,
    setGclIplOsPerc,
    gclIplOdPerc,
    setGclIplOdPerc,
    macularVolOsPerc,
    setMacularVolOsPerc,
    macularVolOdPerc,
    setMacularVolOdPerc,
    totalMacularOsPerc,
    setTotalMacularOsPerc,
    totalMacularOdPerc,
    setTotalMacularOdPerc,
    peripOdPerc,
    setPeripOdPerc,
    peripOsPerc,
    setPeripOsPerc,
  } = React.useContext(OctDataContext);

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
      } else if (value > arr.p99) {
        return <Percentis background={colors.white}>{`> p99`}</Percentis>;
      }
    }
  }

  return (
    <>
      <Container>
        <h3>OCT Data</h3>
        <Break />
        <Title>
          <img src={graph1} alt="OCT data peripapillary graphic" />
          <div>
            <strong>Peripapillary RNFL</strong>
            <p>Average thickness (in microns)</p>
          </div>
        </Title>

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
                        os: octData.peripapillary.os,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setPeripOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
                μm
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
                        od: octData.peripapillary.od,
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
                μm
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
              <PercentisImg>
                <img src={percentis} width="40px" alt="Percentage graphic" />
              </PercentisImg>
            </PercentisCard>
          </Row>
          <Break />
          <Title>
            <img src={graph2} alt="Total retinal thickness graphic" />
            <div>
              <strong>Total retinal thickness(ILM/RPE)</strong>
              <p>Total macular thickness (in microns)</p>
            </div>
          </Title>
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
                        os: octData.macular_thickness.os,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setTotalMacularOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
                μm
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
                        od: octData.macular_thickness.od,
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
                μm
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
              <PercentisImg>
                <img src={percentis} width="40px" alt="Percentage graphic" />
              </PercentisImg>
            </PercentisCard>
          </Row>
          <Break />
          <Title>
            <img src={graph2} alt="OCT data macular volume graphic" />
            <div>
              <strong>Macular volume</strong>
              <p>Average volume (in mm³)</p>
            </div>
          </Title>
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
                        os: octData.macular_volume.os,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setMacularVolOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
                mm³
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
                        od: octData.macular_volume.od,
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
                mm³
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
              <PercentisImg>
                <img src={percentis} alt="Percentage graphic" width="40px" />
              </PercentisImg>
            </PercentisCard>
          </Row>
          <Break />
          <Title>
            <img src={graph3} alt="OCT data GCL/IPL thickness graphic" />
            <div>
              <strong>GCL/IPL thickness</strong>
              <p>Average thickness (in microns)</p>
            </div>
          </Title>
          <Row>
            <div>
              <Box>
                <label>OD</label>
                <input
                  type="text"
                  id="GCL/IPL"
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl: {
                        od: value,
                        os: octData.gcl_ipl.os,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setGclIplOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
                μm
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type="text"
                  id="GCL/IPL"
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl: {
                        od: octData.gcl_ipl.od,
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
                μm
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
              <PercentisImg>
                <img src={percentis} alt="Percentage graphic" width="40px" />
              </PercentisImg>
            </PercentisCard>
          </Row>
          <Break />
          <Title>
            <img src={graph3} alt="OCT data GCL/IPL/RNFL thickness graphic" />
            <div>
              <strong>GCL/IPL/RNFL thickness</strong>
              <p>Average thickness (in microns)</p>
            </div>
          </Title>
          <Row>
            <div>
              <Box>
                <label>OD</label>
                <input
                  type="text"
                  id="GCL/IPL/RNFL"
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl_rnfl: {
                        od: value,
                        os: octData.gcl_ipl_rnfl.os,
                      },
                    });
                  }}
                  onInput={(event) =>
                    setGclIplRnflOdPerc(
                      handlePercentis(event.target.id, event.target.value)
                    )
                  }
                />
                μm
              </Box>
              <Box>
                <label>OS</label>
                <input
                  type="text"
                  id="GCL/IPL/RNFL"
                  onChange={(event) => {
                    const value = event.target.value;
                    setOctData({
                      gcl_ipl_rnfl: {
                        od: octData.gcl_ipl_rnfl.od,
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
                μm
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
              <PercentisImg>
                <img src={percentis} width="40px" alt="Percentage graphic" />
              </PercentisImg>
            </PercentisCard>
          </Row>
        </Form>
        <Break />
      </Container>
      <NextButton>
        <NavLink to="/results">
          <button href="#contained-buttons">Generate Results</button>
        </NavLink>
      </NextButton>
      <Footer>
        <p>
          <b>RNFL</b>: retinal nerve fiber laser, <b>ILM</b>: internal limiting
          membrane, <b>RPE</b>: retinal pigment epithelium, <b>mm3</b>: cubic
          millimeters, <b>μm</b>: micron, <b>GCL</b>: ganglion cell layer, <b>IPL</b>: inner plexiform layer
        </p>
      </Footer>
    </>
  );
}

export default OctData;
