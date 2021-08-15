import React from "react";

import {
  Container,
  Form,
  Box,
  Break,
  Row,
  Percentis,
  PercentisCard,
  PrintButton,
} from "./styles";
import { CognitiveTestContext } from "../../context/cognitiveTestContext";
import { OctDataContext } from "../../context/octDataContext";
import { colors, percentisControle } from "../../services";
import print from "../../icons/print.svg";

function Results(props) {
  const cognitiveTestData = React.useContext(CognitiveTestContext);
  const octData = React.useContext(OctDataContext);

  return (
    <Container>
      <label>Results / Summary:</label>
      <Form>
        <Box>
          <label>Physician:</label>{" "}
          <p>{cognitiveTestData.cognitiveTest.physician}</p>
        </Box>
        <Box>
          <label>Patient:</label>{" "}
          <p>{cognitiveTestData.cognitiveTest.patient}</p>
        </Box>
        <Box>
          <label>ID number:</label>{" "}
          <p>{cognitiveTestData.cognitiveTest.idNumber}</p>
        </Box>
        <Box>
          <label>Sex:</label> <p>{cognitiveTestData.cognitiveTest.sex}</p>
          <label> Age:</label> <p>{cognitiveTestData.cognitiveTest.age}</p>
        </Box>
        <Box>
          <label>Diagnosis:</label>{" "}
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
            <p>{octData.octData.peripapillary.od} μm</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.peripapillary.os} μm</p>
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
            <p>{octData.octData.macular_thickness.od} μm</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.macular_thickness.os} μm</p>
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
        <strong>Macular volume (in mm³)</strong>
      </label>
      <Row>
        <div>
          <Box>
            <label>OD</label>
            <p>{octData.octData.macular_volume.od} mm³</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.macular_volume.os} mm³</p>
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
            <p>{octData.octData.gcl_ipl.od} μm</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.gcl_ipl.os} μm</p>
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
                {" "}
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
            <p>{octData.octData.gcl_ipl_rnfl.od} μm</p>
          </Box>
          <Box>
            <label>OS</label>
            <p>{octData.octData.gcl_ipl_rnfl.os} μm</p>
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
      <PrintButton>
        <img src={print} width="25px" height="25px" />
        Print
      </PrintButton>
    </Container>
  );
}
export default Results;
