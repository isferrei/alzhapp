import React from "react";

import {
  Container,
  Form,
  Box,
  Break,
  Row,
  Percentis,
  PercentisCard,
} from "./styles";
import { CognitiveTestContext } from "../../context/cognitiveTestContext";
import { OctDataContext } from "../../context/octDataContext";

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
                <Percentis></Percentis>
              </td>
            </tr>
          </table>
        </PercentisCard>
      </Row>
    </Container>
  );
}
export default Results;
