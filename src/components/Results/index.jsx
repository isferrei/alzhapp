import React from 'react';

import {
  Container,
  Form,
  Box,
  Break,
  Row,
  Percentis,
  PercentisCard,
} from './styles';
import { CognitiveTestContext } from '../../context/cognitiveTestContext';
import { OctDataContext } from '../../context/octDataContext';
import { colors, percentisControle } from '../../services';

function Results(props) {
  const cognitiveTestData = React.useContext(CognitiveTestContext);
  const octData = React.useContext(OctDataContext);

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
    <Container>
      <label>Results / Summary:</label>
      <Form>
        <Box>
          <label>Physician:</label>{' '}
          <p>{cognitiveTestData.cognitiveTest.physician}</p>
        </Box>
        <Box>
          <label>Patient:</label>{' '}
          <p>{cognitiveTestData.cognitiveTest.patient}</p>
        </Box>
        <Box>
          <label>ID number:</label>{' '}
          <p>{cognitiveTestData.cognitiveTest.idNumber}</p>
        </Box>
        <Box>
          <label>Sex:</label> <p>{cognitiveTestData.cognitiveTest.sex}</p>
          <label> Age:</label> <p>{cognitiveTestData.cognitiveTest.age}</p>
        </Box>
        <Box>
          <label>Diagnosis:</label>{' '}
          <p>{cognitiveTestData.cognitiveTest.diagnosis}</p>
        </Box>
      </Form>
      <Break />
      <label>
        <strong>Average Analysis Report</strong>
      </label>
      <Break />
      <label>
        <strong>Peripapillary RNFL (in microns)</strong>
      </label>
      <Row>
        <div>
          <Box>
            <label>OD</label>
            <p>{octData.octData.peripapillary.od}</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.peripapillary.os}</p>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                {octData.peripOdPerc ? octData.peripOdPerc : <Percentis />}
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                {octData.peripOsPerc ? octData.peripOsPerc : <Percentis />}
              </td>
            </tr>
          </table>
        </PercentisCard>
      </Row>
      <Break />
      <label>
        <strong>Total macular thickness (in microns)</strong>
      </label>
      <Row>
        <div>
          <Box>
            <label>OD</label>
            <p>{octData.octData.macular_thickness.od}</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.macular_thickness.os}</p>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                {octData.totalMacularOdPerc ? (
                  octData.totalMacularOdPerc
                ) : (
                  <Percentis />
                )}
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                {octData.totalMacularOsPerc ? (
                  octData.totalMacularOsPerc
                ) : (
                  <Percentis />
                )}
              </td>
            </tr>
          </table>
        </PercentisCard>
      </Row>
      <Break />
      <label>
        <strong>Macular volume (in mm3)</strong>
      </label>
      <Row>
        <div>
          <Box>
            <label>OD</label>
            <p>{octData.octData.macular_volume.od}</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.macular_volume.os}</p>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                {octData.macularVolOdPerc ? (
                  octData.macularVolOdPerc
                ) : (
                  <Percentis />
                )}
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                {octData.macularVolOsPerc ? (
                  octData.macularVolOsPerc
                ) : (
                  <Percentis />
                )}
              </td>
            </tr>
          </table>
        </PercentisCard>
      </Row>
      <Break />
      <label>
        <strong>GCL/IPL thickness (in microns)</strong>
      </label>
      <Row>
        <div>
          <Box>
            <label>OD</label>
            <p>{octData.octData.gcl_ipl.od}</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.gcl_ipl.os}</p>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                {octData.gclIplOdPerc ? octData.gclIplOdPerc : <Percentis />}
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                {' '}
                {octData.gclIplOsPerc ? octData.gclIplOsPerc : <Percentis />}
              </td>
            </tr>
          </table>
        </PercentisCard>
      </Row>
      <Break />
      <label>
        <strong>GCL/IPL/RNFL (in microns)</strong>
      </label>
      <Row>
        <div>
          <Box>
            <label>OD</label>
            <p>{octData.octData.gcl_ipl_rnfl.od}</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.gcl_ipl_rnfl.os}</p>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                {octData.gclIplRnflOdPerc ? (
                  octData.gclIplRnflOdPerc
                ) : (
                  <Percentis />
                )}
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                {octData.gclIplRnflOsPerc ? (
                  octData.gclIplRnflOsPerc
                ) : (
                  <Percentis />
                )}
              </td>
            </tr>
          </table>
        </PercentisCard>
      </Row>
    </Container>
  );
}
export default Results;
